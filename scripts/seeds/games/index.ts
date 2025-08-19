import { generateClient } from 'aws-amplify/api';
import categoryQuestData from './category_quest.seed.json';
import featureHuntData from './feature_hunt.seed.json';
import oppositesMatchData from './opposites_match.seed.json';
// Import other seed files as they are created

const client = generateClient();

interface GamePrompt {
  gameType: string;
  promptText: string;
  promptOrder: number;
  imageURL: string;
  soundURL: string;
  options: string[];
  correctAnswer: string;
}

const seedGamePrompts = async () => {
  try {
    console.log('Starting to seed game prompts...');
    
    // Combine all seed data
    const allGamePrompts: GamePrompt[] = [
      ...categoryQuestData,
      ...featureHuntData,
      ...oppositesMatchData,
      // Add other seed data arrays here as they are created
    ];

    console.log(`Total game prompts to seed: ${allGamePrompts.length}`);

    // Batch insert game prompts
    for (const gamePrompt of allGamePrompts) {
      try {
        // Use upsert logic based on gameType + promptOrder
        const existingPrompt = await client.graphql({
          query: `
            query GetGamePrompt($gameType: String!, $promptOrder: Int!) {
              getGamePromptByTypeAndOrder(gameType: $gameType, promptOrder: $promptOrder) {
                id
              }
            }
          `,
          variables: {
            gameType: gamePrompt.gameType,
            promptOrder: gamePrompt.promptOrder
          }
        });

        if (!existingPrompt.data?.getGamePromptByTypeAndOrder) {
          // Create new game prompt
          await client.graphql({
            query: `
              mutation CreateGamePrompt($input: CreateGamePromptInput!) {
                createGamePrompt(input: $input) {
                  id
                  gameType
                  promptOrder
                }
              }
            `,
            variables: {
              input: gamePrompt
            }
          });
          
          console.log(`Created ${gamePrompt.gameType} prompt ${gamePrompt.promptOrder}`);
        } else {
          console.log(`Skipped existing ${gamePrompt.gameType} prompt ${gamePrompt.promptOrder}`);
        }
      } catch (error) {
        console.error(`Error seeding ${gamePrompt.gameType} prompt ${gamePrompt.promptOrder}:`, error);
      }
    }

    console.log('Game prompts seeding completed!');
    
    // Print summary
    const summary = allGamePrompts.reduce((acc, prompt) => {
      acc[prompt.gameType] = (acc[prompt.gameType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('Seeding Summary:');
    Object.entries(summary).forEach(([gameType, count]) => {
      console.log(`  ${gameType}: ${count} prompts`);
    });
    
  } catch (error) {
    console.error('Error seeding game prompts:', error);
    throw error;
  }
};

export { seedGamePrompts };

// If running this file directly
if (require.main === module) {
  seedGamePrompts()
    .then(() => {
      console.log('Seeding completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}
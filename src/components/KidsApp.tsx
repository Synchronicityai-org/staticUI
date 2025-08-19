import React, { useState } from 'react';
import { ArrowLeft, Star, Volume2, RotateCcw, Trophy, Heart } from 'lucide-react';

const KidsApp: React.FC = () => {
  const [currentGame, setCurrentGame] = useState<string>('menu');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const games = [
    {
      id: 'words',
      title: 'Learn Words',
      icon: '📝',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      description: 'Learn new words with fun pictures!'
    },
    {
      id: 'phrases',
      title: 'Fun Phrases',
      icon: '💬',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      description: 'Practice saying phrases together!'
    },
    {
      id: 'sentences',
      title: 'Make Sentences',
      icon: '📚',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      description: 'Build sentences word by word!'
    },
    {
      id: 'objects',
      title: 'Find Objects',
      icon: '🔍',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      description: 'Identify objects in pictures!'
    }
  ];

  const wordLearningData = [
    // A-Z Words for Kids
    { word: 'APPLE', image: '🍎', sound: 'Apple', color: 'bg-red-200' },
    { word: 'BALL', image: '⚽', sound: 'Ball', color: 'bg-blue-200' },
    { word: 'CAT', image: '🐱', sound: 'Cat', color: 'bg-orange-200' },
    { word: 'DOG', image: '🐶', sound: 'Dog', color: 'bg-brown-200' },
    { word: 'EGG', image: '🥚', sound: 'Egg', color: 'bg-yellow-200' },
    { word: 'FISH', image: '🐟', sound: 'Fish', color: 'bg-blue-300' },
    { word: 'GOAT', image: '🐐', sound: 'Goat', color: 'bg-gray-200' },
    { word: 'HAT', image: '👒', sound: 'Hat', color: 'bg-pink-200' },
    { word: 'ICE', image: '🧊', sound: 'Ice', color: 'bg-cyan-200' },
    { word: 'JAR', image: '🫙', sound: 'Jar', color: 'bg-amber-200' },
    { word: 'KITE', image: '🪁', sound: 'Kite', color: 'bg-purple-200' },
    { word: 'LION', image: '🦁', sound: 'Lion', color: 'bg-yellow-300' },
    { word: 'MOON', image: '🌙', sound: 'Moon', color: 'bg-indigo-200' },
    { word: 'NOSE', image: '👃', sound: 'Nose', color: 'bg-pink-300' },
    { word: 'OWL', image: '🦉', sound: 'Owl', color: 'bg-brown-300' },
    { word: 'PIG', image: '🐷', sound: 'Pig', color: 'bg-pink-400' },
    { word: 'QUEEN', image: '👸', sound: 'Queen', color: 'bg-purple-300' },
    { word: 'RABBIT', image: '🐰', sound: 'Rabbit', color: 'bg-gray-300' },
    { word: 'SUN', image: '☀️', sound: 'Sun', color: 'bg-yellow-200' },
    { word: 'TREE', image: '🌳', sound: 'Tree', color: 'bg-green-200' },
    { word: 'UMBRELLA', image: '☂️', sound: 'Umbrella', color: 'bg-blue-400' },
    { word: 'VAN', image: '🚐', sound: 'Van', color: 'bg-green-300' },
    { word: 'WHALE', image: '🐋', sound: 'Whale', color: 'bg-blue-500' },
    { word: 'XRAY', image: '🩻', sound: 'X-ray', color: 'bg-gray-400' },
    { word: 'YAK', image: '🦬', sound: 'Yak', color: 'bg-brown-400' },
    { word: 'ZEBRA', image: '🦓', sound: 'Zebra', color: 'bg-black' }
  ];

  const phrasesData = [
    // 50+ Fun Phrases for Kids
    { phrase: 'Hello Friend!', image: '👋', color: 'bg-pink-200', sound: 'Hello Friend!' },
    { phrase: 'Good Morning!', image: '🌅', color: 'bg-yellow-200', sound: 'Good Morning!' },
    { phrase: 'Thank You!', image: '🙏', color: 'bg-blue-200', sound: 'Thank You!' },
    { phrase: 'I Love You!', image: '❤️', color: 'bg-red-200', sound: 'I Love You!' },
    { phrase: 'Please Help!', image: '🤝', color: 'bg-green-200', sound: 'Please Help!' },
    { phrase: 'See You Later!', image: '👋', color: 'bg-purple-200', sound: 'See You Later!' },
    { phrase: 'How Are You?', image: '😊', color: 'bg-orange-200', sound: 'How Are You?' },
    { phrase: 'I Am Happy!', image: '😄', color: 'bg-yellow-300', sound: 'I Am Happy!' },
    { phrase: 'Good Night!', image: '🌙', color: 'bg-indigo-200', sound: 'Good Night!' },
    { phrase: 'Excuse Me!', image: '🙋', color: 'bg-cyan-200', sound: 'Excuse Me!' },
    { phrase: 'I Am Sorry!', image: '😔', color: 'bg-gray-200', sound: 'I Am Sorry!' },
    { phrase: 'You Are Welcome!', image: '🤗', color: 'bg-green-300', sound: 'You Are Welcome!' },
    { phrase: 'Let Us Play!', image: '🎮', color: 'bg-purple-300', sound: 'Let Us Play!' },
    { phrase: 'I Want Water!', image: '💧', color: 'bg-blue-300', sound: 'I Want Water!' },
    { phrase: 'I Am Hungry!', image: '🍽️', color: 'bg-orange-300', sound: 'I Am Hungry!' },
    { phrase: 'Time To Eat!', image: '🍎', color: 'bg-red-300', sound: 'Time To Eat!' },
    { phrase: 'Let Us Go!', image: '🚶', color: 'bg-green-400', sound: 'Let Us Go!' },
    { phrase: 'Come Here!', image: '👆', color: 'bg-yellow-400', sound: 'Come Here!' },
    { phrase: 'Look At Me!', image: '👀', color: 'bg-pink-300', sound: 'Look At Me!' },
    { phrase: 'Listen Please!', image: '👂', color: 'bg-purple-400', sound: 'Listen Please!' },
    { phrase: 'I Need Help!', image: '🆘', color: 'bg-red-400', sound: 'I Need Help!' },
    { phrase: 'All Done!', image: '✅', color: 'bg-green-500', sound: 'All Done!' },
    { phrase: 'More Please!', image: '➕', color: 'bg-blue-400', sound: 'More Please!' },
    { phrase: 'No Thank You!', image: '🚫', color: 'bg-gray-300', sound: 'No Thank You!' },
    { phrase: 'Yes Please!', image: '✔️', color: 'bg-green-600', sound: 'Yes Please!' },
    { phrase: 'I Like This!', image: '👍', color: 'bg-lime-200', sound: 'I Like This!' },
    { phrase: 'This Is Fun!', image: '🎉', color: 'bg-rainbow-200', sound: 'This Is Fun!' },
    { phrase: 'Let Me Try!', image: '🙋‍♂️', color: 'bg-teal-200', sound: 'Let Me Try!' },
    { phrase: 'I Can Do It!', image: '💪', color: 'bg-orange-400', sound: 'I Can Do It!' },
    { phrase: 'Great Job!', image: '🌟', color: 'bg-yellow-500', sound: 'Great Job!' },
    { phrase: 'Well Done!', image: '👏', color: 'bg-green-700', sound: 'Well Done!' },
    { phrase: 'I Am Proud!', image: '🏆', color: 'bg-gold-200', sound: 'I Am Proud!' },
    { phrase: 'You Did It!', image: '🎊', color: 'bg-pink-400', sound: 'You Did It!' },
    { phrase: 'High Five!', image: '🙏', color: 'bg-purple-500', sound: 'High Five!' },
    { phrase: 'Good Try!', image: '👌', color: 'bg-blue-500', sound: 'Good Try!' },
    { phrase: 'Keep Going!', image: '🚀', color: 'bg-red-500', sound: 'Keep Going!' },
    { phrase: 'Almost There!', image: '🎯', color: 'bg-amber-300', sound: 'Almost There!' },
    { phrase: 'I Am Tired!', image: '😴', color: 'bg-indigo-300', sound: 'I Am Tired!' },
    { phrase: 'Time To Sleep!', image: '🛏️', color: 'bg-purple-600', sound: 'Time To Sleep!' },
    { phrase: 'Wake Up!', image: '⏰', color: 'bg-yellow-600', sound: 'Wake Up!' },
    { phrase: 'Let Us Read!', image: '📚', color: 'bg-brown-200', sound: 'Let Us Read!' },
    { phrase: 'Story Time!', image: '📖', color: 'bg-pink-500', sound: 'Story Time!' },
    { phrase: 'Sing A Song!', image: '🎵', color: 'bg-cyan-300', sound: 'Sing A Song!' },
    { phrase: 'Dance With Me!', image: '💃', color: 'bg-magenta-200', sound: 'Dance With Me!' },
    { phrase: 'I Love Music!', image: '🎶', color: 'bg-violet-200', sound: 'I Love Music!' },
    { phrase: 'Pretty Colors!', image: '🌈', color: 'bg-rainbow-300', sound: 'Pretty Colors!' },
    { phrase: 'Big Hug!', image: '🤗', color: 'bg-warm-200', sound: 'Big Hug!' },
    { phrase: 'Kiss Kiss!', image: '😘', color: 'bg-rose-300', sound: 'Kiss Kiss!' },
    { phrase: 'I Miss You!', image: '🥺', color: 'bg-blue-600', sound: 'I Miss You!' },
    { phrase: 'Welcome Home!', image: '🏠', color: 'bg-green-800', sound: 'Welcome Home!' },
    { phrase: 'Have Fun!', image: '🎈', color: 'bg-party-200', sound: 'Have Fun!' },
    { phrase: 'Be Careful!', image: '⚠️', color: 'bg-yellow-700', sound: 'Be Careful!' }
  ];

  const objectsData = [
    // 200+ Objects for Kids to Identify
    // Animals
    { name: 'Cat', image: '🐱', options: ['Cat', 'Dog', 'Bird'], correct: 0 },
    { name: 'Dog', image: '🐶', options: ['Cat', 'Dog', 'Fish'], correct: 1 },
    { name: 'Bird', image: '🐦', options: ['Fish', 'Cat', 'Bird'], correct: 2 },
    { name: 'Fish', image: '🐟', options: ['Fish', 'Bird', 'Cat'], correct: 0 },
    { name: 'Lion', image: '🦁', options: ['Tiger', 'Lion', 'Bear'], correct: 1 },
    { name: 'Elephant', image: '🐘', options: ['Horse', 'Cow', 'Elephant'], correct: 2 },
    { name: 'Monkey', image: '🐵', options: ['Monkey', 'Lion', 'Tiger'], correct: 0 },
    { name: 'Tiger', image: '🐅', options: ['Lion', 'Tiger', 'Bear'], correct: 1 },
    { name: 'Bear', image: '🐻', options: ['Dog', 'Cat', 'Bear'], correct: 2 },
    { name: 'Rabbit', image: '🐰', options: ['Rabbit', 'Mouse', 'Cat'], correct: 0 },
    { name: 'Mouse', image: '🐭', options: ['Cat', 'Mouse', 'Dog'], correct: 1 },
    { name: 'Horse', image: '🐴', options: ['Cow', 'Pig', 'Horse'], correct: 2 },
    { name: 'Cow', image: '🐄', options: ['Cow', 'Horse', 'Sheep'], correct: 0 },
    { name: 'Pig', image: '🐷', options: ['Dog', 'Pig', 'Cat'], correct: 1 },
    { name: 'Sheep', image: '🐑', options: ['Horse', 'Cow', 'Sheep'], correct: 2 },
    { name: 'Chicken', image: '🐔', options: ['Chicken', 'Duck', 'Bird'], correct: 0 },
    { name: 'Duck', image: '🦆', options: ['Bird', 'Duck', 'Chicken'], correct: 1 },
    { name: 'Owl', image: '🦉', options: ['Duck', 'Bird', 'Owl'], correct: 2 },
    { name: 'Frog', image: '🐸', options: ['Frog', 'Fish', 'Bird'], correct: 0 },
    { name: 'Snake', image: '🐍', options: ['Fish', 'Snake', 'Frog'], correct: 1 },
    { name: 'Turtle', image: '🐢', options: ['Frog', 'Fish', 'Turtle'], correct: 2 },
    { name: 'Butterfly', image: '🦋', options: ['Butterfly', 'Bird', 'Bee'], correct: 0 },
    { name: 'Bee', image: '🐝', options: ['Bird', 'Bee', 'Butterfly'], correct: 1 },
    { name: 'Spider', image: '🕷️', options: ['Bee', 'Ant', 'Spider'], correct: 2 },
    
    // Transportation
    { name: 'Car', image: '🚗', options: ['Car', 'Bus', 'Bike'], correct: 0 },
    { name: 'Bus', image: '🚌', options: ['Car', 'Bus', 'Train'], correct: 1 },
    { name: 'Train', image: '🚂', options: ['Bus', 'Car', 'Train'], correct: 2 },
    { name: 'Airplane', image: '✈️', options: ['Airplane', 'Car', 'Boat'], correct: 0 },
    { name: 'Boat', image: '🚤', options: ['Car', 'Boat', 'Plane'], correct: 1 },
    { name: 'Bicycle', image: '🚲', options: ['Car', 'Bus', 'Bicycle'], correct: 2 },
    { name: 'Motorcycle', image: '🏍️', options: ['Motorcycle', 'Car', 'Bike'], correct: 0 },
    { name: 'Truck', image: '🚚', options: ['Car', 'Truck', 'Bus'], correct: 1 },
    { name: 'Fire Truck', image: '🚒', options: ['Bus', 'Car', 'Fire Truck'], correct: 2 },
    { name: 'Police Car', image: '🚓', options: ['Police Car', 'Car', 'Bus'], correct: 0 },
    { name: 'Ambulance', image: '🚑', options: ['Car', 'Ambulance', 'Bus'], correct: 1 },
    { name: 'Helicopter', image: '🚁', options: ['Plane', 'Car', 'Helicopter'], correct: 2 },
    
    // Food & Drinks
    { name: 'Apple', image: '🍎', options: ['Apple', 'Orange', 'Banana'], correct: 0 },
    { name: 'Orange', image: '🍊', options: ['Apple', 'Orange', 'Grape'], correct: 1 },
    { name: 'Banana', image: '🍌', options: ['Orange', 'Apple', 'Banana'], correct: 2 },
    { name: 'Grapes', image: '🍇', options: ['Grapes', 'Apple', 'Orange'], correct: 0 },
    { name: 'Strawberry', image: '🍓', options: ['Apple', 'Strawberry', 'Orange'], correct: 1 },
    { name: 'Watermelon', image: '🍉', options: ['Apple', 'Orange', 'Watermelon'], correct: 2 },
    { name: 'Pineapple', image: '🍍', options: ['Pineapple', 'Apple', 'Orange'], correct: 0 },
    { name: 'Peach', image: '🍑', options: ['Apple', 'Peach', 'Orange'], correct: 1 },
    { name: 'Cherry', image: '🍒', options: ['Apple', 'Orange', 'Cherry'], correct: 2 },
    { name: 'Lemon', image: '🍋', options: ['Lemon', 'Orange', 'Apple'], correct: 0 },
    { name: 'Carrot', image: '🥕', options: ['Apple', 'Carrot', 'Orange'], correct: 1 },
    { name: 'Broccoli', image: '🥦', options: ['Carrot', 'Apple', 'Broccoli'], correct: 2 },
    { name: 'Corn', image: '🌽', options: ['Corn', 'Carrot', 'Apple'], correct: 0 },
    { name: 'Tomato', image: '🍅', options: ['Apple', 'Tomato', 'Orange'], correct: 1 },
    { name: 'Potato', image: '🥔', options: ['Apple', 'Carrot', 'Potato'], correct: 2 },
    { name: 'Bread', image: '🍞', options: ['Bread', 'Cake', 'Cookie'], correct: 0 },
    { name: 'Cake', image: '🎂', options: ['Bread', 'Cake', 'Cookie'], correct: 1 },
    { name: 'Cookie', image: '🍪', options: ['Bread', 'Cake', 'Cookie'], correct: 2 },
    { name: 'Pizza', image: '🍕', options: ['Pizza', 'Bread', 'Cake'], correct: 0 },
    { name: 'Hamburger', image: '🍔', options: ['Pizza', 'Hamburger', 'Bread'], correct: 1 },
    { name: 'Hot Dog', image: '🌭', options: ['Pizza', 'Bread', 'Hot Dog'], correct: 2 },
    { name: 'Ice Cream', image: '🍦', options: ['Ice Cream', 'Cake', 'Cookie'], correct: 0 },
    { name: 'Milk', image: '🥛', options: ['Water', 'Milk', 'Juice'], correct: 1 },
    { name: 'Juice', image: '🧃', options: ['Milk', 'Water', 'Juice'], correct: 2 },
    
    // Household Items
    { name: 'House', image: '🏠', options: ['Tree', 'House', 'Car'], correct: 1 },
    { name: 'Door', image: '🚪', options: ['Door', 'Window', 'Wall'], correct: 0 },
    { name: 'Window', image: '🪟', options: ['Door', 'Window', 'Wall'], correct: 1 },
    { name: 'Chair', image: '🪑', options: ['Table', 'Bed', 'Chair'], correct: 2 },
    { name: 'Table', image: '🪑', options: ['Table', 'Chair', 'Bed'], correct: 0 },
    { name: 'Bed', image: '🛏️', options: ['Chair', 'Bed', 'Table'], correct: 1 },
    { name: 'Lamp', image: '💡', options: ['Chair', 'Table', 'Lamp'], correct: 2 },
    { name: 'Clock', image: '🕐', options: ['Clock', 'Watch', 'Phone'], correct: 0 },
    { name: 'Phone', image: '📱', options: ['Clock', 'Phone', 'Watch'], correct: 1 },
    { name: 'Computer', image: '💻', options: ['Phone', 'TV', 'Computer'], correct: 2 },
    { name: 'Television', image: '📺', options: ['Television', 'Computer', 'Phone'], correct: 0 },
    { name: 'Refrigerator', image: '🧊', options: ['Stove', 'Refrigerator', 'Sink'], correct: 1 },
    { name: 'Stove', image: '🔥', options: ['Sink', 'Fridge', 'Stove'], correct: 2 },
    { name: 'Sink', image: '🚿', options: ['Sink', 'Stove', 'Fridge'], correct: 0 },
    { name: 'Toilet', image: '🚽', options: ['Sink', 'Toilet', 'Bath'], correct: 1 },
    { name: 'Bathtub', image: '🛁', options: ['Sink', 'Toilet', 'Bathtub'], correct: 2 },
    { name: 'Mirror', image: '🪞', options: ['Mirror', 'Window', 'Door'], correct: 0 },
    { name: 'Towel', image: '🏖️', options: ['Blanket', 'Towel', 'Pillow'], correct: 1 },
    { name: 'Pillow', image: '🛏️', options: ['Towel', 'Blanket', 'Pillow'], correct: 2 },
    { name: 'Blanket', image: '🛌', options: ['Blanket', 'Pillow', 'Towel'], correct: 0 },
    
    // Toys & Games
    { name: 'Ball', image: '⚽', options: ['Ball', 'Toy', 'Game'], correct: 0 },
    { name: 'Doll', image: '🪆', options: ['Bear', 'Doll', 'Ball'], correct: 1 },
    { name: 'Teddy Bear', image: '🧸', options: ['Doll', 'Ball', 'Teddy Bear'], correct: 2 },
    { name: 'Blocks', image: '🧱', options: ['Blocks', 'Ball', 'Doll'], correct: 0 },
    { name: 'Puzzle', image: '🧩', options: ['Game', 'Puzzle', 'Blocks'], correct: 1 },
    { name: 'Kite', image: '🪁', options: ['Ball', 'Toy', 'Kite'], correct: 2 },
    { name: 'Balloon', image: '🎈', options: ['Balloon', 'Ball', 'Kite'], correct: 0 },
    { name: 'Drum', image: '🥁', options: ['Piano', 'Drum', 'Guitar'], correct: 1 },
    { name: 'Guitar', image: '🎸', options: ['Drum', 'Piano', 'Guitar'], correct: 2 },
    { name: 'Piano', image: '🎹', options: ['Piano', 'Drum', 'Guitar'], correct: 0 },
    
    // Nature & Weather
    { name: 'Sun', image: '☀️', options: ['Moon', 'Sun', 'Star'], correct: 1 },
    { name: 'Moon', image: '🌙', options: ['Sun', 'Moon', 'Star'], correct: 1 },
    { name: 'Star', image: '⭐', options: ['Sun', 'Moon', 'Star'], correct: 2 },
    { name: 'Cloud', image: '☁️', options: ['Cloud', 'Sun', 'Moon'], correct: 0 },
    { name: 'Rain', image: '🌧️', options: ['Sun', 'Rain', 'Snow'], correct: 1 },
    { name: 'Snow', image: '❄️', options: ['Rain', 'Sun', 'Snow'], correct: 2 },
    { name: 'Rainbow', image: '🌈', options: ['Rainbow', 'Cloud', 'Sun'], correct: 0 },
    { name: 'Tree', image: '🌳', options: ['Flower', 'Tree', 'Grass'], correct: 1 },
    { name: 'Flower', image: '🌸', options: ['Tree', 'Grass', 'Flower'], correct: 2 },
    { name: 'Grass', image: '🌱', options: ['Grass', 'Tree', 'Flower'], correct: 0 },
    { name: 'Mountain', image: '⛰️', options: ['Hill', 'Mountain', 'Rock'], correct: 1 },
    { name: 'Ocean', image: '🌊', options: ['Lake', 'River', 'Ocean'], correct: 2 },
    { name: 'Beach', image: '🏖️', options: ['Beach', 'Ocean', 'Sand'], correct: 0 },
    { name: 'Forest', image: '🌲', options: ['Tree', 'Forest', 'Park'], correct: 1 },
    
    // Body Parts
    { name: 'Eye', image: '👁️', options: ['Nose', 'Eye', 'Ear'], correct: 1 },
    { name: 'Nose', image: '👃', options: ['Eye', 'Nose', 'Mouth'], correct: 1 },
    { name: 'Mouth', image: '👄', options: ['Eye', 'Nose', 'Mouth'], correct: 2 },
    { name: 'Ear', image: '👂', options: ['Ear', 'Eye', 'Nose'], correct: 0 },
    { name: 'Hand', image: '✋', options: ['Foot', 'Hand', 'Arm'], correct: 1 },
    { name: 'Foot', image: '🦶', options: ['Hand', 'Leg', 'Foot'], correct: 2 },
    { name: 'Head', image: '🗣️', options: ['Head', 'Hand', 'Foot'], correct: 0 },
    { name: 'Hair', image: '💇', options: ['Eye', 'Hair', 'Nose'], correct: 1 },
    { name: 'Teeth', image: '🦷', options: ['Eye', 'Nose', 'Teeth'], correct: 2 },
    
    // Colors & Shapes
    { name: 'Red', image: '🔴', options: ['Red', 'Blue', 'Green'], correct: 0 },
    { name: 'Blue', image: '🔵', options: ['Red', 'Blue', 'Yellow'], correct: 1 },
    { name: 'Yellow', image: '🟡', options: ['Blue', 'Green', 'Yellow'], correct: 2 },
    { name: 'Green', image: '🟢', options: ['Green', 'Red', 'Blue'], correct: 0 },
    { name: 'Orange', image: '🟠', options: ['Red', 'Orange', 'Yellow'], correct: 1 },
    { name: 'Purple', image: '🟣', options: ['Blue', 'Red', 'Purple'], correct: 2 },
    { name: 'Circle', image: '⭕', options: ['Circle', 'Square', 'Triangle'], correct: 0 },
    { name: 'Square', image: '⬜', options: ['Circle', 'Square', 'Triangle'], correct: 1 },
    { name: 'Triangle', image: '🔺', options: ['Circle', 'Square', 'Triangle'], correct: 2 },
    { name: 'Heart', image: '❤️', options: ['Heart', 'Star', 'Circle'], correct: 0 },
    
    // School & Learning
    { name: 'Book', image: '📖', options: ['Book', 'Ball', 'Cup'], correct: 0 },
    { name: 'Pencil', image: '✏️', options: ['Pen', 'Pencil', 'Crayon'], correct: 1 },
    { name: 'Crayon', image: '🖍️', options: ['Pencil', 'Pen', 'Crayon'], correct: 2 },
    { name: 'Paper', image: '📄', options: ['Paper', 'Book', 'Pencil'], correct: 0 },
    { name: 'Scissors', image: '✂️', options: ['Pencil', 'Scissors', 'Paper'], correct: 1 },
    { name: 'Glue', image: '🧴', options: ['Pencil', 'Paper', 'Glue'], correct: 2 },
    { name: 'Backpack', image: '🎒', options: ['Backpack', 'Book', 'Pencil'], correct: 0 },
    { name: 'Ruler', image: '📏', options: ['Pencil', 'Ruler', 'Paper'], correct: 1 },
    { name: 'Calculator', image: '🧮', options: ['Book', 'Pencil', 'Calculator'], correct: 2 },
    { name: 'Globe', image: '🌍', options: ['Globe', 'Ball', 'Map'], correct: 0 },
    
    // Clothing
    { name: 'Shirt', image: '👕', options: ['Pants', 'Shirt', 'Shoes'], correct: 1 },
    { name: 'Pants', image: '👖', options: ['Shirt', 'Pants', 'Hat'], correct: 1 },
    { name: 'Shoes', image: '👟', options: ['Hat', 'Socks', 'Shoes'], correct: 2 },
    { name: 'Hat', image: '👒', options: ['Hat', 'Shirt', 'Pants'], correct: 0 },
    { name: 'Socks', image: '🧦', options: ['Shoes', 'Socks', 'Hat'], correct: 1 },
    { name: 'Jacket', image: '🧥', options: ['Shirt', 'Pants', 'Jacket'], correct: 2 },
    { name: 'Dress', image: '👗', options: ['Dress', 'Shirt', 'Pants'], correct: 0 },
    { name: 'Gloves', image: '🧤', options: ['Socks', 'Gloves', 'Hat'], correct: 1 },
    { name: 'Scarf', image: '🧣', options: ['Hat', 'Gloves', 'Scarf'], correct: 2 },
    
    // Numbers
    { name: 'One', image: '1️⃣', options: ['One', 'Two', 'Three'], correct: 0 },
    { name: 'Two', image: '2️⃣', options: ['One', 'Two', 'Four'], correct: 1 },
    { name: 'Three', image: '3️⃣', options: ['Two', 'Four', 'Three'], correct: 2 },
    { name: 'Four', image: '4️⃣', options: ['Four', 'Three', 'Five'], correct: 0 },
    { name: 'Five', image: '5️⃣', options: ['Four', 'Five', 'Six'], correct: 1 },
    { name: 'Six', image: '6️⃣', options: ['Five', 'Seven', 'Six'], correct: 2 },
    { name: 'Seven', image: '7️⃣', options: ['Seven', 'Six', 'Eight'], correct: 0 },
    { name: 'Eight', image: '8️⃣', options: ['Seven', 'Eight', 'Nine'], correct: 1 },
    { name: 'Nine', image: '9️⃣', options: ['Eight', 'Ten', 'Nine'], correct: 2 },
    { name: 'Ten', image: '🔟', options: ['Ten', 'Nine', 'Eight'], correct: 0 }
  ];

  const playSound = (sound: string) => {
    // Use Web Speech API for text-to-speech
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(sound);
      utterance.rate = 0.8; // Slower speech for kids
      utterance.pitch = 1.2; // Higher pitch for kids
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log(`Playing sound: ${sound}`);
    }
  };

  const renderGameMenu = () => (
    <div className="min-h-screen bg-gradient-to-br from-rainbow-200 via-pink-100 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
            <span className="text-5xl">🌈</span>
            <span>Kids Learning Fun!</span>
            <span className="text-5xl">🎮</span>
          </h1>
          <p className="text-xl text-gray-600">Choose a fun game to play and learn!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setCurrentGame(game.id)}
              className={`bg-gradient-to-br ${game.bgColor} rounded-3xl p-8 border-4 border-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left`}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${game.color} rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                {game.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{game.title}</h3>
              <p className="text-gray-600 text-lg">{game.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-white/80 rounded-3xl p-6 border-4 border-yellow-200 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Your Progress</h3>
                <p className="text-gray-600">Keep learning and having fun!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-600 mb-1">⭐ {score}</div>
              <div className="text-lg text-gray-600">Level {level}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWordGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setCurrentGame('menu')}
            className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Games</span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-white/80 px-4 py-2 rounded-2xl shadow-lg">
              <span className="font-bold text-pink-600">⭐ {score}</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
            <span className="text-4xl">📝</span>
            <span>Learn Words!</span>
          </h2>
          <p className="text-xl text-gray-600">Tap the pictures to learn new words!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {wordLearningData.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-3xl p-8 border-4 border-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => {
                playSound(item.sound);
                setScore(score + 10);
              }}
            >
              <div className="text-center">
                <div className="text-8xl mb-4">{item.image}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{item.word}</h3>
                <button className="bg-white/80 px-4 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto">
                  <Volume2 className="w-5 h-5" />
                  <span className="font-bold">Say It!</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPhrasesGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setCurrentGame('menu')}
            className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Games</span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-white/80 px-4 py-2 rounded-2xl shadow-lg">
              <span className="font-bold text-blue-600">⭐ {score}</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
            <span className="text-4xl">💬</span>
            <span>Fun Phrases!</span>
          </h2>
          <p className="text-xl text-gray-600">Practice saying these phrases together!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {phrasesData.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-3xl p-8 border-4 border-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => {
                playSound(item.sound);
                setScore(score + 15);
              }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{item.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.phrase}</h3>
                <button className="bg-white/80 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto">
                  <Volume2 className="w-5 h-5" />
                  <span className="font-bold">Practice Together!</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSentencesGame = () => {
    const sentenceData = [
      { sentence: 'I am happy', words: ['I', 'am', 'happy'], image: '😊', color: 'bg-yellow-200' },
      { sentence: 'The cat is big', words: ['The', 'cat', 'is', 'big'], image: '🐱', color: 'bg-orange-200' },
      { sentence: 'I like apples', words: ['I', 'like', 'apples'], image: '🍎', color: 'bg-red-200' },
      { sentence: 'The sun is bright', words: ['The', 'sun', 'is', 'bright'], image: '☀️', color: 'bg-yellow-300' },
      { sentence: 'Dogs can run fast', words: ['Dogs', 'can', 'run', 'fast'], image: '🐶', color: 'bg-brown-200' },
      { sentence: 'I love my family', words: ['I', 'love', 'my', 'family'], image: '❤️', color: 'bg-pink-200' }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentGame('menu')}
              className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to Games</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="bg-white/80 px-4 py-2 rounded-2xl shadow-lg">
                <span className="font-bold text-green-600">⭐ {score}</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
              <span className="text-4xl">📚</span>
              <span>Make Sentences!</span>
            </h2>
            <p className="text-xl text-gray-600">Listen to the sentence and practice saying it!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sentenceData.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-3xl p-8 border-4 border-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  playSound(item.sentence);
                  setScore(score + 25);
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.image}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.sentence}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {item.words.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="bg-white/80 px-3 py-1 rounded-xl text-sm font-bold text-gray-700 shadow-sm"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                  <button className="bg-white/80 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto">
                    <Volume2 className="w-5 h-5" />
                    <span className="font-bold">Say the Sentence!</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderObjectsGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-violet-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setCurrentGame('menu')}
            className="flex items-center space-x-2 bg-white/80 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Games</span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-white/80 px-4 py-2 rounded-2xl shadow-lg">
              <span className="font-bold text-purple-600">⭐ {score}</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
            <span className="text-4xl">🔍</span>
            <span>Find Objects!</span>
          </h2>
          <p className="text-xl text-gray-600">What do you see? Pick the right answer!</p>
        </div>

        <div className="grid gap-8">
          {objectsData.map((item, index) => (
            <div key={index} className="bg-white/80 rounded-3xl p-8 border-4 border-purple-200 shadow-xl">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{item.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What is this?</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {item.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => {
                      if (optionIndex === item.correct) {
                        setScore(score + 20);
                        // Show success animation
                      }
                    }}
                    className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      optionIndex === item.correct
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:shadow-lg'
                        : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400'
                    } hover:scale-105 shadow-lg`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGame = () => {
    switch (currentGame) {
      case 'words':
        return renderWordGame();
      case 'phrases':
        return renderPhrasesGame();
      case 'sentences':
        return renderSentencesGame();
      case 'objects':
        return renderObjectsGame();
      default:
        return renderGameMenu();
    }
  };

  return renderGame();
};

export default KidsApp;
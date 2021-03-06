const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Velvet Foot',
    description: 'A Deadly Mushroom. All of your picked mushrooms die if you pick this mushroom.',
    imgUrl: 'https://images.unsplash.com/photo-1572734316317-d1fe61a26162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom2',
    name: 'Old Man of the Woods',
    description: 'A Poisonous Mushroom. Two of your picked mushrooms die if you if you pick this mushroom.',
    imgUrl: 'https://images.unsplash.com/photo-1541935981-e6f5d54e7430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Candy Cap',
    description: 'A Poisonous Mushroom. Two of your picked mushrooms die if you if you pick this mushroom.',
    imgUrl: 'https://images.unsplash.com/photo-1555726698-e17c0c3d0099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Sweetbread Mushroom',
    description: 'A Poisonous Mushroom. Two of your picked mushrooms die if you if you pick this mushroom.',
    imgUrl: 'https://images.unsplash.com/photo-1586751599178-beb196bb33cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Fairy-Ring Mushroom',
    description: 'A Magic Mushroom. You get one of every mushroom and win the game if you pick this mushroom',
    imgUrl: 'https://images.unsplash.com/photo-1570781848329-b475c561e8b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Shaggy Mane',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1571396687938-b3b80dfe6bb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Inky Cap',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1571396643106-ba46de3fac14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Chicken of the Woods',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1578146270428-c168d3410a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Shaggy Ink Cap',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1567346325130-4c4167641eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Translucent Umbrella',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1572101983250-900857259b43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1407&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Giraffe Mushroom',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1577970841354-fd6cb17a4de9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Horn of Plenty',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1574792687619-29518179c9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Orange Pore',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1583723708278-6fb1bd59d89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Fuzzy Munchkin',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1558241048-9cd68a14f4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Yellow Chanterelle',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1543269068-924a64037726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Toadstool',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1545433539-aa8270f71a54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Mini Moss-room',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1583698156872-04e0db227349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Orange Peel',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1564676239488-6d2594846763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Pleated Skirt',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1571154019947-3464b78daf91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Hive Mind',
    description: 'A Normal Mushroom. One step closer, keeping picking!',
    imgUrl: 'https://images.unsplash.com/photo-1567334314101-26f2e7658aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

let basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const youWin = () => {
  const gatherAll = mushrooms.filter((mushroom) => mushroom.isPoisonous === false && mushroom.isDeadly === false && mushroom.isMagic === false);
  const checkMushroomLog = gatherAll.map((mushroom) => {
    const isIncluded = basket.includes((mushroom));
    return isIncluded;
  });
  const isAWinner = checkMushroomLog.every((x) => x === true);
  if (isAWinner) {
    return 'win';
  }
  return '';
};

const pickedPoisonous = () => {
  if (basket.length < 2) {
    basket.splice(0, 1);
  } else {
    basket.splice(0, 2);
  }
};

const pickedDeadly = () => {
  basket = [];
  return 'die';
};

const pickedMagic = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isPoisonous === false) {
      basket.push(mushroom);
    }
  });
  return youWin();
};


const pickAMushroom = () => {
  const pickedMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  let alertMessage = '';
  if (pickedMushroom.isPoisonous) {
    pickedPoisonous();
  } else if (pickedMushroom.isDeadly) {
    alertMessage = pickedDeadly();
  } else if (pickedMushroom.isMagic) {
    alertMessage = pickedMagic();
  } else {
    basket.push(pickedMushroom);
    alertMessage = youWin();
  }
  return alertMessage;
};

export default {
  getMushrooms,
  getBasket,
  pickAMushroom,
  youWin,
};

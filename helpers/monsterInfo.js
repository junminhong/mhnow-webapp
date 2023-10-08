export const RARE = [
  'rare1', 'rare2', 'rare3', 'rare4', 'rare5'
]

export const PART = {
  HEAD: '頭部',
  BELLY: '腹部',
  FRONT_LEGS: '前肢',
  BACK: '後背',
  LEFT_WING: '左翼',
  RIGHT_WING: '右翼',
  TAIL: '尾巴',
  LEFT_HIND_LEGS: '左後腿',
  RIGHT_HIND_LEGS: '右後腿',
  CHEEK_POUCHES: '頸袋',
  BODY: '身體',
  LEFT_CORNER: '左角',
  RIGHT_CORNER: '右角',
}

export const MONSTER = [
  {
    name: '大凶豺龍',
    alias: 'g-jagr',
    image_name: 'g-jagr.png',
    weaknesses: [
      'fire',
      'poison'
    ],
    attack: [],
    place: [
      'forest',
      'desert',
      'swamp'
    ],
    part_destruction: ['HEAD', 'BELLY', 'FRONT_LEGS'],
    bonus: {
      rare1: [
        '19.png',
        '20.png',
      ],
      rare2: [
        '21.png',
      ],
      rare3: [
        '22.png',
      ],
      rare4: [
        '23.png',
      ],
      rare5: [
        '24.png',
      ],
      rare6: [
        '97.webp',
      ]
    }
  },
  {
    name: '搔鳥',
    alias: 'kulu',
    image_name: 'kulu.png',
    weaknesses: [
      'water',
    ],
    attack: [],
    place: [
      'forest',
      'desert',
      'swamp'
    ],
    part_destruction: ['HEAD', 'FRONT_LEGS'],
  },
  {
    name: '毒妖鳥',
    alias: 'puke',
    image_name: 'puke.png',
    weaknesses: [
      'thunder',
    ],
    attack: ['poison'],
    place: [
      'forest',
      'desert',
      'swamp'
    ],
    part_destruction: ['HEAD', 'BACK', 'LEFT_WING', 'RIGHT_WING', 'TAIL'],
  },
  {
    name: '土砂龍',
    alias: 'barr',
    image_name: 'barr.png',
    weaknesses: [
      'fire',
      'poison'
    ],
    attack: ['water'],
    place: [
      'desert',
      'swamp'
    ],
    part_destruction: ['HEAD', 'FRONT_LEGS', 'LEFT_HIND_LEGS', 'RIGHT_HIND_LEGS', 'TAIL'],
  },
  {
    name: '大凶顎龍',
    alias: 'g-girr',
    image_name: 'g-girr.png',
    weaknesses: [
      'water',
    ],
    attack: ['paralysis'],
    place: [
      'forest',
      'swamp'
    ],
    part_destruction: ['HEAD', 'FRONT_LEGS', 'TAIL'],
  },
  {
    name: '飛雷龍',
    alias: 'tobi',
    image_name: 'tobi.png',
    weaknesses: [
      'water',
      'poison'
    ],
    attack: ['thunder'],
    place: [
      'forest',
      'swamp'
    ],
    part_destruction: ['HEAD', 'BACK', 'FRONT_LEGS', 'TAIL'],
  },
  {
    name: '浮空龍',
    alias: 'paol',
    image_name: 'paol.png',
    weaknesses: [
      'fire',
    ],
    attack: [],
    place: [
      'desert',
      'swamp'
    ],
    part_destruction: ['BACK', 'CHEEK_POUCHES', 'LEFT_WING', 'RIGHT_WING', 'TAIL'],
  },
  {
    name: '泥魚龍',
    alias: 'jyur',
    image_name: 'jyur.png',
    weaknesses: [
      'thunder',
    ],
    attack: ['water'],
    place: [
      'swamp'
    ],
    part_destruction: ['HEAD', 'BODY', 'LEFT_HIND_LEGS', 'RIGHT_HIND_LEGS', 'TAIL'],
  },
  {
    name: '蠻顎龍',
    alias: 'anja',
    image_name: 'anja.png',
    weaknesses: [
      'water',
    ],
    attack: ['fire'],
    place: [
      'forest',
      'desert',
    ],
    part_destruction: ['HEAD', 'RIGHT_HIND_LEGS', 'LEFT_HIND_LEGS', 'TAIL'],
  },
  {
    name: '雌火龍',
    alias: 'rathi',
    image_name: 'rathi.png',
    weaknesses: [
      'thunder',
      'dragon'
    ],
    attack: ['fire', 'poison'],
    place: [
      'forest',
      'desert',
    ],
    part_destruction: ['HEAD', 'BACK', 'LEFT_WING', 'RIGHT_WING', 'TAIL'],
  },
  {
    name: '風漂龍',
    alias: 'legi',
    image_name: 'legi.png',
    weaknesses: [
      'fire',
      'poison'
    ],
    attack: ['ice'],
    place: [
      'swamp'
    ],
    part_destruction: ['HEAD', 'LEFT_WING', 'RIGHT_WING', 'TAIL', 'BACK'],
  },
  {
    name: '角龍',
    alias: 'diab',
    image_name: 'diab.png',
    weaknesses: [
      'ice',
      'dragon',
      'paralysis'
    ],
    attack: [],
    place: [
      'desert',
    ],
    part_destruction: ['LEFT_CORNER', 'RIGHT_CORNER', 'BACK', 'TAIL'],
  },
  {
    name: '火龍',
    alias: 'ratha',
    image_name: 'ratha.png',
    weaknesses: [
      'thunder',
      'dragon'
    ],
    attack: ['fire', 'poison'],
    place: [
      'forest',
    ],
    part_destruction: ['HEAD', 'BACK', 'LEFT_WING', 'RIGHT_WING', 'TAIL'],
  },
  {
    name: '黑角龍',
    alias: 'b-diab',
    image_name: 'b-diab.png',
    weaknesses: [
      'ice',
      'paralysis'
    ],
    attack: [],
    place: [
      'desert',
    ],
    part_destruction: ['LEFT_CORNER', 'RIGHT_CORNER', 'BACK', 'TAIL'],
  },
  {
    name: '櫻火龍',
    alias: 'p-rathi',
    image_name: 'p-rathi.png',
    weaknesses: [
      'thunder',
      'dragon'
    ],
    attack: [],
    place: [
      'forest',
    ],
    part_destruction: ['HEAD', 'BACK', 'LEFT_WING', 'RIGHT_WING', 'TAIL'],
  },
  {
    name: '蒼火龍',
    alias: 'a-ratha',
    image_name: 'a-ratha.png',
    weaknesses: [
      'ice',
      'dragon'
    ],
    attack: [],
    place: [
      'forest',
    ],
    part_destruction: ['HEAD', 'BACK', 'LEFT_WING', 'RIGHT_WING', 'TAIL'],
  },
]
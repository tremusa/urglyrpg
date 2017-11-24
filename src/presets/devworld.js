import { FieldConstants } from '../constants/field-constants.js';
import { ObjectConstants } from '../constants/object-constants.js';
import { WorldConstants } from '../constants/world-constants.js';
import { ItemConstants } from '../constants/item-constants.js';

export const DevWorld = {
  presetName: 'dev',
  world: [{
      id: WorldConstants.key.playerField,
      value: '0:0'
    },
    {
      id: WorldConstants.key.playerId,
      value: '1'
    }
  ],
  objects: [{
      id: '1',
      type: ObjectConstants.type.player,
      humanoid: {
        name: 'player',
        race: ObjectConstants.humanoid.race.human,
      },
      field: '0:0',
      inventory: [],
      gold: 50,
      action: null
    },
    {
      id: '2',
      type: ObjectConstants.type.tree,
      field: '0:0'
    },
    {
      id: '3',
      type: ObjectConstants.type.tree,
      field: '0:0'
    },
    {
      id: '4',
      type: ObjectConstants.type.tree,
      field: '0:0'
    },
    {
      id: '5',
      type: ObjectConstants.type.tree,
      field: '0:0'
    },
    {
      id: '6',
      type: ObjectConstants.type.rock,
      field: '0:0'
    },
    {
      id: '7',
      type: ObjectConstants.type.rock,
      field: '0:0'
    },
    {
      id: '8',
      type: ObjectConstants.type.rock,
      field: '0:0'
    },
    {
      id: '9',
      type: ObjectConstants.type.rock,
      field: '0:0'
    },
    {
      id: '10',
      type: ObjectConstants.type.plant,
      subType: ObjectConstants.subType.plant.flower,
      field: '0:0'
    },
    {
      id: '11',
      type: ObjectConstants.type.plant,
      subType: ObjectConstants.subType.plant.bush,
      field: '0:0'
    },
    {
      id: '12',
      type: ObjectConstants.type.plant,
      subType: ObjectConstants.subType.plant.flower,
      field: '0:0'
    },
    {
      id: '13',
      type: ObjectConstants.type.humanoid,
      humanoid: {
        name: 'merch',
        race: ObjectConstants.humanoid.race.human,
        profession: ObjectConstants.humanoid.profession.merchant
      },
      field: '0:0',
      inventory: [{
        type: ItemConstants.type.axe
      }, {
        type: ItemConstants.type.axe
      }, {
        type: ItemConstants.type.axe
      }],
      gold: 5000
    },
    {
      id: '14',
      type: ObjectConstants.type.humanoid,
      humanoid: {
        name: 'lumberjacker',
        race: ObjectConstants.humanoid.race.human,
        profession: ObjectConstants.humanoid.profession.lumberjack
      },
      field: '0:0',
      inventory: [{
        type: ItemConstants.type.axe
      }],
      gold: 200
    },
    {
      id: '15',
      type: ObjectConstants.type.animal,
      subType: ObjectConstants.subType.animal.wolve,
      field: '0:0'
    },
    {
      id: '16',
      type: ObjectConstants.type.animal,
      subType: ObjectConstants.subType.animal.pig,
      field: '0:0'
    },
    {
      id: '17',
      type: ObjectConstants.type.animal,
      subType: ObjectConstants.subType.animal.fox,
      field: '0:0'
    },
    {
      id: '18',
      type: ObjectConstants.type.animal,
      subType: ObjectConstants.subType.animal.bird,
      field: '0:0'
    },
    {
      id: '19',
      type: ObjectConstants.type.animal,
      subType: ObjectConstants.subType.animal.cow,
      field: '0:0'
    },
  ],
  fields: [{
      id: '0:0',
      x: 0,
      y: 0,
      type: FieldConstants.type.forest,
      objects: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'
      ]
    },
    {
      id: '0:1',
      x: 0,
      y: 1,
      type: FieldConstants.type.desert,
      objects: []
    },
    {
      id: '1:0',
      x: 1,
      y: 0,
      type: FieldConstants.type.grass,
      objects: []
    },
    {
      id: '1:1',
      x: 1,
      y: 1,
      type: FieldConstants.type.ice,
      objects: []
    }
  ]
};
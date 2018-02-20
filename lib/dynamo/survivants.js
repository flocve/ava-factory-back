import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'survivants';

export function getSurvivants() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'nom',
      'cout',
      'faction',
      'img',
      'img_min',
      'is_new',
    ],
  };

  return db.scan(params);
}

export function getSurvivantById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function getSurvivantsByFaction(factionId) {
  const params = {
    TableName,
    FilterExpression: 'faction = :faction_id',
    ExpressionAttributeValues: { ':faction_id': factionId },
  };

  return db.scan(params);
}

export function createSurvivant(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      nom: args.nom,
      cout: args.cout,
      faction: args.faction,
      img: args.img,
      img_min: args.img_min,
      is_new: args.is_new,
    },
  };

  return db.createItem(params);
}

export function updateSurvivant(args) {
  const params = {
    TableName: 'survivants',
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':name': args.name,
      ':cout': args.cout,
      ':faction': args.faction,
      ':img': args.img,
      ':img_min': args.img_min,
      ':is_new': args.is_new,
    },
    UpdateExpression: 'SET name = :name, cout = :cout, faction = :faction, img = :img, img_min = :img_min, is_new = :is_new',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteSurvivant(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}

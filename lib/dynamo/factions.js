import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'factions';

export function getFactions() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'nom',
      'img',
    ],
  };

  return db.scan(params);
}

export function getFactionById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function createFaction(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      nom: args.nom,
      img: args.img,
    },
  };

  return db.createItem(params);
}

export function updateFaction(args) {
  const params = {
    TableName: 'factions',
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':name': args.name,
      ':img': args.img,
    },
    UpdateExpression: 'SET name = :name, img = :img',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteFaction(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}

import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'membres';

export function getMembreById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function getMembresBySurvivant(survivantId) {
  const params = {
    TableName,
    FilterExpression: 'survivant = :survivant_id',
    ExpressionAttributeValues: { ':survivant_id': survivantId },
  };

  return db.scan(params);
}

export function createMembre(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      survivant: args.survivant,
      type: args.type,
      val_blanc: args.val_blanc,
      val_bleue: args.val_bleue,
      val_rouge: args.val_rouge,
      bullet_blanc: args.bullet_blanc,
      bullet_bleue: args.bullet_bleue,
      localisations: args.localisations,
    },
  };

  return db.createItem(params);
}

export function updateMembre(args) {
  const params = {
    TableName: 'membres',
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':survivant': args.survivant,
      ':type': args.type,
      ':val_blanc': args.val_blanc,
      ':val_bleue': args.val_bleue,
      ':Val_rouge': args.Val_rouge,
      ':bullet_blanc': args.bullet_blanc,
      ':bullet_bleue': args.bullet_bleue,
      ':bullet_rouge': args.bullet_rouge,
      ':localisations': args.localisations,
    },
    UpdateExpression: 'SET survivant = :survivant,type = :type, val_blanc = :val_blanc, val_bleue = :val_bleue, Val_rouge = :Val_rouge, bullet_blanc = :bullet_blanc, bullet_bleue = :bullet_bleue, bullet_rouge = :bullet_rouge, localisations= :localisations',
    ReturnValues: 'ALL_NEW',
  };
  return db.updateItem(params, args);
}

export function deleteMembre(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}

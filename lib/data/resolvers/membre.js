import * as dbMembres from '../../dynamo/membres';
import * as dbSurvivants from '../../dynamo/survivants';

export default {
  Query: {
    membre: (_, args) => dbMembres.getMembreById(args.id),
  },
  Mutation: {
    createMembre: (_, args) => dbMembres.createMembre(args),
    updateMembre: (_, args) => dbMembres.updateMembre(args),
    deleteMembre: (_, args) => dbMembres.deleteMembre(args),
  },
  Membre: {
    survivant: membre => dbSurvivants.getSurvivantById(membre.survivant),
  },
};

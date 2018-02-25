import * as dbSurvivants from '../../dynamo/survivants';
import * as dbFactions from '../../dynamo/factions';
import * as dbMembres from '../../dynamo/membres';

export default {
  Query: {
    survivants: () => dbSurvivants.getSurvivants(),
    survivant: (_, args) => dbSurvivants.getSurvivantById(args.id),
  },
  Mutation: {
    createSurvivant: (_, args) => dbSurvivants.createSurvivant(args),
    updateSurvivant: (_, args) => dbSurvivants.updateSurvivant(args),
    deleteSurvivant: (_, args) => dbSurvivants.deleteSurvivant(args),
  },
  Survivant: {
    faction: survivant => dbFactions.getFactionById(survivant.faction),
    membres: survivant => dbMembres.getMembresBySurvivant(survivant.id),
  },
};

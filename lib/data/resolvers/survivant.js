import * as dbSurvivants from '../../dynamo/survivants';
import * as dbFactions from '../../dynamo/factions';
import * as dbMembres from '../../dynamo/membres';

export default {
  Query: {
    survivants: () => dbSurvivants.getSurvivants(),
    survivant: (_, args) => dbSurvivants.getSurvivantById(args.id),
  },
  Mutation: {
    createSurvivant: (_, args) => {
      // On créé le survivant
      dbSurvivants.createSurvivant(args.input)
        .then((survivant) => {
          args.input.membres.forEach((membre) => {
            const membreArgs = membre;
            membreArgs.survivant = survivant.id;
            dbMembres.createMembre(membreArgs);
          });

          // On get le résultat (ne marche pas pour le moment)
          return dbSurvivants.getSurvivantById(survivant.id);
        });
    },
    updateSurvivant: (_, args) => dbSurvivants.updateSurvivant(args),
    deleteSurvivant: (_, args) => dbSurvivants.deleteSurvivant(args),
  },

  Survivant: {
    faction: survivant => dbFactions.getFactionById(survivant.faction),
    membres: survivant => dbMembres.getMembresBySurvivant(survivant.id),
  },
};

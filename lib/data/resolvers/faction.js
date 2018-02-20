import * as dbFactions from '../../dynamo/factions';
import * as dbSurvivants from '../../dynamo/survivants';

export default {
  Query: {
    factions: () => dbFactions.getFactions(),
    faction: (_, args) => dbFactions.getFactionById(args.id),
  },
  Mutation: {
    createFaction: (_, args) => dbFactions.createFaction(args),
    updateFaction: (_, args) => dbFactions.updateFaction(args),
    deleteFaction: (_, args) => dbFactions.deleteFaction(args),
  },
  Faction: {
    survivants: faction => dbSurvivants.getSurvivantsByFaction(faction.id),
  },
};

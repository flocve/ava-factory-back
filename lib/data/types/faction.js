export default `
  type Faction {
    id: ID!
    nom: String
    img: String
    survivants: [Survivant]

  }

  type Query {
    factions: [Faction]
    faction(id: ID!): Faction
  }

  type Mutation {
    createFaction(
      nom: String!
      img: String
    ): Faction
    updateFaction(
      id: ID!
      nom: String
      img: String
    ): Faction
    deleteFaction(
      id: ID!
    ): Faction
  }
`;

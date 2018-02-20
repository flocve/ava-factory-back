export default `
  type Survivant {
    id: ID!
    nom: String
    cout: Int
    faction: Faction
    img: String
    img_min: String
    is_new: Boolean
  }

  type Query {
    survivants: [Survivant]
    survivant(id: ID!): Survivant
  }

  type Mutation {
    createSurvivant(
      nom: String!
      cout: Int!
      faction: String
      img: String
      img_min: String
      is_new: Boolean
    ): Survivant
    updateSurvivant(
      id: ID!
      nom: String
      cout: Int
      faction: String
      img: String
      img_min: String
      is_new: Boolean
    ): Survivant
    deleteSurvivant(
      id: ID!
    ): Survivant
  }
`;

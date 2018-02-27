export default `

  input MembreInput {
    val_blanc: Int
    val_bleue: Int
    Val_Rouge: Int
    bullel_blanc: Int
    bullel_bleue: Int
    bullel_rouge: Int
    localisations: [Int]
  }

  input SurvivantInput {
    nom: String!
    cout: Int!
    faction: String
    membres: [MembreInput]
    img: String
    img_min: String
    is_new: Boolean
  }

  type Survivant {
    id: ID!
    nom: String
    cout: Int
    membres: [Membre]
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
      input: SurvivantInput!
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

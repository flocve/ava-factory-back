export default `

  input MembreInput {
    type: String
    val_blanc: Int
    val_bleue: Int
    val_rouge: Int
    bullet_blanc: Int
    bullet_bleue: Int
    bullet_rouge: Int
    localisations: [Int]
  }

  input SurvivantInput {
    nom: String!
    cout: Int!
    faction: String
    membres: [MembreInput]
    img: String
    img_min: String
    taille_socle: Int
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
    taille_socle: Int
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
      taille_socle: Int
      is_new: Boolean
    ): Survivant
    deleteSurvivant(
      id: ID!
    ): Survivant
  }
`;

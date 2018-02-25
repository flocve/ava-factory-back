export default `
  type Membre {
    id: ID!
    survivant: Survivant!
    val_blanc: Int
    val_bleue: Int
    Val_Rouge: Int
    bullel_blanc: Int
    bullel_bleue: Int
    bullel_rouge: Int
    localisations: [Int]
  }

  type Query {
    membre(id: ID!): Membre
  }

  type Mutation {
    createMembre(
        survivant: String!
        val_blanc: Int
        val_bleue: Int
        Val_Rouge: Int
        bullel_blanc: Int
        bullel_bleue: Int
        bullel_rouge: Int
        localisations: [Int]
    ): Membre
    updateMembre(
      id: ID!
      survivant: String!
      val_blanc: Int
      val_bleue: Int
      Val_Rouge: Int
      bullel_blanc: Int
      bullel_bleue: Int
      bullel_rouge: Int
      localisations: [Int]
    ): Membre
    deleteMembre(
      id: ID!
    ): Membre
  }
`;

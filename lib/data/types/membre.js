export default `
  type Membre {
    id: ID!
    survivant: Survivant!
    type: TypeMembre!
    val_blanc: Int
    val_bleue: Int
    Val_Rouge: Int
    bullel_blanc: Int
    bullel_bleue: Int
    bullel_rouge: Int
    localisations: [Int]
  }

  enum TypeMembre {
    TETE
    BRAS
    TORSE
    JAMBES
    MONTURE
  }

  type Query {
    membre(id: ID!): Membre
  }

  type Mutation {
    createMembre(
        survivant: String!
        type: TypeMembre!
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
      type: TypeMembre
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

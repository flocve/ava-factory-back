export default `
  type Membre {
    id: ID!
    survivant: Survivant!
    type: TypeMembre!
    val_blanc: Int
    val_bleue: Int
    val_rouge: Int
    bullet_blanc: Int
    bullet_bleue: Int
    bullet_rouge: Int
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
        val_rouge: Int
        bullet_blanc: Int
        bullet_bleue: Int
        bullet_rouge: Int
        localisations: [Int]
    ): Membre
    updateMembre(
      id: ID!
      survivant: String!
      type: TypeMembre
      val_blanc: Int
      val_bleue: Int
      val_rouge: Int
      bullet_blanc: Int
      bullet_bleue: Int
      bullet_rouge: Int
      localisations: [Int]
    ): Membre
    deleteMembre(
      id: ID!
    ): Membre
  }
`;

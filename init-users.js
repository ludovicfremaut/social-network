// role_id 1 => admin
// role_id 2 => user
// role_id 3 => stagiaire

db.createCollection('users');
db.users.insert([
  {
    _id: ObjectId("66f50fc71f16496b86964033"), // Remplace par un ObjectId valide
    firstname: 'Yannick',
    lastname: 'KUHN',
    email: 'yannick.kuhn@oclock.io',
    // Password : test (encrypté)
    password: '123e8081abb3628aac9d77fd0acc1387:f36968befffd8927a9c9c91d7ca99767b793174c13b407098d296b68d23ece2781b51c18e3ccd45e23ee85006009a4f8edca9c7bc54b9d7d0042ca2363ca9294',
    description: 'Yannick est le formateur de la S20 de la promo',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    role_id: 1
  },
  {
    _id: ObjectId("a4f23cd91a2047f38c3b423f"), // Remplace par un ObjectId valide
    firstname: 'Nicolas',
    lastname: 'HERISSON',
    email: 'nicolas.herisson@oclock.io',
    // Password : test (encrypté)
    password: '123e8081abb3628aac9d77fd0acc1387:f36968befffd8927a9c9c91d7ca99767b793174c13b407098d296b68d23ece2781b51c18e3ccd45e23ee85006009a4f8edca9c7bc54b9d7d0042ca2363ca9294',
    description: 'Nicolas est un apprenant de la promo Skadi',
    image: 'https://avatar.iran.liara.run/public/48',
    role_id: 2
  },
  {
    _id: ObjectId("b8d74e2b341847a5aa09e456"), // Remplace par un ObjectId valide
    firstname: 'Jeremy',
    lastname: 'MOLINIER',
    email: 'jeremy.molinier@oclock.io',
    // Password : test (encrypté)
    password: '123e8081abb3628aac9d77fd0acc1387:f36968befffd8927a9c9c91d7ca99767b793174c13b407098d296b68d23ece2781b51c18e3ccd45e23ee85006009a4f8edca9c7bc54b9d7d0042ca2363ca9294',
    description: 'Jeremy est un apprenant de la promo Skadi',
    image: 'https://avatar.iran.liara.run/public/38',
    role_id: 2
  }
])
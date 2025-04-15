function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
  
const startDate = new Date("2024-10-05T00:00:00Z");
const endDate = new Date(); // Date du jour

// Je génère 10 dates aléatoires
const dates = [];
for(let i = 0; i < 10; i++) {
    dates.push(getRandomDate(startDate, endDate))
}

db.createCollection('posts');
db.posts.insert([
  {
    title: "Les mystères de l'univers",
    body: "L'univers est en constante expansion, mais des questions demeurent : quelle est sa véritable origine et quelle est sa destinée finale ?",
    author_id: ObjectId("66f50fc71f16496b86964033"),
    created_at: dates[0],
    updated_at: dates[0]
  },
  {
    title: "Les bienfaits de la méditation",
    body: "La méditation quotidienne peut réduire le stress, améliorer la concentration et apporter un sentiment de paix intérieure.",
    author_id: ObjectId("66f50fc71f16496b86964033"),
    created_at: dates[1],
    updated_at: dates[1]
  },
  {
    title: "Les changements climatiques",
    body: "Les experts avertissent que la planète se réchauffe plus rapidement que prévu, entraînant des conséquences désastreuses pour l'environnement.",
    author_id: ObjectId("66f50fc71f16496b86964033"),
    created_at: dates[2],
    updated_at: dates[2]
  },
  {
    title: "Découverte d'une exoplanète",
    body: "Une équipe d'astronomes a récemment découvert une exoplanète située dans la zone habitable de son étoile, offrant des possibilités pour la recherche de vie extraterrestre.",
    author_id: ObjectId("a4f23cd91a2047f38c3b423f"),
    created_at: dates[3],
    updated_at: dates[3]
  },
  {
    title: "Les secrets d'une alimentation équilibrée",
    body: "Adopter une alimentation variée et riche en nutriments est essentiel pour maintenir une bonne santé à long terme.",
    author_id: ObjectId("a4f23cd91a2047f38c3b423f"),
    created_at: dates[4],
    updated_at: dates[4]
  },
  {
    title: "L'impact de la technologie sur la société",
    body: "Si la technologie a apporté des avantages indéniables, elle a également créé de nouveaux défis en termes de vie privée et d'interactions humaines.",
    author_id: ObjectId("a4f23cd91a2047f38c3b423f"),
    created_at: dates[5],
    updated_at: dates[5]
  },
  {
    title: "Voyager sur Mars : rêve ou réalité ?",
    body: "Avec les récentes avancées de SpaceX et d'autres entreprises spatiales, le rêve de coloniser Mars pourrait devenir réalité d'ici quelques décennies.",
    author_id: ObjectId("a4f23cd91a2047f38c3b423f"),
    created_at: dates[6],
    updated_at: dates[6]
  },
  {
    title: "Les œuvres intemporelles de Léonard de Vinci",
    body: "Léonard de Vinci reste l'un des artistes les plus influents de tous les temps, avec des œuvres qui continuent de fasciner à travers les siècles.",
    author_id: ObjectId("b8d74e2b341847a5aa09e456"),
    created_at: dates[7],
    updated_at: dates[7]
  },
  {
    title: "L'essor de l'intelligence artificielle",
    body: "L'IA transforme rapidement de nombreux secteurs, mais des questions éthiques se posent quant à son utilisation et son impact sur l'emploi.",
    author_id: ObjectId("b8d74e2b341847a5aa09e456"),
    created_at: dates[8],
    updated_at: dates[8]
  },
  {
    title: "Les trésors cachés de l'océan",
    body: "Nos océans recèlent encore d'innombrables mystères, avec des espèces encore inconnues et des écosystèmes inexplorés.",
    author_id: ObjectId("b8d74e2b341847a5aa09e456"),
    created_at: dates[9],
    updated_at: dates[9]
  }
]);


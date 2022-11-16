const DB = require("../db/db");

//from Goodreads
let quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; " +
    "and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  }
];

(async () => {
  try {
    const db = new DB();
    await db.connect("lab12", "quotes");
    let num = await db.createMany(quotes);
    console.log(`Inserted ${num} quotes`);
  } catch (e) {
    console.error("could not connect");
    process.exit();
  }
})();

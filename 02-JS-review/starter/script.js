const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

Destructuring Objects and Arrays (Chp 18)
const books = getBook(3);
books;
const title = books.title;
const author = books.author;



const { title, author, pages, publicationDate, genres, hasMovieAdaptation} = books;

console.log(title);
console.log(author);
console.log(genres);

const first = genres[0];
const second = genres[1];


const [first, second, ...otherGenres] = genres;
otherGenres

console.log(first, second, otherGenres);

/* Rest and Spread operator (chp 19)*/
const newGenres = [ "epic fantasy", ...genres];
newGenres;

console.log(newGenres);

const updatedBook = {...books, /*adding new property*/moviePublicationDate: "2001-12-19", /*overwriting*/pages: 1215 };
updatedBook;

console.log(updatedBook);

/* Template Literals and Ternary Operator (chp 20) */
function getYear(str){
  return str.split("-")[0];
}

(str) => str.split("-")[0];
const getYear = (str) => str.split("-")[0];
console.log( getYear(publicationDate));

const summary = `${title}, a ${pages}-page book, was written by ${author} and published on ${getYear(publicationDate)}. THe book ${hasMovieAdaptation ? "has" : "does not have"} a movie adaptation.`;
summary;

/* Ternary Operator and Logical Operators, short-circuiting, chaining (chp 21, 22, 23, 24) */
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;

console.log(`this book has ${pagesRange} pages`);
console.log(false && "this book is great!");
console.log(true && "this book is great!");

console.log(hasMovieAdaptation && "this book is great!");

console.log("ashish" && "some string");
console.log(0 && "some string");

console.log(true || "some string");
console.log(false || "some string");

console.log(books.translations.spanish);

const spanishTranslation = books.translations.spanish || "Not translated";
spanishTranslation;

console.log(books.reviews.librarything?.reviewsCount);
const countWrong = books.reviews.librarything?.reviewsCount ?? "no data";
countWrong;

const count = books.reviews?.librarything?.reviewsCount ?? "no data";
count;

function getTotalReviewCount(book) {
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
  const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreadsCount + librarythingCount;
}

 console.log(getTotalReviewCount(books));

const books = getBooks();
books;

/* Array Map, filter, reduce, Sort (chp 25, 26,27,28) */
x = [1,2,3,4,5].map(el => el * 2);
console.log(x);

const titles = books.map((books) => books.title);
console.log(titles);

function getTotalReviewCount(book) {
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
  const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreadsCount + librarythingCount;
}


const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  }));

  essentialData;


const longBooksWithMovies = books.filter((book) => book.pages > 500).filter(book=>book.hasMovieAdaptation);
console.log(longBooksWithMovies);

const adventureBooks = books.filter(books=> 
  books.genres.includes("adventure")
).map(book=> book.title);
adventureBooks;

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;


const arr = [3, 5, 1, 9, 6];
const sorted = arr.slice().sort((a,b)=> a-b);

arr;
sorted;

const sortedByPages = books.slice().sort((a,b)=> a.pages - b.pages);
sortedByPages;

/* Working with Arrays - Adding, Removing, Updating items (chp 29) */
// 1) Add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete Book object from array
const booksAfterDelete = booksAfterAdd.filter(book=> book.id !== 3);
booksAfterDelete; 

// 3) Update book object in array
const booksAfterUpdate = booksAfterDelete.map(book=> book.id ===1 ? {...book, pages : 1210} : book );
booksAfterUpdate;

// 4) Combine all operations
const booksAfterAll = booksAfterUpdate
  .filter(book=> book.id !==2)
  .map(book=> book.id ===5 ? {...book, author: "George Martin"} : book );
booksAfterAll;

/* Asynchornous JS fetch example Chp 30 Promises*/
fetch("https://jsonplaceholder.typicode.com/todos/")
.then((res) => res.json())
.then((data) => console.log(data));

console.log("fetch initiated");

/* Async Await syntax Chp 31 */
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos =  getTodos();
console.log(todos); 

console.log("ashish");


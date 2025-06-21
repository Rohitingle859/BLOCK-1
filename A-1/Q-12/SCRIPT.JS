
const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

 
  addBook: function(book) {
    
    if (!book.title || !book.author || !book.year) {
      console.log("Book information is incomplete.");
      return;
    }

   
    this.books.push(book);
    console.log("Book added:", book.title);
  },

  
  findBookByTitle: function(title) {
    return this.books.find(function(book) {
      return book.title === title;
    });
  },

  
  removeBook: function(title) {
    const index = this.books.findIndex(function(book) {
      return book.title === title;
    });

    if (index !== -1) {
      this.books.splice(index, 1);
      console.log("Book removed:", title);
    } else {
      console.log("Book not found:", title);
    }
  }
};


library.addBook({ author: "George Orwell", year: 1949 }); 


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });


console.log("Total books:", library.books.length); 


library.removeBook("The Hobbit");


library.removeBook("Unknown Book");


console.log("Final book list:", library.books);

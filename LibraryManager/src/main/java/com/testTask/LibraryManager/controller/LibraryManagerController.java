package com.testTask.LibraryManager.controller;
import com.testTask.LibraryManager.model.Author;
import com.testTask.LibraryManager.model.Book;
import com.testTask.LibraryManager.service.LibraryManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/library")
public class LibraryManagerController {
    @Autowired
    private LibraryManagerService libManager;

    @GetMapping("/allBooks")
    public List<Book> getAllBooks() {
        return libManager.getAllBooks();
    }

    @GetMapping("/allAuthors")
    public List<Author> getAllAuthors() {
        return libManager.getAllAuthors();
    }

    @GetMapping("/getBook/{id}")
    public Optional<Book> getBookById(@PathVariable Long id) {
        return libManager.getBookById(id);
    }

    @GetMapping("/getAuthor/{id}")
    public Optional<Author> getAuthorById(@PathVariable Long id) {
        return libManager.getAuthorById(id);
    }

    @GetMapping("/filterBooksByTitle/{title}")
    public List<Book> filterBooksByTitle(@PathVariable String title) {
        return libManager.filterBooksByTitle(title);
    }

    @GetMapping("filterBooksByAuthorName/{name}")
    public List<Book> filterBooksByAuthorName(@PathVariable String name) {
        return libManager.filterBooksByAuthorName(name);
    }

    @PostMapping("/addBook")
    public String addBook(@RequestBody Book book) {
        Book result = libManager.addBook(book);
        if (result != null) {
            return "New book has been added";
        } else {
            return "Error adding a book: " + book.toString();
        }
    }

    @PostMapping("/addAuthor")
    public String addAuthor(@RequestBody Author author) {
        Author result = libManager.addAuthor(author);
        if (result != null) {
            return "New author has been added";
        } else {
            return "Error adding an author: " + author.toString();
        }
    }

    @PutMapping("/updateBook/{id}")
    public String updateBook(@PathVariable Long id, @RequestBody Book book) {
        Book result = libManager.updateBook(id, book);
        if (result != null) {
            return "Book has been updated";
        } else {
            return "Error updating a book: " + book.toString();
        }
    }

    @DeleteMapping("/deleteBook/{id}")
    public String deleteBook(@PathVariable Long id) {
        boolean resultOfDelete = libManager.deleteBook(id);
        if (resultOfDelete) {
            return "Book has been deleted";
        } else {
            return "Error deleting a book with ID = " + id;
        }
    }

    @DeleteMapping("/deleteAuthor/{id}")
    public String deleteAuthor(@PathVariable Long id) {
        boolean resultOfDelete = libManager.deleteAuthor(id);
        if (resultOfDelete) {
            return "Author has been deleted";
        } else {
            return "Error deleting an author with ID = " + id;
        }
    }
}

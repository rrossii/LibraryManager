package com.testTask.LibraryManager.controller;
import com.testTask.LibraryManager.model.Author;
import com.testTask.LibraryManager.model.Book;
import com.testTask.LibraryManager.service.LibraryManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/library")
public class LibraryManagerController {
    @Autowired
    private LibraryManagerService libManager;

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

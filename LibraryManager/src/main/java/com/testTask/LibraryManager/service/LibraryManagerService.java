package com.testTask.LibraryManager.service;

import com.testTask.LibraryManager.model.Author;
import com.testTask.LibraryManager.model.Book;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface LibraryManagerService {
    public Book addBook(Book book);
    public Author addAuthor(Author author);

    public Optional<Book> getBookById(Long id);
    public Optional<Author> getAuthorById(Long id);

    public List<Book> getAllBooks();
    public List<Author> getAllAuthors();

    public List<Book> filterBooksByAuthorName(String authorName);
    public List<Book> filterBooksByTitle(String title);

    public Book updateBook(Long id, Book updatedBook);
//    public Author updateAuthor(Long id, Author updatedAuthor);

    public boolean deleteBook(Long id);
    public boolean deleteAuthor(Long id);

}

package com.testTask.LibraryManager.service;
import com.testTask.LibraryManager.model.Author;
import com.testTask.LibraryManager.model.Book;
import com.testTask.LibraryManager.repository.AuthorRepository;
import com.testTask.LibraryManager.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryManagerImpl implements LibraryManagerService {
    @Autowired
    private BookRepository bookRepo;
    @Autowired
    private AuthorRepository authorRepo;

    @Override
    public Book addBook(Book book) {
        if (bookRepo.existsByTitle(book.getTitle())) {
            return null;
        }

        Author existingAuthor = authorRepo.findByName(book.getAuthor().getName());
        if (existingAuthor != null) {
            book.setAuthor(existingAuthor);
        } else {
            Author newAuthor = authorRepo.save(book.getAuthor());
            book.setAuthor(newAuthor);
        }

        return bookRepo.save(book);
    }

    @Override
    public Author addAuthor(Author author) {
        if (authorRepo.existsByName(author.getName())) {
            return null;
        }
        return authorRepo.save(author);
    }

    @Override
    public Optional<Book> getBookById(Long id) {
        return bookRepo.findById(id);
    }

    @Override
    public Optional<Author> getAuthorById(Long id) {
        return authorRepo.findById(id);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @Override
    public List<Author> getAllAuthors() {
        return authorRepo.findAll();
    }

    @Override
    public List<Book> filterBooksByAuthorName(String authorName) {
        return bookRepo.findBooksByAuthor_Name(authorName);
    }

    @Override
    public List<Book> filterBooksByTitle(String title) {
        return bookRepo.findBooksByTitle(title);
    }

    @Override
    public Book updateBook(Long id, Book updatedBook) {
        Optional<Book> optionalBook = bookRepo.findById(id);
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();
            existingBook.setTitle(updatedBook.getTitle());
            existingBook.setDescription(updatedBook.getDescription());
            existingBook.setGenre(updatedBook.getGenre());
            existingBook.setPublishedYear(updatedBook.getPublishedYear());
            existingBook.setPages(updatedBook.getPages());

            Author existingAuthor = authorRepo.findByName(updatedBook.getAuthor().getName());
            if (existingAuthor != null) {
                existingBook.setAuthor(existingAuthor);
            } else {
                Author newAuthor = authorRepo.save(updatedBook.getAuthor());
                existingBook.setAuthor(newAuthor);
            }

            return bookRepo.save(existingBook);
        }
        return null;
    }

//    @Override
//    public Author updateAuthor(Long id, Author updatedAuthor) {
//        return null;
//    }


    @Override
    public boolean deleteBook(Long id) {
        if (bookRepo.existsById(id)) {
            bookRepo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteAuthor(Long id) {
        if (authorRepo.existsById(id)) {
            try {
                authorRepo.deleteById(id);
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        }
        return false;
    }
}

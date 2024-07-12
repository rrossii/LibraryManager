package com.testTask.LibraryManager.repository;

import com.testTask.LibraryManager.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findBooksByTitle(String title);
    List<Book> findBooksByAuthor_Name(String author);
    boolean existsByTitle(String title);
}

package com.testTask.LibraryManager.repository;
import com.testTask.LibraryManager.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
//    List<Author> findAuthorByAuthorName(String authorName);
    boolean existsByName(String name);
}

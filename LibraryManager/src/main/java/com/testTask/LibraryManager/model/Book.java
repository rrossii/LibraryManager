package com.testTask.LibraryManager.model;
import jakarta.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long bookID;
    private String title;
    private String genre;
    private String description;
    private int publishedYear;
    private int pages;

    // TODO: name id columns as <name>ID
    @ManyToOne(cascade = CascadeType.PERSIST) // якщо створюємо книжку, і автора не існує, створюємо і його
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    public Book() {
    }

    public void setBookID(Long bookID) {
        this.bookID = bookID;
    }

    public Long getBookID() {
        return bookID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPublishedYear() {
        return publishedYear;
    }

    public void setPublishedYear(int publishedYear) {
        this.publishedYear = publishedYear;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}

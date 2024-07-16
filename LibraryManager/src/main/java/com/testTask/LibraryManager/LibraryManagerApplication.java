package com.testTask.LibraryManager;

import com.testTask.LibraryManager.model.Author;
import com.testTask.LibraryManager.model.Book;
import com.testTask.LibraryManager.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class LibraryManagerApplication implements CommandLineRunner {
	@Autowired
	BookRepository bookRepository;

	public static void main(String[] args) {
		SpringApplication.run(LibraryManagerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		if (bookRepository.count() == 0) {
			Author author1 = new Author("J.R.R. Tolkien", "English writer, poet, and philologist, author of The Lord of the Rings.");
			Author author2 = new Author("Harper Lee", "American novelist, known for To Kill a Mockingbird.");
			Author author3 = new Author("George Orwell", "English novelist and essayist.");
			Author author4 = new Author("Ivan Bahrianyi", "Ukrainian writer, essayist, novelist, politician, and 1992 postmortem awardee of the Shevchenko prize. ");
			Author author5 = new Author("Olha Kobylianska", "Ukrainian modernist writer, nationalist and feminist. ");
			Author author6 = new Author("Ernest Hemingway", "American novelist and short-story writer.");

			List<Book> books = new ArrayList<>();
			books.add(new Book("The Hobbit", "Fantasy",
					"The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, " +
							"the hobbit of the title, who joins the wizard Gandalf and the thirteen " +
							"dwarves of Thorin's Company, on a quest to reclaim the dwarves' home and " +
							"treasure from the dragon Smaug.",
					1937, 310, author1));
			books.add(new Book("Valse mélancolique", "Novel",
					"This is the story of the life of three intellectuals whose thoughts and worldviews did not fit into the format of an average woman of their time.",
					1898, 62, author5));
			books.add(new Book("To Kill a Mockingbird", "Fiction",
					"A novel by Harper Lee, set in the American South during the 1930s.",
					1960, 281, author2));
			books.add(new Book("Tygrolovy", "Novel",
					"A psychological novel set during the revolutionary events of the early 20th century.",
					1926, 250, author4));
			books.add(new Book("1984", "Dystopian",
					"A dystopian novel by George Orwell, depicting a totalitarian regime.",
					1949, 328, author3));
			books.add(new Book("Animal Farm", "Satire",
					"A satirical novella by George Orwell, criticizing Soviet communism.",
					1945, 112, author3));
			books.add(new Book("The Old Man and the Sea", "Novel",
					"A novel by Ernest Hemingway, depicting an old fisherman's struggle with a giant marlin.",
					1952, 127, author6));

			bookRepository.saveAll(books);
		}
	}

}

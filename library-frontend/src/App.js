import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { Book } from './components/Book';
import { AddBook } from './components/AddBook';
import { AddAuthor } from './components/AddAuthor';
import { Author } from './components/Author';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/book/:bookID' element={<Book />} />
        <Route path='/author/:authorID' element={<Author />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/addAuthor' element={<AddAuthor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

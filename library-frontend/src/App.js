import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main'
import { Navbar } from './components/Navbar';
import { Book } from './components/Book';
import { Author } from './components/Author';
import { AddBook } from './components/AddBook';
import { AddAuthor } from './components/AddAuthor';
import { UpdateBook } from './components/UpdateBook';


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/book/:bookID' element={<Book />} />
        <Route path='/author/:authorID' element={<Author />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/addAuthor' element={<AddAuthor />} />
        <Route path='/updateBook/:bookID' element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

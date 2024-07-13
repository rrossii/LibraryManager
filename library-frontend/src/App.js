import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { AddBook } from './components/AddBook';
import { AddAuthor } from './components/AddAuthor';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/addAuthor' element={<AddAuthor />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

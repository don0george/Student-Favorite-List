import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './Components/StudentList';
import FavoriteList from './Components/FavoriteList';
import Header from './Components/Header';

const App = () => {
  const [students] = useState(['Don', 'Sam', 'John', 'Sara', 'Thabithal']);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFromFavorites = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  return (
    <Router>
      <div>
              <Header />
        <Routes>
          <Route path="/" element={<StudentList students={students} addToFavorites={addToFavorites} />} />
          <Route path="/favorites" element={<FavoriteList favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


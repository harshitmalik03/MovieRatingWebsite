import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './Pages/movieDetail/Movie';
import LoginLogout from './Pages/LoginLogout/LoginLogout';
import Profile from './Pages/Profile/Profile';
import { useState } from 'react';

function App() {

  const[commentCount, setCommentCount] = useState(0);

  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<LoginLogout/>}></Route>
            <Route path="movie/:id" element={<Movie/>}></Route>
            <Route path = "movies/:type" element={<MovieList/>}></Route>
            <Route path = "profile/:id" element={<Profile commentCount={commentCount}/>}></Route>
            <Route path = "/*" element={<h1>error page</h1>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "./Home.css";
import MovieList from '../../components/MovieList/MovieList';
import { useAuth0 } from '@auth0/auth0-react';
import LoginLogout from '../LoginLogout/LoginLogout';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const {isAuthenticated }= useAuth0();
    const {user} = useAuth0();


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=80d06f5aca02f471f8acd36b546f0787&language=en-US&page=1ss")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results));
    }, [])

  return (
    <>
    {isAuthenticated
    ?
    <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={5}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
            :
            <LoginLogout/>
    }

            
        </>
  )
}

export default Home
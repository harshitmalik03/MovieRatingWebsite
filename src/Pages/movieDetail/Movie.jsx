import React, { useEffect, useState } from 'react'
import { useParams, redirect } from 'react-router-dom';
import "./Movie.css"
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth0 } from '@auth0/auth0-react';
import { CommentSection} from 'react-comments-section';



const Movie = () => {


    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    const {user, isLoading, isAuthenticated} = useAuth0();
    const goBack = () => {
        console.log("heading back");        
        window.location.replace("/login");
    }

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
        console.log("go back");
        goBack();
    }
  }, [isLoading, isAuthenticated]);


    console.log(user);


    const data =[
    {
      userId: '001',
      comId: '001',
      fullName: 'Dummy User',
      userProfile: '',
      text: 'Dummy Review',
      avatarUrl: 'nopic',
      replies: []
    }
  ]

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])


    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80d06f5aca02f471f8acd36b546f0787&language=en-US&page=1ss`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }


    //     useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80d06f5aca02f471f8acd36b546f0787&language=en-US&page=1ss`)
    //     .then(res => res.json())
    //     .then(data => setMovie(data));
    // }, [])


  return (
    <>
    {isAuthenticated
    ?
    (


        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>

            

            <div style={{ width: '80%', backgroundColor: 'black', padding: '20px', borderRadius: '8px' }}>
                
                <CommentSection
                    currentUser={{
                        currentUserId: user.email,
                        currentUserImg:
                        user.picture,
                        currentUserProfile: user.email,
                        currentUserFullName: user.given_name + user.family_name,
                    }}
                    logIn={{
                        loginLink: 'http://localhost:3001/',
                        signupLink: 'http://localhost:3001/',
                    }}
                    commentData={data}
                    onSubmitAction={(data) => console.log('check submit, ', data)}
                    currentData={(data) => {
                        console.log('curent data', data);
                    }}
                    />
                    </div>

                    </div>

        
    )
    
    :
    ( 
        <div>
            
        </div>
        )
    }

        </>

        
  )
}

export default Movie
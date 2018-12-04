import React, {Component} from 'react';
import Movie from './Movie';

class MovieListView extends React.Component{
  render(){

    const individualMovie = this.props.moviesData.map(movie =>{
      return(
        <Movie key={movie.id} movie= {movie}/>
      )
    })

    return (
      <div className="movie-list">
        {individualMovie}
      </div>
    )
  }
}

export default MovieListView;

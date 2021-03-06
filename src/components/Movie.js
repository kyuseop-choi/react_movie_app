import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({ id, year, title, summary, poster, genres }) {
  return (
    //Link로 전체를 감싸 Movie 컴포넌트 클릭시 정보를 전달하여 상세정보 라우트를 보여준다.
    <Link 
      to={{
        pathname: `/movie/${id}`,
        state: {
          year, //year: year,
          title, //title: title,
          poster, //poster: poster
          genres, // genres: genres
          summary // summary: summary
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {
              genres.map((genre, index) => 
              <li key={index} className="genres__genre">{genre}</li>)
            }
          </ul>
          <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
      </div> 
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
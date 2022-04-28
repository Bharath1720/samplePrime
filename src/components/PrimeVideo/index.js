import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  //  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')

  //  const comedyMovies = moviesList.filter(each => each.categoryId !== 'ACTION')

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId !== 'ACTION',
  )

  return (
    <>
      <div className="main-container">
        <img
          className="prime-image"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <div className="prime-container">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="comedy-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </>
  )
}

export default PrimeVideo

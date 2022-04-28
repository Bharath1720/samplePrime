// import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import MovieItem from '../MovieItem'

// import './index.css'

// const MoviesSlider = props => {
//   const {moviesData} = props
//   const styles = {
//     dots: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   }

//   return (
//     <div className="slider-component">
//       <Slider {...styles}>
//         {moviesData.map(eachMovie => (
//           <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default MoviesSlider

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesList} = props

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
          ))}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider

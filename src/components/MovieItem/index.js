import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        className="popup-content"
        trigger={
          <img className="movie-img" src={thumbnailUrl} alt="thumbnail" />
        }
      >
        {close => (
          <>
            <div className="play-container">
              {/* For displaying image as a pop up */}
              {/* <img
                className="movie-display-image"
                src={thumbnailUrl}
                alt="thumbnail"
              /> */}
              <div className="movive-player-box">
                <ReactPlayer url={videoUrl} controls />
              </div>
              <button
                className="close-icon"
                type="button"
                testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

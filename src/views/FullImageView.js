import { connect } from "react-redux"
import { PuzzleWidth } from "../constants"
import PropTypes from 'prop-types'

const FullImage = (props) => {
    const imPath = `${window.location.href}/images/img${props.imageNumber}.jpg`
    const tileWidth = PuzzleWidth / props.size
    const fullImageWidth = props.size * tileWidth

    let fullImageStyle = {
        maxWidth: fullImageWidth + 'px',
        maxHeight: fullImageWidth + 'px'
    }

    return (
        <main className="mt-3">
            <div className="full-image" style={fullImageStyle}>
                <img src={`${imPath}`} draggable='false' alt='Full Image' />
            </div>
        </main>
        
    )
}

FullImage.propTypes = {
    size: PropTypes.number,
    imageNumber: PropTypes.number
}

const mapStateToProps = state => {
    return {
        imageNumber: state.tileGame.imageNumber
    }
}

const FullImageView = connect(mapStateToProps)(FullImage)

export default FullImageView
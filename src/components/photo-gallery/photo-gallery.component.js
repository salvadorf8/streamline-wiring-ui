import 'react-image-lightbox/style.css';

import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';

class PhotoGallery extends React.Component {
    state = { photoIndex: 0, isOpen: false };

    openLightbox = (event, { photo, index }) => {
        event.preventDefault();
        this.setState({ photoIndex: index, isOpen: true });
    };

    render(props) {
        const { isOpen, photoIndex } = this.state;
        const { images } = this.props;

        return (
            <div>
                <Gallery photos={images} onClick={this.openLightbox} />
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].src}
                        nextSrc={images[(photoIndex + 1) % images.length].src}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                        imageTitle={photoIndex + 1 + '/' + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default PhotoGallery;

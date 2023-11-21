import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';
const PicturesGrid = () => {
  const pictures = [
    'assets/images/dwedding (11).jpg',
    'assets/images/dwedding (13).jpg',
    'assets/images/couple (1).jpg',
    'assets/images/dwedding (1).jpg',
    'assets/images/dwedding (2).jpg',

    'assets/images/couple (4).jpg',
    'assets/images/dwedding (5).jpg',
    'assets/images/dwedding (6).jpg',
    'assets/images/dwedding (14).jpg',
    'assets/images/couple (7).jpg',
    'assets/images/dwedding (7).jpg',
    'assets/images/couple (8).jpg',
    'assets/images/dwedding (8).jpg',
    'assets/images/couple (9).jpg',
    'assets/images/dwedding (9).jpg',
    'assets/images/couple (13).jpg',
    'assets/images/dwedding (10).jpg',
  ];
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const handleSelectPicture = (picture) => {
    setSelectedPicture(picture);
  };
  const handleCloseModal = () => {
    setSelectedPicture(null);
  };

  return (
    <>
      <div className='picture-grid'>
        {pictures.map((picture, index) => (
          <>
            <div
              title='view image'
              data-toggle='modal'
              data-target='#myModal'
              onClick={() => handleSelectPicture(picture)}
              className='picture'
              key={index}
            >
              <img
                src={picture}
                className='grid-img'
                alt={`Picture ${index + 1}`}
              />
            </div>
          </>
        ))}
      </div>

      {selectedPicture && (
        <>
          <div className='modal fade' id='myModal'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div
                  style={{
                    position: 'absolute',
                    right: 20,
                    top: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'white',
                    backgroundColor: 'grey',
                    zIndex: 20,
                    borderRadius: 50,
                    height: '30px',
                    width: '30px',
                  }}
                >
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                    onClick={handleCloseModal}
                  >
                    <span
                      style={{
                        color: 'white',
                      }}
                      aria-hidden='true'
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className='modal-body'>
                  <img
                    style={{
                      height: '70%',
                      objectFit: 'cover',
                    }}
                    src={selectedPicture}
                    alt='selected picture'
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PicturesGrid;

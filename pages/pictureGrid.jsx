import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';
const PicturesGrid = () => {
  const pictures = [
    'assets/images/pic (2).jpg',
    'assets/images/pic (3).jpg',
    'assets/images/pic (1).jpg',
    'assets/images/pic (4).jpg',
    'assets/images/pic (5).jpg',
    'assets/images/pic (6).jpg',
    'assets/images/pic (7).jpg',
    'assets/images/pic (8).jpg',
    'assets/images/pic (9).jpg',
    'assets/images/pic (10).jpg',
    'assets/images/pic (11).jpg',
    'assets/images/pic (12).jpg',
    'assets/images/pic (13).jpg',
  ];
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const handleSelectPicture = (picture) => {
    setSelectedPicture(picture);
  };
  useEffect(() => {
    const loadImages = async () => {
      for (const picture of pictures) {
        const img = new Image();
        img.onload = () => {
          setLoadedImagesCount((prevCount) => prevCount + 1);
        };
        console.log(img, 'imagee');
        img.src = picture;
        await new Promise((resolve) => (img.onload = resolve));
      }

      // setImageLoaded(true);
    };

    loadImages();

    if (loadedImagesCount === pictures.length) {
      setImageLoaded(true);
    }
  }, [pictures, loadedImagesCount]);

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
              {/* <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
                <Blurhash
                  hash='LkOyeVE0R*WC?wWAjZofM{s:RjoM'
                  className='grid-img'
                  width={'100%'}
                  height={'300px'}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              </div> */}
              {/* <div style={{ display: !imageLoaded ? 'none' : 'inline' }}> */}
              <LazyLoadImage
                src={picture}
                className='grid-img'
                effect='blur'
                width={'100%'}
                alt={`Picture ${index + 1}`}
              />
              {/* </div> */}
            </div>
          </>
        ))}
      </div>

      {selectedPicture && (
        <>
          <div className='modal fade' id='myModal'>
            <div className='modal-dialog'>
              <div className='modal-content'>
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import '../node_modules/swiper/swiper-bundle.css';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

const Bride = () => {
  return (
    <div className='bride-container'>
      <div className='stories-img-container'>
        <img
          style={{
            objectFit: 'cover',
            width: '100rem',
            height: '25rem',
          }}
          src='/assets/images/background.jpg'
          alt='bride stories'
        />
      </div>
      <div>
        <h2 className='groom-title'>Bride</h2>
        <article className='groom-paragraph'>
          Out of the blues I saw a request, I checked it and it was this
          beautiful lady. I accepted it immediately and started checking her TL.
          On the 4th of April 2016, I sent her a DM and we started talking. We
          became really really close. Later in November I asked her to be my
          girlfriend and here we are today🥰 getting married.
        </article>
      </div>
    </div>
  );
};
const Groom = () => {
  return (
    <div className='bride-container'>
      <div className='stories-img-container'>
        <img
          style={{
            objectFit: 'cover',
            width: '100rem',
            height: '25rem',
          }}
          src='/assets/images/background.jpg'
          alt='bride stories'
        />
      </div>
      <div>
        <h2 className='groom-title'>Groom</h2>
        <article className='groom-paragraph'>
          Out of the blues I saw a request, I checked it and it was this
          beautiful lady. I accepted it immediately and started checking her TL.
          On the 4th of April 2016, I sent her a DM and we started talking. We
          became really really close. Later in November I asked her to be my
          girlfriend and here we are today🥰 getting married.
        </article>
      </div>
    </div>
  );
};
const Stories = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      //   autoplay
      //   modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Bride />{' '}
      </SwiperSlide>
      <SwiperSlide>
        <Groom />{' '}
      </SwiperSlide>
    </Swiper>
  );
};

export default Stories;

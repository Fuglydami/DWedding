import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import '../node_modules/swiper/swiper-bundle.css';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

const content = [
  {
    title: 'Bride',
    desc: `I was at  a burial of one of the elders in my church October 2022 and connected with a lot of former church members and friends. A gentle man walked up to me to say I looked familiar and actually he looked familiar too. We exchanged contacts after the familiarization. I Did my findings from my mum and discovered our both families were close. We got talking literally every day and the rest  is history🥰.`,
    image: 'assets/images/bride.jpg',
  },
  {
    title: 'Groom',
    desc: `Our fathers enjoyed a close friendship until my father's passing. The two of us had never had any real connection until October 2022 when we coincidentally met at the burial of my mentor's father. I noticed her from a distance, her radiant smile caught my attention. I approached her and her mum re-introducing myself to both of them and we exchanged contact information. This marked the beginning of a heartwarming reunion. Our conversations since then have been nothing short of exhilarating and exciting,  which is the start of a journey to forever🥰.`,
    image: 'assets/images/groom.jpg',
  },
];
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
    >
      {content.map((item) => {
        const { title, image, desc } = item;
        return (
          <>
            <SwiperSlide>
              <div className='bride-container'>
                <img
                  style={{
                    objectFit: 'cover',
                    width: '100rem',
                    height: '25rem',
                    borderRadius: '10px',
                  }}
                  src={image}
                  alt={`${title} stories`}
                />

                <div>
                  <h2 className='groom-title'>{title}</h2>
                  <article className='groom-paragraph'>{desc}</article>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default Stories;

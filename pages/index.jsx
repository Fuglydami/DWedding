import AddToCalendar from 'react-add-to-calendar';
import QRCode from 'qrcode.react';
import useSWR from 'swr';

import Head from '@src/components/Head';
import resolvePath from '@src/utils/resolvePath';
import appConfig from '@src/config/app';
import { useTranslation, defaultLocale } from '@src/i18n';
import guestList from './guest_list.json';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Stories from './stories';
import PicturesGrid from './pictureGrid';
import CollectGuestAttendance from './collect-guest-attendance';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LoveTitleIcon = () => {
  return (
    <LazyLoadImage
      src='assets/images/wine.png'
      style={{
        width: '80px',
        height: '80px',
      }}
      effect='blur'
      width={'100%'}
      alt='wine illustrator'
    />
  );
};
const EventDateIcon = () => {
  return (
    <svg width='35' height='78' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.355 12.083c-1.643-1.62-2.156-4.77.41-5.83 1.187-.49 2.68-.365 3.928-.227 1.286.143 2.552.417 3.77.856 2.173.785 5.184 2.164 6.027 4.51.993 2.762-1.968 4.107-4.155 4.474-2.775.465-5.706.417-8.513.338-2.694-.076-5.454-.375-7.98-1.366-2.27-.892-4.59-2.333-5.723-4.58-1.043-2.066-.836-4.541.475-6.444C10.4 1.193 13.422.69 16.381.337A49.462 49.462 0 0 1 27.307.27c1.2.123 1.212 2.017 0 1.893a49.877 49.877 0 0 0-7.412-.223c-2.265.105-4.671.24-6.85.902-1.807.549-3.232 1.882-3.627 3.77-.414 1.978.708 3.732 2.23 4.903 3.25 2.5 7.672 2.811 11.615 2.817 2.225.004 4.55.074 6.745-.32.804-.144 1.895-.32 2.484-.957.814-.88-.32-1.938-1.01-2.467-1.83-1.406-4.144-2.283-6.416-2.619-.979-.145-2.579-.413-3.52 0-1.294.57-.576 2.063.147 2.777.87.856-.47 2.194-1.338 1.338Z'
        fill='#211D1D'
      ></path>
      <path
        d='M34.023 13.727c-1.494 5.45-3.158 10.933-7.099 15.157a22.39 22.39 0 0 1-6.03 4.581c-2.323 1.205-5.13 2.385-7.781 1.828-1.19-.25-.687-2.075.503-1.825 2.292.48 5.02-.888 6.97-1.986a20.808 20.808 0 0 0 5.396-4.373c3.446-3.904 4.869-8.97 6.216-13.884.32-1.174 2.147-.676 1.825.502Z'
        fill='#211D1D'
      ></path>
      <path
        d='M9.028 7.923c-1.266 8.344-2.59 18.37 3.722 25.133.83.89-.505 2.231-1.338 1.339-6.84-7.331-5.587-17.893-4.21-26.974.183-1.2 2.006-.69 1.826.502Z'
        fill='#211D1D'
      ></path>
      <path
        d='M14.877 34.343c-1.918 14.074-1.349 28.46 1.636 42.344.255 1.187-1.569 1.695-1.825.503a125.654 125.654 0 0 1-1.636-43.35c.164-1.202 1.988-.69 1.825.503Z'
        fill='#211D1D'
      ></path>
      <path
        d='M10.34 60.891c-.416-4.656-3.845-8.86-8.29-10.26-1.158-.365-.664-2.193.502-1.825 5.301 1.67 9.186 6.562 9.68 12.085.108 1.212-1.785 1.205-1.893 0Z'
        fill='#211D1D'
      ></path>
      <path
        d='M3.197 49.92c-.73 1.386-.92 2.937-.96 4.484-.037 1.476-.259 3.246.739 4.46.92 1.12 2.271 1.956 3.53 2.643a17.595 17.595 0 0 0 4.402 1.662c1.184.28.683 2.105-.503 1.825a19.37 19.37 0 0 1-5.07-1.974c-1.515-.855-3.106-1.922-4.12-3.362C.153 58.15.3 56.163.345 54.404c.049-1.89.327-3.75 1.217-5.44.569-1.077 2.202-.122 1.635.956Z'
        fill='#211D1D'
      ></path>
      <path
        d='M7.919 58.026c1.36 1.72 2.723 3.44 4.084 5.16.306.388.406.965 0 1.339-.342.313-1.01.414-1.338 0L6.58 59.363c-.306-.387-.406-.965 0-1.337.342-.314 1.01-.415 1.339 0ZM12.629 51.884a28.08 28.08 0 0 1 17.418-6.628c1.219-.03 1.218 1.863 0 1.892-5.863.14-11.594 2.288-16.08 6.074-.926.782-2.27-.55-1.338-1.338Z'
        fill='#211D1D'
      ></path>
      <path
        d='M32.267 46.673c-1.21 4.234-4.072 8.142-8.054 10.15-3.783 1.906-8.623 1.753-11.649-1.48-.831-.889.504-2.23 1.338-1.338 2.6 2.776 6.735 2.676 9.872.907 3.297-1.857 5.638-5.138 6.669-8.742.334-1.169 2.16-.672 1.824.503Z'
        fill='#211D1D'
      ></path>
      <path
        d='M14.35 53.138a40.707 40.707 0 0 1 5.912-1.533c.485-.087 1.043.132 1.163.661.105.463-.14 1.07-.66 1.165a40.616 40.616 0 0 0-5.913 1.533c-.468.16-1.054-.184-1.163-.661-.12-.526.158-.993.66-1.165Z'
        fill='#211D1D'
      ></path>
    </svg>
  );
};

const HeaderLogo = () => {
  return (
    <span
      style={{
        display: 'inlineBlock',
        backfaceVisibility: 'hidden',
        transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
      }}
    >
      <svg width='40' height='40' fill='none'>
        <path
          d='m34.613 27.737 1.437.088a6.111 6.111 0 0 1 1.925.2c.35.2.538.475.1.762-.437.288-1.1 0-1.5 0-.4 0-.925-.1-1.4-.125a3.296 3.296 0 0 0-1.05 0c-.35.113-.287.213-.487.613a7.577 7.577 0 0 1-1.763 2.15c-1.462 1.25-3.45 1.337-5.162 2.087.45-2.962 2.725-4.437 5.475-5-.975 0-2.675-.875-3.513-.462-1.487.637-3.75 1.5-4.212 3.25-.238 1.062-.188 2.637-1.538 2.962-1.35.325-1.725-.962-1.4-1.975-.875.45-2.05.088-1.862-1.05.187-1.137 1.525-1.25 2.387-1.362 2.213-.35 3.9-1.625 5.988-2.288a25.845 25.845 0 0 0-2.5-1.025 6.837 6.837 0 0 0-2.6.488c-.92.114-1.828.31-2.713.587-.64.34-1.19.828-1.6 1.425-.987 1.163-2.2 2.5-3.9 2.375-2.15-.2-1.912-2.65-.325-3.487-1.025 0-2.5-.638-2.4-1.875.088-1.55 1.963-1.738 3.125-1.425 1.097.419 2.166.907 3.2 1.462 1.938.788 3.75 0 5.763-.2a37.994 37.994 0 0 1-4.65-2.675 2.187 2.187 0 0 0-1.375-.55h-1.25a27.671 27.671 0 0 0-3.375.1c-.775 0-1.325.738-1.838 1.25a6.138 6.138 0 0 1-2.5 1.713 1.987 1.987 0 0 1-2.5-.625A2.075 2.075 0 0 1 7.713 22.4c-.975-.325-2.288-1.113-1.425-2.3 1.012-1.388 2.875-.65 3.937.15a5.875 5.875 0 0 0 2.938 1.6c1.482.087 2.968.087 4.45 0a23.74 23.74 0 0 1-2.038-2.013 5.787 5.787 0 0 0-.862-.962c-.852-.38-1.752-.641-2.675-.775a14.522 14.522 0 0 0-2.75-.775 5.611 5.611 0 0 0-2.688.625 6.251 6.251 0 0 1-3.137.525 1.95 1.95 0 0 1-1.675-2.063c.125-1.037.987-1.387 1.875-1.55-2.025-1.887.775-3.687 2.5-2.012 1.025 1.012 1.637 2.912 2.912 3.425 1.613.65 3.375.887 5 1.637-.937-1.25-1.85-2.5-2.725-3.75a6.875 6.875 0 0 0-2.775-2.975c-1.487-.675-3.45-1.487-3.75-3.35-.35-2.287 2.238-1.9 3.45-.95a2.163 2.163 0 0 1 1.4-2.5c1.25-.487 2.013.463 2.175 1.675.025 1.438-.6 2.825-.825 4.325-.262 2.213 2.15 4.875 3.363 6.6 0-1.85.7-4.062-.263-5.787-.625-1.425-2.612-3.825-1.25-5.425 1-1.138 2.238.125 2.575 1.15a1.462 1.462 0 0 1 2.5-.263c1.25 1.725-.75 3.238-1.662 4.513-1.1 1.512-.9 2.95-1.038 4.737a6.597 6.597 0 0 0-.162 2.025c.137.413.812.888 1.112 1.25a26.93 26.93 0 0 0 2.563 2.363c-.1-2.1.212-4.275-.513-6.25-.425-1.15-1.4-3.15-.5-4.288.9-1.137 1.9-.137 2.25.813a2.025 2.025 0 0 1 2.5-.65 1.95 1.95 0 0 1 .425 2.5c-.85 1.812-3.287 2.762-3.287 4.825-.125.95-.063 1.987-.1 2.95a2.023 2.023 0 0 0 0 .675c.137.275.862.612 1.112.775a35.377 35.377 0 0 0 5 2.637c-.287-1.25-.312-2.412-.512-3.75a5.338 5.338 0 0 0-1.388-2.812c-.737-.988-1.5-2.65-.387-3.688.875-.825 2.025-.062 2.35.888 1.05-1.6 3.662-1.438 3.75.737.087 1.65-1.35 2.725-2.5 3.625-.233.15-.419.363-.538.613a3.033 3.033 0 0 0-.187.725c-.057.836-.011 1.675.137 2.5 0 .512 0 1.25.413 1.512.522.28 1.082.482 1.662.6a20.13 20.13 0 0 0 4.188 1.038 6.075 6.075 0 0 1-2.188-4.2 9.1 9.1 0 0 1 .8-4.513c.825 1.25 2.013 2.35 2.763 3.675a5.763 5.763 0 0 1 .1 5.25c.166.013.333.013.5 0Z'
          fill='#DFAE00'
        ></path>
        <path
          d='M19.55 15.787s3.275-2.85 2.5-3.637c-.775-.788-2.112.912-2.112.912s-.638-1.85-1.463-1.25c-.825.6 1.075 3.975 1.075 3.975ZM15.188 10.788s2.975-2.913 1.962-3.475c-1.012-.563-1.75 1.25-1.75 1.25s-.975-2.5-1.787-1.788c-.813.713 1.575 4.013 1.575 4.013ZM9.662 10.437s1.963-4.587.488-4.837-1.4 2.6-1.4 2.6-2.913-1.95-3.113-.7c-.237 1.525 4.025 2.937 4.025 2.937ZM7.3 16.513s-1.8-3.625-2.9-3.2c-1.1.425.425 2.1.425 2.1s-2.088.275-1.963 1.512c.125 1.238 4.438-.412 4.438-.412ZM11.662 22.575S8.35 19.663 7.5 20.425c-.85.763 2.062 2.075 2.062 2.075s-3.1 1.475-2.062 2.2c1.25.888 4.162-2.125 4.162-2.125ZM18.588 27.375s-4.638-2.638-5.363-1.588c-.725 1.05 2.763 1.825 2.763 1.825s-2.825 1.938-1.513 2.638c1.313.7 4.113-2.875 4.113-2.875ZM25.85 20s3.75-2.5 2.287-3.512c-1.112-.763-2.5 1.087-2.5 1.087s-.812-2.1-1.712-1.4c-.9.7 1.925 3.825 1.925 3.825ZM23.963 30.175s-.438 2.85-1.25 3.15c-.813.3-.213-2.075-.213-2.075s-2.025.925-1.925 0c.1-.925 3.388-1.075 3.388-1.075Z'
          fill='#F7D47D'
        ></path>
        <path
          d='M33.287 26.95a4.887 4.887 0 0 0 .125-3.35 6.362 6.362 0 0 0-1.887-3.05c-1.063 4.537 1.762 6.4 1.762 6.4ZM32.75 29.15c-.622.804-1.36 1.511-2.188 2.1-.874.555-1.826.976-2.825 1.25a6.713 6.713 0 0 1 2.113-2.137 11.588 11.588 0 0 1 2.9-1.213Z'
          fill='#DCB3B4'
        ></path>
      </svg>
    </span>
  );
};

const translateConfig = (appConfig, locale) => {
  if (!locale || locale === defaultLocale) {
    return appConfig;
  }
  // Replace config with lang
  const configLang = appConfig.lang[locale];
  if (configLang === undefined) {
    throw new Error('invalid locale: ', locale);
  }
  return { ...appConfig, ...configLang };
};

const ShowInvite = ({ currentUrl, guestListLastUpdatedAt, guest }) => {
  const t = useTranslation(guest.locale);

  // Initiate config variables
  const {
    logo,
    ogTags,
    coupleInfo,
    venue,
    weddingDay,
    weddingDate,
    weddingTime,
    calendarInfo,
  } = translateConfig(appConfig, guest.locale);
  const { brideName, groomName, hashtag, coupleNameFormat } = coupleInfo;

  const coupleNameStr =
    coupleNameFormat === 'GROOM_FIRST'
      ? `${groomName} & ${brideName}`
      : `${brideName} & ${groomName}`;
  const coupleName =
    coupleNameFormat === 'GROOM_FIRST' ? (
      <>
        {groomName} <span>&amp;</span> {brideName}
      </>
    ) : (
      <>
        {brideName} <span>&amp;</span> {groomName}
      </>
    );

  // Venue info
  const venueBrief = `${venue.name}, ${venue.city}, ${venue.country}`;
  const weddingDateBrief = `${weddingDay}, ${weddingDate}`;

  // Event info
  const eventTitle = `${coupleNameStr}'s Wedding`;
  let eventDescription = `${weddingDateBrief} at ${venue.name}, ${venue.city}`;
  if (guest.name) {
    eventDescription = `Dear ${guest.name}, you are cordially invited to our wedding on ${weddingDate} at ${venue.name}. Looking forward to seeing you!`;
  }

  // Calendar payload
  const calendarEvent = {
    title: eventTitle,
    description: eventDescription,
    location: `${venue.city}, ${venue.country}`,
    startTime: calendarInfo.timeStartISO,
    endTime: calendarInfo.timeEndISO,
  };

  const eventSchedule = [
    {
      icon: <EventDateIcon />,
      event: 'Church',
      date: 'Dec 16, 2023',
      time: '12pm',
    },
    {
      icon: <EventDateIcon />,
      event: 'Reception',
      date: 'Dec 16, 2023',
      time: '2pm',
    },
    // {
    //   icon: <EventDateIcon />,
    //   event: 'Engagement',
    //   date: 'Dec 16, 2023',
    //   time: '2pm',
    // },
  ];

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight * 0.9) {
          element.classList.add('animated-element'); // Add the CSS class when the element is 75% visible
        } else {
          element.classList.remove('animated-element'); // Remove the CSS class if not visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component is mounted

  return (
    <div>
      <style jsx global>
        {`
          a.react-add-to-calendar__button span {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
      <Head
        {...ogTags}
        title={eventTitle}
        description={eventDescription}
        guestName={guest.name}
        url={currentUrl}
        date={weddingDateBrief}
        modifiedTime={guestListLastUpdatedAt}
        venue={venueBrief}
        logo={resolvePath(ogTags.logo)}
        author={resolvePath('/')}
      />
      <section className='header_area'>
        <header className='header-container'>
          <HeaderLogo />
          <span className='header-logo-text'>The Akinlagun's Party</span>
        </header>
        <div id='home' className='header_slider'>
          <div className='slick-list draggable'>
            <div className='slick-track' style={{ opacity: 1 }}>
              <div className='bg_cover d-flex align-items-center'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                      <div
                        className='slider_content text-center'
                        style={{ paddingTop: 0 }}
                      >
                        <img
                          style={{ maxHeight: 60, margin: 25, marginTop: 0 }}
                          src={logo.headerLogo}
                          alt='logo'
                        />
                        <h5
                          className='slider_sub_title'
                          data-animation='fadeInUp'
                          data-delay='0.2s'
                          style={{ animationDelay: '0.2s' }}
                        >
                          {t('siteIntro')}
                        </h5>

                        <h2
                          className='slider_title'
                          data-animation='fadeInUp'
                          data-delay='0.7s'
                          style={{ animationDelay: '0.7s' }}
                        >
                          {coupleName}
                        </h2>
                        <h5
                          className='location'
                          data-animation='fadeInUp'
                          data-delay='1s'
                          style={{ animationDelay: '1s' }}
                        >
                          {hashtag}
                        </h5>
                        <span
                          className='location'
                          data-animation='fadeInUp'
                          data-delay='1s'
                          style={{ animationDelay: '1s' }}
                        >
                          {venue.name}, {venue.city}, {venue.country}.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='coming_soon' className='coming_soon_area pt-20 pb-70'>
        <div className='coming_soon_shape_1' style={{ zIndex: 1 }}>
          <img src='/assets/images/shape-1.png' alt='shape' />
        </div>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <div
                className='section_title pt-50 wow fadeIn'
                data-wow-duration='1.3s'
                data-wow-delay='0.2s'
                style={{
                  visibility: 'visible',
                  animationDuration: '1.3s',
                  animationDelay: '0.2s',
                  animationName: 'fadeIn',
                }}
              >
                <h3 className='title'>{t('eventDate')}:</h3>
                <p>{weddingDateBrief}</p>

                <div
                  style={{
                    paddingTop: '0.2rem',
                    paddingBottom: '0.2rem',
                  }}
                >
                  <AddToCalendar
                    event={calendarEvent}
                    buttonLabel={t('btnAddToMyCalendar')}
                  />
                </div>
                <img src='assets/images/section_shape.png' alt='Shape' />
              </div>
            </div>
            <div className='col-lg-8'>
              <div
                className='wow fadeIn'
                data-wow-duration='1.3s'
                data-wow-delay='0.6s'
                style={{
                  visibility: 'visible',
                  animationDuration: '1.3s',
                  animationDelay: '0.6s',
                  animationName: 'fadeIn',
                }}
              >
                <div className='coming_soon_count d-flex justify-content-end pt-20'>
                  <div
                    style={{
                      marginRight: 20,
                      width: 360,
                      height: 138,
                      backgroundColor: 'transparent',
                    }}
                    className='single_count d-flex align-items-center justify-content-center mt-30'
                  >
                    <div
                      className='count_content'
                      style={{ zIndex: 1, paddingTop: 20 }}
                    >
                      <a href={venue.mapUrl}>
                        <img
                          style={{ borderRadius: 5 }}
                          src='assets/images/bevent.png'
                          alt='bevent center'
                        />
                      </a>
                      <a
                        href={venue.mapUrl}
                        style={{
                          maxWidth: '75vw',
                          overflowX: 'hidden',
                          textOverflow: 'ellipsis',
                          marginTop: 10,
                          color: 'grey',
                        }}
                      >
                        {venue.addressLine1}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='coming_soon_shape_2'>
          <img src='/assets/images/shape-2.png' alt='shape' />
        </div>
      </section>

      <section ref={elementRef} id='contact' className='contact_area'>
        <div className='container'>
          <div
            className='contact_wrapper wow fadeInUpBig'
            data-wow-duration='1.3s'
            data-wow-delay='0.4s'
            style={{
              paddingBottom: 30,
              boxShadow: 'none',
              visibility: 'visible',
              animationDuration: '1.3s',
              animationDelay: '0.4s',
              animationName: 'fadeInUp',
            }}
          >
            <div className='container-eventLineup'>
              {eventSchedule.map((ev, index) => {
                const { time, date, event, icon } = ev;
                return (
                  <div className='eventLineup' key={event}>
                    {icon}
                    <span
                      style={{
                        fontSize: '24px',
                        color: 'black',
                        fontWeight: 700,
                      }}
                    >
                      {event}
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: '18px',
                        color: 'black',
                      }}
                    >
                      {date}
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: '18px',
                        color: 'black',
                      }}
                    >
                      {time}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* form */}

            <div className='row justify-content-center'>
              <div className='col-lg-9'>
                <div className='section_title text-center pb-30'>
                  {guest.name && (
                    <div
                      style={{
                        textAlign: 'center',
                        maxWidth: 400,
                        margin: 'auto',
                        paddingBottom: 20,
                      }}
                    >
                      {t('invitationGreeting')}
                      <p style={{ fontSize: '1.5rem' }}>{guest.name},</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-animation='fadeInUp'
        data-delay='0.7s'
        className='love-title-container fadeInUpBig fadeIn'
        data-wow-duration='1.3s'
        data-wow-delay='0.4s'
      >
        <div ref={elementRef}>
          <LoveTitleIcon />
        </div>
        <div ref={elementRef} className='love-title'>
          My heart is your to hold and cherish for the rest of our days.
        </div>
      </section>
      <article
        ref={elementRef}
        data-animation='fadeInUp'
        data-delay='0.7s'
        className='stories-container fadeInUpBig'
        data-wow-duration='1.3s'
        data-wow-delay='0.4s'
      >
        <Stories />
      </article>
      <article className='picture-grid-container'>
        <PicturesGrid />
      </article>
      {/* Footer section */}
      <footer id='footer' className='footer_area'>
        <div className='footer_shape_1'>
          <img src='/assets/images/shape-1.png' alt='shape' />
        </div>
        <div className='container'>
          <div className='footer_widget pt-50 pb-10 text-center'>
            <div className='footer_logo'>
              {/* {logo.footerLogo &&
                (logo.footerLogoType === 'mp4' ? (
                  <video height='140' autoPlay muted loop>
                    <source src={logo.footerLogo} type='video/mp4' />
                  </video>
                ) : ( */}
              <img
                style={{ maxHeight: 90, margin: 25, marginTop: 0 }}
                src={logo.headerLogo}
                alt='logo'
              />
              {/* <img src={logo.footerLogo} /> */}
              {/* ))} */}
            </div>
            <div className='footer_title '>
              <h3
                style={{
                  color: 'white',
                }}
                className='title'
              >
                {coupleName}
              </h3>
            </div>
          </div>
        </div>
        <h5
          style={{
            color: '#D3D3D3',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          #DWedding
        </h5>
      </footer>
      <CollectGuestAttendance
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

ShowInvite.getInitialProps = (ctx) => {
  const localeParams = ctx.query.lang || defaultLocale;
  const emptyGuestParams = {
    guest: {
      guestId: '',
      name: '',
      greeting: '',
      locale: localeParams,
    },
  };

  const currentUrl = resolvePath(ctx.req.url);
  const guestId = ctx.query.u;
  if (!guestId) {
    return {
      currentUrl,
      ...emptyGuestParams,
    };
  }

  const guestData = guestList.data;
  const guestListLastUpdatedAt = guestList.meta.lastUpdatedAt;
  const { name, greeting, locale } =
    guestData.filter((guest) => guest.guestId === guestId)[0] || {};
  if (!name) {
    return {
      currentUrl,
      ...emptyGuestParams,
    };
  }

  return {
    currentUrl,
    guestListLastUpdatedAt,
    guest: {
      name,
      greeting,
      guestId,
      locale: locale || localeParams,
    },
  };
};

export default ShowInvite;

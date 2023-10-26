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
import { EventDateIcon, HeaderLogo, LoveTitleIcon } from './extra';
import Stories from './stories';
import PicturesGrid from './pictureGrid';
import CollectGuestAttendance from './collect-guest-attendance';

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

const baseConfig = {
  weddingDay: 'Saturday',
  weddingTime: '12.00 - 15.00',
  weddingDate: 'Dec 10, 2023',
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: '2023-09-07T19:00:00+08:00',
    timeEndISO: '2023-09-07T21:00:00+08:00',
  },
  coupleInfo: {
    brideName: 'Oladunni ',
    groomName: 'Adewale',
    coupleNameFormat: 'GROOM_FIRST',
  },
  venue: {
    name: 'Eko Hotel',
    addressLine1: 'Eko hotel V.I Lagos State,',
    // addressLine2: 'Eko hotel V.I Lagos State',
    city: 'Lagos',
    country: 'Nigeria',
    mapUrl: 'https://goo.gl/maps/mwseWsNoHxvXLpMSA',
  },
  logo: {
    headerLogo: 'assets/images/ring-svg.PNG',
    footerLogo: 'assets/video/aw-ring-logo-ticker.mp4',
    footerLogoType: 'mp4',
  },
  ogTags: {
    logo: 'assets/images/aw-ring-logo.PNG',
    siteName: 'https://fuglydami.github.io/adewale-wedding/',
    publishedTime: '2023-09-07',
  },
};

const lang = {
  id: {
    weddingDay: 'Sabtu',
    weddingDate: '22 Februari 2020',
    venue: {
      ...baseConfig.venue,
      name: 'Hotel Oval',
      addressLine2: 'Surabaya, Jawa Timur, 60241,',
    },
  },
};

export default {
  ...baseConfig,
  lang,
};

tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
          container: '1280px',
        },
        fontFamily: {
          roboto: "'Roboto', sans-serif;",
          condensed: "'Roboto Condensed', sans-serif;",
        },
        colors: {
          black: '#0D0D0D',
          primary: '#FFF5EB',
          common: '#FFD2A4',
          button: '#1C1D28',
          black: '#161722',
          bordercolor: 'rgba(255, 255, 255, 0.15)',
        },
        fontSize: {
          '16': '16px',
        },
        backgroundImage: {
          banner: "url('images/banner-img.jpg')",
          overlay: 'linear-gradient(40deg, rgba(6, 6, 6, 0.76) 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
          textgradien: "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
        }
      }
    }
  }
const colours = {
  baseStrong: '#000',
  baseWeak: '#fff',

  faintStrong: {
    default: '#8994A6',
    shiftDown: '#A5ADBB',
  },
  faintWeak: {
    default: '#F6F8FB',
    shiftUp: '#EDEFF2',
  },

  accentStrong: '#0070FF',
  accentWeak: '#EBF4FF',

  complementStrong: '#8889E2',
  complementWeak: '#EEECFD',

  criticStrong: '#F74545',
  criticWeak: '#FDEDED',

  warningStrong: '#F8AE4F',
  warningWeak: '#FCEBCF',

  successStrong: '#27AE60',
  successWeak: '#DEF8E9',

  context: {
    back: {
      faintWeak: 'rgba(255, 255, 255, 0.15)',
    },

    text: {
      faintWeak: 'rgba(237, 241, 247, 0.5)',
    },

    line: {
      faintStrong: '#EDEFF2',
    },

    icon: {},

    fancy: {
      accentStrong: {
        default: 'linear-gradient(132deg, #3F89EE, #5447FF)',
        shiftDown: 'linear-gradient(132deg, #448FF3, #594CFF)',
      },
    },
  },
};

export default colours;

const envs = {
  dev: {
    BASE_URL_WS: 'http://localhost:3333/api/',
    API: {
      GREEKS: 'figures',
      BOOKS: 'books',
      QUOTES: 'quotes',
      RANDOM_QUOTE: 'quotes/random',
      USER: 'users',
      USER_SAVE_QUOTE: 'users/quote',
    },
    firebaseConf: {
      apiKey: 'AIzaSyApW4lHNF64NJ4FNwvwvc-lIhyrzG9E09s',
      authDomain: 'mythology-268a0.firebaseapp.com',
      databaseURL: 'https://mythology-268a0.firebaseio.com',
      storageBucket: 'mythology-268a0.appspot.com',
      messagingSenderId: '912671768924',
    },
  },
  production: {
    BASE_URL_WS: 'http://localhost:3000/api/',
  },
};

const getEnvironment = () => {
  const env = (__DEV__) ? 'dev' : 'production';
  // spread object non disponible hors react
  return envs[env];
};

export default getEnvironment;

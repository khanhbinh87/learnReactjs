import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContentFunc from './components/MainContentFunc';
// import MainContentClass from './components/MainContentClass';

export default function app() {
  return (
    <>
      <Header />
      <MainContentFunc />
      {/* <MainContentClass /> */}
      <Footer />
    </>
  );
}

// export default App;

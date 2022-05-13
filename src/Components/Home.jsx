import React from 'react';

import web from '../../src/images/banner 1.gif.crdownload';
// import { NavLink  } from 'react-router-dom';
import Common from './Common';
const Home =() => {
  return (
    <>
     <Common name="Grow Your Carrier with  "
        imgsrc={web}
        visit="/service"
        btname="Get Started"/>
    </>
  );
};
export default Home;



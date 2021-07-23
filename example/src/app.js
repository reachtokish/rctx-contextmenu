import React from 'react';
import {
  ExampleOne, ExampleTwo, ExampleThree, ExampleFour, ExampleFive, ExampleSix,
  ExampleSeven, ExampleEight
} from 'example/src/examples';
import forkRibbon from './assets/images/fork-ribbon.png';

import './style.scss';

const Demo = () => {
  return (
    <div className="wrapper" id="wrapper">
      <div className="header header--flex header--vcenter header--hbetween">
        <div className="container">
          <h1 className="header__logo">RCTXContextmenu</h1>
        </div>
      </div>
      <a href="https://github.com/reachtokish/rctx-contextmenu" className="ribbon"><img src={forkRibbon} alt="ribbon"  /></a>
      <div className="container">
        <div className="content-wrapper">
          <div className="content">

            <div className="content__section">
              <ExampleOne />
            </div>

            <div className="content__section">
              <ExampleTwo />
            </div>

            <div className="content__section">
              <ExampleThree />
            </div>

            <div className="content__section">
              <ExampleFour />
            </div>

            <div className="content__section">
              <ExampleFive />
            </div>

            <div className="content__section">
              <ExampleSix />
            </div>

            <div className="content__section">
              <ExampleSeven />
            </div>

            <div className="content__section">
              <ExampleEight />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Demo;

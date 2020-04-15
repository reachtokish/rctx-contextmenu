import React from 'react';
import ReactDOM from 'react-dom';
import { Basic, BasicTwo, AppendTo, DisableMenuItem, PreventCloseItemClick } from 'example/src/components';

import './style.scss';

const Demo = () => {
  return (
    <div className="wrapper">
      <div className="header header--flex header--vcenter header--hbetween">
        <div className="container">
          <h1 className="header__logo">RCTXContextmenu</h1>
        </div>
      </div>
      <div className="container">
        <div className="content-wrapper">
          <div className="menu">
            <ul className="menu__list">
              <li className="menu__listitem menu__listitem--active">
                <a href="#basic" className="menu__trigger">Basic Example</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#appendTo" className="menu__trigger">Append To</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#disableMenuItem" className="menu__trigger">Disable Menu Item</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="#preventCloseItemClick" className="menu__trigger">Prevent Close On Item Click</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="# " className="menu__trigger">Hide On Menu Leave</a>
              </li>
              <li className="menu__listitem menu__listitem--active">
                <a href="# " className="menu__trigger">preventHideOnScroll</a>
              </li>
            </ul>
          </div>
          <div className="content">

            <div className="content__section" id="basic">
              <Basic />
            </div>

            <div className="content__section" id="basic">
              <BasicTwo />
            </div>

            {/* <div className="content__section" id="appendTo">
              <AppendTo />
            </div>

            <div className="content__section" id="disableMenuItem">
              <DisableMenuItem />
            </div>

            <div className="content__section" id="preventCloseItemClick">
              <PreventCloseItemClick />
            </div> */}
          </div>
        </div>
      </div>
      <div id="append_class" />
    </div>
  )
};

export default Demo;

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from '../../lib';

import '../../lib/style.scss';
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
                <a href="# " className="menu__trigger">Simple Example</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <ContextMenuTrigger id="my-context-menu-1">
              <div className="box">
                Right Click On Me
              </div>
            </ContextMenuTrigger>

            <br /><br />

            <ContextMenuTrigger id="my-context-menu-2">
              <div className="box">
                Right Click On Me
              </div>
            </ContextMenuTrigger>

            <ContextMenu id="my-context-menu-1">
              <ContextMenuItem>Menu item 1</ContextMenuItem>
              <ContextMenuItem>Menu item 1</ContextMenuItem>
              <ContextMenuItem>Menu item 1</ContextMenuItem>
              <ContextMenuItem>Menu item 1</ContextMenuItem>
              <ContextMenuItem>Menu item 1</ContextMenuItem>
            </ContextMenu>

            <ContextMenu id="my-context-menu-2">
              <ContextMenuItem>Menu item 2</ContextMenuItem>
              <ContextMenuItem>Menu item 2</ContextMenuItem>
              <ContextMenuItem>Menu item 2</ContextMenuItem>
              <ContextMenuItem>Menu item 2</ContextMenuItem>
              <ContextMenuItem>Menu item 2</ContextMenuItem>
            </ContextMenu>
          </div>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(<Demo />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import ContextMenuTrigger from '../../lib/contextMenuTrigger';
import ContextMenu from '../../lib/contextMenu';
import ContextMenuItem from '../../lib/contextMenuItem';

import '../../lib/style.scss';
import './style.scss';

const Demo = () => (
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
            <li className="menu__listitem">
              <a href="# " className="menu__trigger">Complex Example</a>
            </li>
            <li className="menu__listitem">
              <a href="# " className="menu__trigger">Complex Example</a>
            </li>
            <li className="menu__listitem">
              <a href="# " className="menu__trigger">Complex Example</a>
            </li>
            <li className="menu__listitem">
              <a href="# " className="menu__trigger">Complex Example</a>
            </li>
            <li className="menu__listitem">
              <a href="# " className="menu__trigger">Complex Example</a>
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
            <ContextMenuItem>Menu item</ContextMenuItem>
            <ContextMenuItem>Menu item</ContextMenuItem>
            <ContextMenuItem>Menu item</ContextMenuItem>
          </ContextMenu>

          <ContextMenu id="my-context-menu-2">
            <ContextMenuItem>Menu item 2</ContextMenuItem>
            <ContextMenuItem>Menu item 2</ContextMenuItem>
            <ContextMenuItem>Menu item</ContextMenuItem>
            <ContextMenuItem>Menu item</ContextMenuItem>
            <ContextMenuItem>Menu item</ContextMenuItem>
          </ContextMenu>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<Demo />, document.getElementById('root'));

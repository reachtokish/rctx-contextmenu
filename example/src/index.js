import React from 'react';
import ReactDOM from 'react-dom';
import ContextMenu from '../../lib/contextMenu';
import ContextMenuTrigger from '../../lib/contextMenuTrigger';
import ContextMenuItem from '../../lib/contextMenuItem';
import SubMenu from '../../lib/subMenu';
// import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from '../../lib';

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
            <ContextMenuTrigger
              id="my-context-menu-1"
              attributes={{
                role: 'Abc',
                'no-up': 'None'
              }}
              disable={false}
              renderTag="span"
              disableIfShiftIsPressed={true}
            >
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
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>

            <ContextMenu
              id="my-context-menu-1"
              appendTo={document.querySelector('body')}
              hideOnLeave={true}
              onMouseLeave={e => console.log(e)}
              onHide={() => console.log("Hidden")}
              preventHideOnResize={true}
              preventHideOnScroll={true}
            >
              <ContextMenuItem onClick={(e) => console.log(e.target)}>Menu item 1</ContextMenuItem>
              <ContextMenuItem disabled={true}>Menu item 1</ContextMenuItem>
              <ContextMenuItem preventClose={true}>Menu item 1</ContextMenuItem>
              <ContextMenuItem
                attributes={{
                  role: 'Abc',
                  'no-up': 'None'
                }}
              >
                Menu item 1
              </ContextMenuItem>
              <ContextMenuItem>Menu item 1</ContextMenuItem>
            </ContextMenu>

            <ContextMenu id="my-context-menu-2">
              <ContextMenuItem>Menu item 2</ContextMenuItem>
              <ContextMenuItem>Menu item 2</ContextMenuItem>
              <SubMenu title="Menu item 2">
                <ContextMenuItem>Sub menu item 2</ContextMenuItem>
                <ContextMenuItem>Sub menu item 2</ContextMenuItem>
                <SubMenu title="Menu item 2">
                  <ContextMenuItem>Sub menu item 2</ContextMenuItem>
                  <ContextMenuItem>Sub menu item 2</ContextMenuItem>
                </SubMenu>
              </SubMenu>
            </ContextMenu>
          </div>
        </div>
      </div>
      <div id="append_class" />
    </div>
  )
};

ReactDOM.render(<Demo />, document.getElementById('root'));

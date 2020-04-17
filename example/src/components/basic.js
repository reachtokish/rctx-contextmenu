import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger, Submenu } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function Basic() {
  return (
    <div id="basic">
      <h2 className="title">
        <a href="#basic"><img src={linkIco} alt="link" /></a>
        Basic example
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-1"
        attributes={{'aria-label': 'abc'}}
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-1"
        onHide={() => console.log('On Hidden Called')}
        onShow={() => console.log('On Shown Called')}
      >
        <ContextMenuItem onClick={() => console.log('Hidden')}>Basic Menu Item 1</ContextMenuItem>
        <ContextMenuItem disabled={true}>Basic Menu Item 2</ContextMenuItem>
        <ContextMenuItem preventClose={true}>Basic Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 4</ContextMenuItem>
        <Submenu title="Abc">
          <ContextMenuItem>Basic Menu Item 1</ContextMenuItem>
          <ContextMenuItem>Basic Menu Item 2</ContextMenuItem>
        </Submenu>
      </ContextMenu>
    </div>
  )
}

export default Basic;

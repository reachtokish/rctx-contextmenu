import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function ExampleThree() {
  return (
    <div id="example3">
      <h2 className="title">
        <a href="#example3"><img src={linkIco} alt="link" /></a>
        Disable menu item
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-3"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-3"
      >
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem disabled={true}>I'm disabled</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default ExampleThree;

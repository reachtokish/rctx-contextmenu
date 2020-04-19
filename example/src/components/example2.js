import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function ExampleTwo() {
  return (
    <div id="example2">
      <h2 className="title">
        <a href="#example2"><img src={linkIco} alt="link" /></a>
        Multiple trigger item with single menu
      </h2>
      <div className="trigger-wrapper">
        <ContextMenuTrigger
          id="my-context-menu-2"
        >
          <div className="box">
            Right Click On Me
          </div>
        </ContextMenuTrigger>
        <ContextMenuTrigger
          id="my-context-menu-2"
        >
          <div className="box">
            Right Click On Me
          </div>
        </ContextMenuTrigger>
      </div>

      <ContextMenu
        id="my-context-menu-2"
      >
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default ExampleTwo;

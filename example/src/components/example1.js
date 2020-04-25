import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger, Submenu } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function ExampleOne() {
  return (
    <div id="example1">
      <h2 className="title">
        <a href="#example1"><img src={linkIco} alt="link" /></a>
        Basic example
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-1"
      >
        <div className="box">
          Right Click On Mes
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-1"
      >
        <ContextMenuItem>Basic Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default ExampleOne;

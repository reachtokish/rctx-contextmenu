import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger, Submenu } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function ExampleFour() {
  return (
    <div id="example4">
      <h2 className="title">
        <a href="#example4"><img src={linkIco} alt="link" /></a>
        Submenu example
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-4"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-4"
      >
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Menu Item 4</ContextMenuItem>
        <Submenu title="Submenu item">
          <ContextMenuItem>Menu Item 5</ContextMenuItem>
          <ContextMenuItem>Menu Item 6</ContextMenuItem>
          <ContextMenuItem>Menu Item 7</ContextMenuItem>
        </Submenu>
      </ContextMenu>
    </div>
  )
}

export default ExampleFour;

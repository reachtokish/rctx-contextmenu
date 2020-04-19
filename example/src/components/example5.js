import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger, Submenu } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function ExampleFive() {
  return (
    <div id="example5">
      <h2 className="title">
        <a href="#example5"><img src={linkIco} alt="link" /></a>
        Append to anywhere
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-5"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-5"
        appendTo="body"
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

export default ExampleFive;

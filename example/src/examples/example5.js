import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import { MusicIcon } from '../icons';
import tracks from '../tracks';

function ExampleFive() {
  return (
    <div>
      <h2 className="title">
        Context menu for each item
      </h2>
      <div className="music-box-holder">
        {tracks.map(({ id, trackName, artist, album, duration }) => (
          <ContextMenuTrigger id={`menu-${id}`} className="music-box" key={id}>
            <div className="music-box-left">
              <div className="music-icon">
                <MusicIcon />
              </div>
              <p>MP3</p>
            </div>
            <div className="music-box-right">
              <h3>{trackName}</h3>
              <p>{artist}</p>
              <p>{album}</p>
              <span>{duration}</span>
            </div>
          </ContextMenuTrigger>
        ))}
        {tracks.map(({ id }) => (
          <ContextMenu id={`menu-${id}`} key={id}>
            <ContextMenuItem>Play</ContextMenuItem>
            <>{id % 2 === 0 && <ContextMenuItem>Add to Media Player List</ContextMenuItem>}</>
            <ContextMenuItem disabled={true}>Restore Previous Version</ContextMenuItem>
            <ContextMenuItem>Send to</ContextMenuItem>
            <ContextMenuItem>Scan with Windows Defender</ContextMenuItem>
            <ContextMenuItem>Properties</ContextMenuItem>
          </ContextMenu>
        ))}
      </div>
    </div>
  )
}

export default ExampleFive;

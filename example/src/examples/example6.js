import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import { MusicIcon } from '../icons';
import tracks from '../tracks';

function ExampleSix() {
  const [arr, setArr] = React.useState([1, 2, 3, 4]);

  const addDynamicMenu = () => {
    const localArr = [...arr];
    const localArrLen = localArr.length;
    localArr.push(localArr[localArrLen - 1] + 1);

    setArr(localArr);
  };

  const removeDynamicMenu = (arrElem) => {
    const localArr = [...arr];
    const filterArr = localArr.filter((el) => el !== arrElem);

    setArr(filterArr);
  };
  
  return (
    <div>
      <h2 className="title">
        Add contextmenu dynamically
        <button onClick={addDynamicMenu} className="add-track">Add Track</button>
      </h2>
      <div className="music-box-holder">
        {arr.map(el => (
          <ContextMenuTrigger id={`example6-${el}`} className="music-box" key={el}>
            <div className="music-box-left">
              <div className="music-icon">
                <MusicIcon />
              </div>
              <p>MP3 {el}</p>
            </div>
            <div className="music-box-right">
              <button className="close-btn" onClick={() => removeDynamicMenu(el)}>X</button>
              <h3>Life is Good</h3>
              <p>Drake</p>
              <p>Future</p>
              <span>5:36</span>
            </div>
          </ContextMenuTrigger>
        ))}
        {arr.map(el => (
          <ContextMenu id={`example6-${el}`} key={el}>
            <ContextMenuItem>Play {el}</ContextMenuItem>
            <ContextMenuItem>Add to Media Player List</ContextMenuItem>
            <ContextMenuItem disabled={true}>Restore Previous Version</ContextMenuItem>
            <ContextMenuItem>Send to</ContextMenuItem>
            <ContextMenuItem>Scan with Windows Defender</ContextMenuItem>
            <ContextMenuItem>Properties</ContextMenuItem>
          </ContextMenu>
        ))}
      </div>
    </div>
  );
}

export default ExampleSix;

const registerEvent = (id, contextMenuEl) => {
  const localContextMenuEl = contextMenuEl;

  const showMenu = (clientY, clientX) => {
    localContextMenuEl.current.style.display = 'block';
    localContextMenuEl.current.style.top = `${clientY + 2}px`;
    localContextMenuEl.current.style.left = `${clientX + 2}px`;
  };

  const hideMenu = () => {
    localContextMenuEl.current.style.display = 'none';
  };

  window.contextMenus = {
    ...window.contextMenus,
    [id]: {
      showMenu,
      hideMenu
    }
  };
};

export default registerEvent;

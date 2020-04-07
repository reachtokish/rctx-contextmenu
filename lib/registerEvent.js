const registerEvent = (id, contextMenuEl) => {
  const localContextMenuEl = contextMenuEl;

  const showMenu = (clientY, clientX) => {
    const windowInnerHeight = window.innerHeight;
    const windowInnerWidth = window.innerWidth;

    localContextMenuEl.current.style.display = 'block';

    let newClientY = clientY;
    let newClientX = clientX;
    const elemHeight = localContextMenuEl.current.offsetHeight;
    const elemWidth = localContextMenuEl.current.offsetWidth;

    if (windowInnerHeight < clientY + elemHeight) {
      newClientY = clientY - elemHeight;
    }

    if (windowInnerWidth < clientX + elemWidth) {
      newClientX = clientX - elemWidth;
    }

    localContextMenuEl.current.style.top = `${newClientY + 2}px`;
    localContextMenuEl.current.style.left = `${newClientX + 2}px`;
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

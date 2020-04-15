export function uniqueId() {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

export function debounce(callback, wait, immediate = false) {
  let timeout = null;

  return () => {
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}

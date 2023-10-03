export function navigateTo(pathname) {
    window.history.pushState({}, '', pathname);
    window.dispatchEvent(new Event('popstate'));
  }
  
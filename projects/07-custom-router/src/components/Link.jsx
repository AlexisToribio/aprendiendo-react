import { BUTTONS, EVENTS } from "../consts.js";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = e => {
    const isMainEvent = e.button === BUTTONS.primary;
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault();
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}

export function masterPage(location) {
  return true;
};

export function disciplineCatalogFront(location) {
  return location.pathname.startsWith("/") && 
    !location.pathname.startsWith("/classSchedule") &&
    !location.pathname.startsWith("/disciplinePlanning");
};

export function classScheduleFront(location) {
  return location.pathname.startsWith("/classSchedule") ||
  location.pathname.startsWith("/disciplinePlanning");
};

// export function clients(location) {
//     return location.pathname.startsWith("/clients");
// }

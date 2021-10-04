document.addEventListener("DOMContentLoaded", async () => {
  //Checking if a service worker is already registered
  if (navigator.serviceWorker.controller) {
    console.log("[PWALab] Active service worker found, no need to register");
  } else {
    /*Register serviceWorker and added scope, which specifies
    the resources the service worker will be able to access to*/
    let reg = await navigator.serviceWorker.register("sw.js", { scope: "./" });
    console.log("[PWALab] Service worker has been registered for scope: " + reg.scope);
  }
});

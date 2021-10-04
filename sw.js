//Triggered every time the browser performs a HTTP request
self.addEventListener("fetch", event => {
  //intercept the request with event.respondWith()
  event.respondWith(fetch(event.request));
});

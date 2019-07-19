self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('restaurant-reviews-static-v1').then(cache => {
      return cache.addAll([
        '/',
        '/css/styles.css',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/sw_registration.js',
        '/data/restaurants.json',
        '/index.html',
        '/restaurant.html',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
      ]).then(() => {
          console.log('Files cached')
        }).catch(error => {
          console.log(`Something wring happened: ${error}`)
        });
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

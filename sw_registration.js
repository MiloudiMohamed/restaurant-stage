/**
 * Service Worker registration
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service worker registration worked');

  })
  .catch(error => {
    console.log(`Service worker registration failed: ${error}`);
  });
}

/* Pulso · service worker mínimo.
   Solo existe para que el navegador del celular pueda mostrar notificaciones del sistema
   y para volver a la app al tocarlas. No guarda datos ni intercepta peticiones. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) if ('focus' in c) return c.focus();
      if (self.clients.openWindow) return self.clients.openWindow('./');
      return undefined;
    }),
  );
});
/* Necesario para que Chrome permita «Instalar app». No intercepta nada: la petición sigue su curso normal. */
self.addEventListener('fetch', () => {});

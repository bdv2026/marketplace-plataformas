const CACHE_NAME = "bdv-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./index-mobile.html",
  "./index-desktop.html",

  "./fachada.png",
  "./tijolo-fundo.png",

  "./decora.webp",
  "./eletrodomestico.jpg",
  "./eletroeletronico.jpg",
  "./ferramentas.webp",
  "./jardinagem.jpg",
  "./suplemento.jpg",
  "./roupa-acessorio.jpg",

  "./logomarca-mercadolivre.png",
  "./logomarca-magalu.png",
  "./logomarca-amazon.jpg",
  "./logomarca-Shopee.jpg",
  "./logomarca-shein.png",
  "./logomarca-jequiti.png"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        return response || fetch(event.request);

      })

  );

});

{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // sw.js\
const CACHE_NAME = 'life4cut-cache-v1';\
\
// \uc0\u52880 \u49905 \u54624  \u54028 \u51068  \u47785 \u47197  (\u45236  \u54028 \u51068  \u51060 \u47492 \u51060  index.html\u51064 \u51648  \u54869 \u51064 \u54616 \u49464 \u50836 )\
const FILES_TO_CACHE = [\
  './',\
  './index.html'\
];\
\
// 1. \uc0\u49436 \u48708 \u49828  \u50892 \u52964  \u49444 \u52824  \u49884  \u54028 \u51068 \u51012  \u48652 \u46972 \u50864 \u51200 \u50640  \u51200 \u51109 \
self.addEventListener('install', (event) => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME).then((cache) => \{\
      console.log('\uc0\u54028 \u51068 \u51012  \u52880 \u49884 \u50640  \u51200 \u51109 \u54633 \u45768 \u45796 .');\
      return cache.addAll(FILES_TO_CACHE);\
    \})\
  );\
  self.skipWaiting();\
\});\
\
// 2. \uc0\u50724 \u54532 \u46972 \u51064  \u49345 \u53468 \u51068  \u46412  \u52880 \u49884 \u46108  \u54028 \u51068  \u49324 \u50857 \
self.addEventListener('fetch', (event) => \{\
  event.respondWith(\
    caches.match(event.request).then((response) => \{\
      // \uc0\u52880 \u49884 \u50640  \u51080 \u51004 \u47732  \u52880 \u49884  \u48152 \u54872 , \u50630 \u51004 \u47732  \u45348 \u53944 \u50892 \u53356 \u50640 \u49436  \u44032 \u51256 \u50740 \
      return response || fetch(event.request);\
    \})\
  );\
\});}
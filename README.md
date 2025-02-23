# Portfolio - Eduardo de la Calle Ruiz

Este repositorio contiene el código de un portfolio. La idea es que el contenido (imágenes y videos) se pueda actualizar sin necesidad de modificar el HTML o el JavaScript, utilizando archivos JSON y una estructura de carpetas organizada.

## Estructura del Repositorio

```
portfolio/
├── assets/
│   ├── css/
│   │   └── main.css         # Estilos de la web
│   ├── data/
│   │   ├── photos.json      # Lista de imágenes para el apartado de Fotografía
│   │   └── videos.json      # Datos de videos (URL, título y descripción) para cada sección
│   ├── images/              # Carpeta con las imágenes del portfolio
│   │   ├── foto1.jpg
│   │   ├── foto2.jpg
│   │   ├── ...              # Otras imágenes
│   └── js/
│       └── main.js          # Código JavaScript que carga dinámicamente el contenido
├── es/
│   └── index.html           # Página en español
└── en/
    └── index.html           # Página en inglés
```

## Configuración de Imágenes

Para actualizar las imágenes del apartado **Fotografía**:

1. **Agregar Imágenes:**  
   Coloca tus imágenes en la carpeta `assets/images/`.

2. **Actualizar JSON:**  
   Abre el archivo `assets/data/photos.json`.  
   Asegúrate de que contenga un arreglo con las rutas de las imágenes. Por ejemplo:

   ```json
   {
     "photos": [
       "assets/images/foto1.jpg",
       "assets/images/foto2.jpg",
       "assets/images/foto3.jpg",
       "assets/images/foto4.jpg"
     ]
   }
   ```

   *Nota:* Las rutas son relativas al archivo HTML (que se encuentra en la carpeta `es/`), por lo que se utiliza `assets/images/...`.

3. **Visualización:**  
   El CSS ya está configurado para mostrar las imágenes en un "feed" similar a Instagram. En escritorio se mostrará en una grid de 3 columnas, y en dispositivos móviles se apilarán en una sola columna.

## Configuración de Videos

Para actualizar los videos en las secciones **Televisión**, **Cortos** y **Edición de Videos**:

1. **Editar JSON de Videos:**  
   Abre el archivo `assets/data/videos.json`.  
   Cada sección es un arreglo de objetos donde cada objeto debe tener las propiedades:
   - `url`: URL del video (por ejemplo, enlace embebido de YouTube).
   - `title`: Título del video.
   - `description`: Descripción del video.

   Un ejemplo del contenido del archivo podría ser:

   ```json
   {
     "television": [
       {
         "url": "https://www.youtube.com/embed/VIDEO_ID1",
         "title": "Título Televisión 1",
         "description": "Descripción del video de televisión 1."
       },
       {
         "url": "https://www.youtube.com/embed/VIDEO_ID2",
         "title": "Título Televisión 2",
         "description": "Descripción del video de televisión 2."
       }
     ],
     "cortos": [
       {
         "url": "https://www.youtube.com/embed/VIDEO_ID3",
         "title": "Título Cortos 1",
         "description": "Descripción del video de cortos 1."
       },
       {
         "url": "https://www.youtube.com/embed/VIDEO_ID4",
         "title": "Título Cortos 2",
         "description": "Descripción del video de cortos 2."
       }
     ],
     "edicionVideos": [
       {
         "url": "https://www.youtube.com/embed/VIDEO_ID5",
         "title": "Título Edición 1",
         "description": "Descripción del video de edición 1."
       },
       {
         "url": "https://www.youtube.com/embed/VIDEO_ID6",
         "title": "Título Edición 2",
         "description": "Descripción del video de edición 2."
       }
     ]
   }
   ```

2. **Visualización:**  
   El archivo JavaScript (`assets/js/main.js`) se encargará de leer este JSON y crear dinámicamente, para cada video, una "card" que incluye el iframe, el título y la descripción.

## Ejecución del Proyecto

Para probar el proyecto correctamente, se recomienda ejecutarlo a través de un servidor local, ya que la función `fetch()` no funciona con el protocolo `file://`.

Si tienes Python instalado, puedes ejecutar en la carpeta del proyecto:

```bash
python -m http.server
```

Y luego abrir [http://localhost:8000/es/index.html](http://localhost:8000/es/index.html) en tu navegador.

## Resumen

- **Imágenes:**  
  - Coloca las imágenes en `assets/images/`.  
  - Actualiza las rutas en `assets/data/photos.json`.

- **Videos:**  
  - Edita `assets/data/videos.json` para modificar las URLs, títulos y descripciones de los videos en cada sección.


document.addEventListener("DOMContentLoaded", () => {
    loadVideos();
    loadPhotos();
  });
  
  function loadVideos() {
    fetch('../assets/data/videos.json')
      .then(response => response.json())
      .then(data => {
        // Se asume que en el JSON los arrays se llaman "television", "cortos" y "edicionVideos"
        renderVideos("television-content", data.television);
        renderVideos("cortos-content", data.cortos);
        renderVideos("edicion-videos-content", data.edicionVideos);
      })
      .catch(error => console.error("Error al cargar los videos:", error));
  }
  
  function renderVideos(containerId, videos) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = ""; // Limpiar contenido previo
      videos.forEach(video => {
        // Crear un contenedor para cada video (card)
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        
        // Iframe del video
        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "315";
        iframe.src = video.url;
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        videoCard.appendChild(iframe);
        
        // Título
        if (video.title) {
          const title = document.createElement("h4");
          title.textContent = video.title;
          videoCard.appendChild(title);
        }
        
        // Descripción
        if (video.description) {
          const description = document.createElement("p");
          description.textContent = video.description;
          videoCard.appendChild(description);
        }
        
        container.appendChild(videoCard);
      });
    }
  }
  
  function loadPhotos() {
    fetch('../assets/data/photos.json')
      .then(response => response.json())
      .then(data => {
        const photoGrid = document.getElementById("photoGrid");
        if (photoGrid) {
          photoGrid.innerHTML = "";
          data.photos.forEach(photoUrl => {
            const img = document.createElement("img");
            img.src = photoUrl;
            img.alt = "Foto del portfolio";
            photoGrid.appendChild(img);
          });
        }
      })
      .catch(error => console.error("Error al cargar las fotos:", error));
  }
  
(() => {
    const styleId = 'dark-mode-style';
    
    function toggleDarkMode() {
      let styleElement = document.getElementById(styleId);
      
      if (styleElement) {
        styleElement.remove();
      } else {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = `
          html {
            filter: invert(1) hue-rotate(180deg);
            background: #222;
            color: #eee;
          }
          img, video, iframe {
            filter: invert(1) hue-rotate(180deg);
          }
        `;
        document.head.appendChild(styleElement);
      }
    }
  
    toggleDarkMode();
  })();
  
// SVG Icon Definitions
const ICONS = {
  apple: `<svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-46-19.1-74.5-18.6-37.4.7-72 22.1-91.2 55.4-38.6 66.8-10 166.7 27.2 220.4 18.2 26.2 39.8 55.4 68.2 54.3 27.4-1.1 37.8-17.6 69.1-17.6 31.1 0 40.8 17.6 69.6 17 29.4-.5 48.6-26.3 66.6-52.9 20.8-30.3 29.3-59.5 29.7-61.1-1-1.7-57-22.1-57.5-86.8zM287.9 78.5C304 58.7 314.9 31.4 312 4c-23.3 1-52.1 15.6-68.8 35.2-14.5 17.1-27.2 44.7-24 71.6 26.2 2.2 53.4-12.2 68.7-32.3z"/></svg>`,
  windows: `<svg viewBox="0 0 448 512" fill="currentColor"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V267.5H0v150.8zM203.8 64.9l244.2-34v212.5H203.8V64.9zm244.2 384.3l-244.2-34V267.5h244.2v181.7z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  // Detect User Operating System
  const userOS = detectOS();
  
  // Render App Showcase
  renderAppShowcase(userOS);
});

// Detect user operating system for download prioritization
function detectOS() {
  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (platform.includes("mac") || userAgent.includes("mac")) {
    return "mac";
  } else if (platform.includes("win") || userAgent.includes("win")) {
    return "windows";
  }
  return "other";
}

// Helper to transform Google Drive sharing links to direct download links
function getDirectDownloadUrl(url) {
  if (!url) return "";
  if (url.includes("drive.google.com")) {
    const regOpen = /id=([a-zA-Z0-9_-]+)/;
    const regFile = /\/file\/d\/([a-zA-Z0-9_-]+)/;
    let match = url.match(regOpen) || url.match(regFile);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}&confirm=t`;
    }
    if (url.includes("export=download") && !url.includes("confirm=")) {
      return `${url}&confirm=t`;
    }
  }
  return url;
}

function renderAppShowcase(userOS) {
  const grid = document.getElementById("apps-grid");
  if (!grid) return;
  
  // Clear placeholder
  grid.innerHTML = "";
  
  appsData.forEach(app => {
    const card = document.createElement("article");
    card.className = "app-card";
    card.id = `card-${app.id}`;
    
    // Build download buttons HTML
    let downloadsHTML = "";
    const downloads = app.downloads;
    
    if (downloads) {
      // Re-order downloads list to show user's OS first
      const platforms = Object.keys(downloads);
      if (userOS === "mac" && platforms.includes("mac")) {
        // Shift mac to first
        platforms.sort((a, b) => a === "mac" ? -1 : 1);
      } else if (userOS === "windows" && platforms.includes("windows")) {
        // Shift windows to first
        platforms.sort((a, b) => a === "windows" ? -1 : 1);
      }
      
      platforms.forEach(platform => {
        const dl = downloads[platform];
        const isUserPlatform = platform === userOS;
        const buttonClass = `btn-download ${platform} ${isUserPlatform ? 'user-platform' : ''}`;
        
        // Use Google Drive url if available, otherwise relative local path
        let downloadUrl = dl.url ? dl.url : dl.localPath;
        downloadUrl = getDirectDownloadUrl(downloadUrl);
        
        const icon = platform === "mac" ? ICONS.apple : ICONS.windows;
        const isExternal = !!dl.url;
        const isGoogleDrive = downloadUrl.includes("drive.google.com");
        
        // For direct Google Drive downloads, use download icon instead of external link icon
        const actionIcon = (isExternal && !isGoogleDrive) ? ICONS.external : ICONS.download;
        const targetAttr = (isExternal && !isGoogleDrive) ? '_blank' : '_self';
        
        downloadsHTML += `
          <a href="${downloadUrl}" target="${targetAttr}" class="${buttonClass}" title="Descargar para ${platform === 'mac' ? 'macOS' : 'Windows'}">
            ${icon}
            <div class="btn-text">
              <span>${dl.label}</span>
              <span class="arch-info">${dl.arch}</span>
            </div>
            ${actionIcon}
          </a>
        `;
      });
    }

    // Build features list HTML
    const featuresListHTML = app.features.map(feat => `<li>${feat}</li>`).join("");
    
    // Build release notes HTML
    const releaseNotesHTML = app.releaseNotes.map(note => `<li>${note}</li>`).join("");

    card.innerHTML = `
      <div class="app-card-header">
        <div class="app-identity">
          <img src="${app.logo}" alt="Logo de ${app.name}" class="app-logo">
          <div class="app-title-group">
            <h3>${app.name}</h3>
            <div class="app-tagline">${app.tagline}</div>
          </div>
        </div>
        <div class="app-meta">
          <span class="version-badge">v${app.version}</span>
        </div>
      </div>
      
      <p class="app-description">${app.description}</p>
      
      <div class="app-tabs">
        <button class="tab-btn active" data-tab="features-${app.id}">Características</button>
        <button class="tab-btn" data-tab="releases-${app.id}">Últimas Mejoras</button>
      </div>
      
      <div class="tab-content">
        <div class="tab-panel active" id="features-${app.id}">
          <ul class="features-list">
            ${featuresListHTML}
          </ul>
        </div>
        <div class="tab-panel" id="releases-${app.id}">
          <ul class="updates-list">
            ${releaseNotesHTML}
          </ul>
        </div>
      </div>
      
      <div class="download-section">
        <div class="download-info">
          <span class="download-title">Consigue la aplicación</span>
          <span class="download-desc">Instalación rápida e inicio inmediato. Compilaciones firmadas y limpias.</span>
        </div>
        <div class="download-buttons">
          ${downloadsHTML}
        </div>
      </div>
    `;
    
    grid.appendChild(card);
    
    // Setup tab button click handlers for this card
    const tabBtns = card.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        // Deactivate other tabs/panels in this card
        card.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        card.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
        
        // Activate selected tab & panel
        btn.classList.add("active");
        const targetId = btn.getAttribute("data-tab");
        const targetPanel = card.querySelector(`#${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      });
    });

    // Setup download disclaimer trigger for this card
    const downloadBtns = card.querySelectorAll(".btn-download");
    downloadBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        activeDownloadUrl = btn.getAttribute("href");
        showDownloadModal();
      });
    });
  });
}

// Modal DOM elements and handlers
let activeDownloadUrl = null;

const modalOverlay = document.getElementById("download-modal");
const modalCancelBtn = document.getElementById("modal-cancel-btn");
const modalAcceptBtn = document.getElementById("modal-accept-btn");

function showDownloadModal() {
  if (!modalOverlay) return;
  modalOverlay.style.display = "flex";
  modalOverlay.offsetHeight;
  modalOverlay.classList.add("show");
}

function hideDownloadModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("show");
  setTimeout(() => {
    modalOverlay.style.display = "none";
  }, 300);
}

if (modalCancelBtn) {
  modalCancelBtn.addEventListener("click", hideDownloadModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      hideDownloadModal();
    }
  });
}

if (modalAcceptBtn) {
  modalAcceptBtn.addEventListener("click", () => {
    if (activeDownloadUrl) {
      const tempLink = document.createElement("a");
      tempLink.href = activeDownloadUrl;
      tempLink.setAttribute("target", "_self");
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }
    hideDownloadModal();
  });
}

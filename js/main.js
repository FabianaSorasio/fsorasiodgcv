// Mute/unmute toggle for the home hero video.
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("introVideo");
    const btn = document.getElementById("muteToggle");
    if (!video || !btn) return;

    function sync() {
      const unmuted = !video.muted;
      btn.classList.toggle("is-unmuted", unmuted);
      btn.setAttribute("aria-pressed", String(!unmuted));
      btn.setAttribute("aria-label", unmuted ? "Mute" : "Unmute");
    }

    btn.addEventListener("click", () => {
      video.muted = !video.muted;
      if (!video.muted) video.play().catch(() => {});
      sync();
    });

    sync();
  });
})();

// Lightbox for case-study images: opens enlarged over the page instead of navigating away.
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const zoomLinks = document.querySelectorAll("a.case-zoom");
    if (!zoomLinks.length) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = '<button class="lightbox-close" type="button" aria-label="Cerrar">&times;</button><img class="lightbox-img" src="" alt="">';
    document.body.appendChild(overlay);
    const img = overlay.querySelector(".lightbox-img");
    const closeBtn = overlay.querySelector(".lightbox-close");

    function open(src, alt) {
      img.src = src;
      img.alt = alt || "";
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function close() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
      img.src = "";
    }

    zoomLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const inner = link.querySelector("img");
        open(link.getAttribute("href"), inner ? inner.alt : "");
      });
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target === closeBtn) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  });
})();

// Mobile hamburger menu for the top nav on inner pages.
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".top-nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  });
})();

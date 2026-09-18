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

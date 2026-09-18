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

// Applies the theme class before first paint to avoid FOUC and to not depend
// on the astro:page-load event timing (which can miss the initial load).
;(function () {
  try {
    var pref = localStorage.getItem('theme') || 'system'
    var isDark =
      pref === 'dark' ||
      (pref === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  } catch (e) {}
})()

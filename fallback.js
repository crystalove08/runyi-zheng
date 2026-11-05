// Loads images by base name and tries several file extensions.
// Drop a file such as assets/social/01.jpg or assets/logos/sql.svg and it appears.
document.querySelectorAll('img[data-base]').forEach(function (img) {
  var exts = (img.dataset.exts || 'jpg,png').split(','), i = 0, base = img.dataset.base;
  img.addEventListener('error', function () {
    i += 1;
    if (i < exts.length) { img.src = base + '.' + exts[i]; } else { img.remove(); }
  });
  img.src = base + '.' + exts[0];
});

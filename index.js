function adjustSize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    // Contoh penyesuaian ukuran elemen
    var element = document.getElementById('myElement');
    element.style.width = (windowWidth / 2) + 'px';
    element.style.height = (windowHeight / 2) + 'px';
  }
  
  // Panggil fungsi adjustSize saat halaman dimuat dan saat ukuran jendela berubah
  window.addEventListener('DOMContentLoaded', adjustSize);
  window.addEventListener('resize', adjustSize);
  
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
  
    // Mengambil nilai input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validasi form
    if (name === '' || email === '' || message === '') {
      alert('Harap isi semua field!');
      return;
    }
  
    // Proses pengiriman form (simulasi)
    alert('Terima kasih, pesan Anda telah dikirim!');
    // Di sini Anda dapat menambahkan kode untuk mengirim formulir ke server
  
    // Mengosongkan form setelah pengiriman
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
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
  
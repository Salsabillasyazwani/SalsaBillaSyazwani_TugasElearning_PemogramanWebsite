document.addEventListener("DOMContentLoaded", function() {
  const learnBtn = document.getElementById("learnBtn");
  const heroText = document.getElementById("heroText");
  let isChanged = false;

  learnBtn.addEventListener("click", function() {
    if (!isChanged) {
      heroText.innerHTML = `
        Toko Gorden BILLA siap melayani custom design, pengukuran langsung ke lokasi, dan 
        pemasangan profesiona oleh tim berpengalaman. <br>
        Tersedia berbagai jenis gorden dengan pilihan warna & bahan berkualitas tinggi. <br>
        🕐Kami buka setiap hari pukul <strong>08.00–21.00 WIB</strong>.
      `;
      learnBtn.textContent = "Back";
      isChanged = true;
    } else {
      heroText.innerHTML = `
        Hadirkan keindahan dan kenyamanan di setiap ruang <br> 
        dengan gorden premium berkualitas tinggi.
      `;
      learnBtn.textContent = "Learn More";
      isChanged = false;
    }
  });
});

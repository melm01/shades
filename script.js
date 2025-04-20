function showAlert() {
  alert("Button clicked!");
  <script>
  window.addEventListener('load', function () {
    const popup = document.getElementById('popup-banner');
    const closeBtn = document.getElementById('close-popup');

    popup.style.display = 'block';

    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  });
</script>

}

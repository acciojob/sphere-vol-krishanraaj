document.addEventListener('DOMContentLoaded', () => {
  const radiusInput = document.getElementById('radius');
  const volumeOutput = document.getElementById('volume');
  const submitBtn = document.getElementById('submit');

  function volume_sphere() {
    const raw = radiusInput.value.trim();
    const r = Number(raw);

    // Validate input
    if (raw === '' || isNaN(r) || r < 0) {
      volumeOutput.value = 'NaN';
      return;
    }

    // Calculate volume
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    // Display result rounded to 4 decimal places
    volumeOutput.value = volume.toFixed(4);
  }

  // Attach event listener to submit button
  submitBtn.addEventListener('click', volume_sphere);
});

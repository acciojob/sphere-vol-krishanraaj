function volume_sphere() {
  // Get the radius value from the input
  const radiusInput = document.getElementById("radius").value;

  // Convert to number
  const radius = parseFloat(radiusInput);

  // Validate: must be a non-negative number
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate volume using formula: V = (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display result rounded to 4 decimal places
  document.getElementById("volume").value = volume.toFixed(4);
}

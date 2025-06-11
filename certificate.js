
function downloadCertificate() {
  const name = document.getElementById('name').value.toLowerCase().trim();
  const mobile = document.getElementById('mobile').value.trim();

  fetch(`YOUR_CERTIFICATE_SCRIPT_URL_HERE?name=${name}&mobile=${mobile}`)
    .then(res => res.text())
    .then(link => {
      if (link === "NOT_FOUND") {
        alert("Certificate not found. Check your name and mobile number.");
      } else {
        window.open(link, '_blank');
      }
    })
    .catch(err => alert("Error fetching certificate."));
}

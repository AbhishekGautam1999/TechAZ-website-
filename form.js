
document.getElementById("internForm").addEventListener("submit", function(e) {
  e.preventDefault();
  fetch('YOUR_GOOGLE_SCRIPT_URL_HERE', {
    method: 'POST',
    body: JSON.stringify({
      name: document.getElementById('name').value,
      course: document.getElementById('course').value,
      college: document.getElementById('college').value,
      whatsapp: document.getElementById('whatsapp').value,
      email: document.getElementById('email').value,
      batch: document.getElementById('batch').value,
      knowledge: document.querySelector('input[name="knowledge"]:checked').value,
      reason: document.getElementById('reason').value
    }),
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.text())
  .then(msg => alert("Form submitted successfully!"))
  .catch(err => alert("Submission failed."));
});

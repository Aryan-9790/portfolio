document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("status-msg").innerText = "Thank you! Message sent.";
  this.reset();
});

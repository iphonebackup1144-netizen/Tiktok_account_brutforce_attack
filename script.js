const passwords = [
  "123456", "password", "123456789", "qwerty", "abc123", "password1",
  "admin123", "letmein", "welcome123", "tiktok@123", "haris786", "pakistan786",
  "user1234", "pass1234", "abc@123", "tiktok_login", "0987654321", "love1234",
  "user@tiktok", "secure@786", "access@tiktok", "admin@panel", "test1234",
  "hackit123", "rawalpindi1", "shakriyal321", "tiktokuser01", "loginerror",
  "haris@123", "hackerlife", "glitch_007", "wifi@hack", "keylogger89",
  "firewall123", "bypass098", "exploitme", "tiktok_is_mine", "root@user",
  "admin@tiktok", "testuser98", "noaccess12", "securityfail", "vault321",
  "cipher@000", "override1", "0dayfound", "ddos_active", "tiktokmaster",
  "bypassfirewall", "glitchstorm", "matrix2025", "shell_8080",
  // ... more filler passwords
];

// Pad up to 500 with dummy passwords
while (passwords.length < 499) {
  passwords.push("guess" + Math.floor(Math.random() * 99999));
}

passwords.push("haris123@"); // final correct password

const output = document.getElementById("output");
const leak = document.getElementById("leak");
const typeSound = document.getElementById("type-sound");

function playSound() {
  typeSound.currentTime = 0;
  typeSound.play();
}

function startHack() {
  const username = document.getElementById("username").value.trim();
  output.innerHTML = "";
  leak.classList.add("hidden");

  let i = 0;

  function tryPassword() {
    if (i >= passwords.length) {
      output.innerHTML += `❌ Password not found<br>`;
      return;
    }

    const currentPass = passwords[i];
    output.innerHTML += `🔐 Trying password: <span style="color:#ff4444">${currentPass}</span><br>`;
    playSound();

    setTimeout(() => {
      if (username === "hles_educational_system" && currentPass === "haris123@") {
        output.innerHTML += `<span style="color:lime">✅ Password Found: <strong>${currentPass}</strong></span><br>`;
        leak.classList.remove("hidden");
      } else {
        output.innerHTML += `<span style="color:red">❌ Incorrect</span> — Trying next password in 10 seconds...<br><br>`;
        i++;
        setTimeout(tryPassword, 10000);
      }
    }, 1000);
  }

  tryPassword();
}

// Simulate loading screen
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 120000); // 2 minute fake load
}

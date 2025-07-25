const passwords = [
  "123456", "password", "123456789", "12345678", "12345", "qwerty", "111111",
  "admin", "letmein", "football", "iloveyou", "123123", "welcome",
  "ayan123", "sahid@123", "malik123", "ali12@", "danish123@",
  "haris123@"
];

function matrixRain() {
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = new Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

function startAttack() {
  const user = document.getElementById("username").value.trim();
  const output = document.getElementById("output");
  output.innerText = `🔍 Starting brute force attack on ${user}...\n\n`;

  let index = 0;
  function tryNext() {
    if (index >= passwords.length) {
      output.innerText += "\n❌ No password matched. Attack failed.\n";
      return;
    }

    const pwd = passwords[index];
    output.innerText += `🔄 Trying password: ${pwd}\n⏳ Next password in 10 seconds...\n\n`;

    if (user === "hles_educational_system" && pwd === "haris123@") {
      output.innerText += `\n✅ Password found: ${pwd}\n💥 Account hacked successfully! (FAKE)\n`;
      return;
    }

    index++;
    setTimeout(tryNext, 10000);
  }

  tryNext();
}

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
  }, 120000); // 2 minutes

  matrixRain();
};

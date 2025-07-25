const passwords = [
  "123456", "123456789", "password", "12345678", "12345", "qwerty", "abc123", "111111", "123123", "welcome",
  "letmein", "football", "iloveyou", "admin", "monkey", "login", "princess", "solo", "qwerty123", "1q2w3e4r",
  "ayan1","ayan12","ayan123","ayan1234","ayan12345","ayan@","ayan1@","ayan12@","ayan123@","ayan1234@","ayan12345@",
  "sahid1","sahid12","sahid123","sahid1234","sahid12345","sahid@","sahid1@","sahid12@","sahid123@","sahid1234@","sahid12345@",
  "Shahid1","Shahid12","Shahid123","Shahid1234","Shahid12345","Shahid@","Shahid1@","Shahid12@","Shahid123@","Shahid1234@","Shahid12345@",
  "Malik1","Malik12","Malik123","Malik1234","Malik12345","Malik@","Malik1@","Malik12@","Malik123@","Malik1234@","Malik12345@",
  "Ali1","Ali12","Ali123","Ali1234","Ali12345","Ali@","Ali1@","Ali12@","Ali123@","Ali1234@","Ali12345@",
  "Danish1","Danish12","Danish123","Danish1234","Danish12345","Danish@","Danish1@","Danish12@","Danish123@","Danish1234@","Danish12345@",
  "haris12345@"
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

  setInterval(draw, 35);
}

function startAttack() {
  const user = document.getElementById("username").value.trim();
  const output = document.getElementById("output");
  output.innerText = "Starting brute force attack on " + user + "...\\n";

  let index = 0;
  function tryNext() {
    if (index >= passwords.length) {
      output.innerText += "\\nNo password found. Attack failed.";
      return;
    }

    const pwd = passwords[index];
    output.innerText += "Trying password: " + pwd + " ...\\n";

    if (user === "hles_educational_system" && pwd === "haris12345@") {
      output.innerText += "\\n✅ Password found: " + pwd + "\\nAccount hacked successfully (FAKE)";
      return;
    }

    index++;
    setTimeout(tryNext, 10000); // 10 seconds delay
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

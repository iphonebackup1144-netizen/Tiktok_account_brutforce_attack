const passwords = [
  "123456","123456789","password","12345678","qwerty","12345","1234567","123123","111111","1234567890",
  "abc123","1234","iloveyou","1q2w3e4r","000000","qwerty123","admin","welcome","monkey","dragon",
  "letmein","sunshine","master","football","michael","shadow","password1","princess","123qwe","qazwsx",
  "ashley","bailey","lovely","charlie","donald","batman","superman","killer","passw0rd","maggie",
  "hello","freedom","whatever","trustno1","qwertyuiop","starwars","ninja","access","flower","cheese",
  "aa123456","hello123","pepper","hannah","tigger","pokemon","joshua","ginger","jordan","nicole",
  "hunter","buster","samantha","banana","1qaz2wsx","zxcvbnm","turtle","welcome123","daniel","iloveyou1",
  "matthew","biteme","cookie","andrew","michelle","hunter2","soccer","harley","pass123","789456123",

  // Custom passwords
  "ayan1","ayan12","ayan123","ayan1234","ayan12345","ayan@","ayan1@","ayan12@","ayan123@","ayan1234@","ayan12345@",
  "sahid1","sahid12","sahid123","sahid1234","sahid12345","sahid@","sahid1@","sahid12@","sahid123@","sahid1234@","sahid12345@",
  "Shahid1","Shahid12","Shahid123","Shahid1234","Shahid12345","Shahid@","Shahid1@","Shahid12@","Shahid123@","Shahid1234@","Shahid12345@",
  "Raja1","Raja12","Raja123","Raja1234","Raja12345","Raja@","Raja1@","Raja12@","Raja123@","Raja1234@","Raja12345@",
  "Malik1","Malik12","Malik123","Malik1234","Malik12345","Malik@","Malik1@","Malik12@","Malik123@","Malik1234@","Malik12345@",
  "Ali1","Ali12","Ali123","Ali1234","Ali12345","Ali@","Ali1@","Ali12@","Ali123@","Ali1234@","Ali12345@",
  "Danish1","Danish12","Danish123","Danish1234","Danish12345","Danish@","Danish1@","Danish12@","Danish123@","Danish1234@","Danish12345@",

  // Final success password
  "haris12345@"
];

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
  }, 3000);

  matrixRain();
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startBruteforce() {
  const username = document.getElementById("username").value.trim();
  const output = document.getElementById("output");
  output.textContent = "Starting brute-force on user: " + username + "\n\n";

  for (let i = 0; i < passwords.length; i++) {
    const pw = passwords[i];
    output.textContent += `Trying: ${pw} ... `;
    await delay(150);

    if (username === "hles_educational_system" && pw === "haris12345@") {
      output.textContent += "✅ SUCCESS\n\nPASSWORD FOUND: haris12345@\nAccount Hacked Successfully!\n\n⚠️ This is a prank!";
      return;
    } else {
      output.textContent += "❌ Incorrect\n";
    }
  }

  output.textContent += "\nNo valid password found.\n⚠️ This was a prank demo!";
}

// MATRIX BACKGROUND
function matrixRain() {
  const c = document.getElementById("matrix");
  const ctx = c.getContext("2d");

  c.height = window.innerHeight;
  c.width = window.innerWidth;

  const letters = "01";
  const fontSize = 14;
  const columns = c.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);
}

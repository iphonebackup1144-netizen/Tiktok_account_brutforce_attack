const correctUsername = "hles_educational_system";
const correctPassword = "haris123@";
let passwords = [];

// Generate fake passwords
const names = ["ayan", "sahid", "Shahid", "Raja", "Malik", "Nawaz", "Haider", "Imran", "Saim", "Abdullah", "Ali", "Alimalik", "Hassan", "Danish", "Wahab", "Rehman"];
const suffixes = ["1", "12", "123", "1234", "12345", "@", "1@", "12@", "123@", "1234@", "12345@"];

names.forEach(name => {
  suffixes.forEach(suffix => {
    passwords.push(name + suffix);
  });
});

// Add filler passwords
for (let i = 0; i < 300; i++) {
  passwords.push("pass" + Math.floor(Math.random() * 100000));
}

passwords.push(correctPassword); // Add correct one at end

// Initial fake loading
const initialLog = document.getElementById("initial-log");
const loadingMessages = [
  "Initializing brute force core modules...",
  "Connecting to TikTok mainframe...",
  "Bypassing firewall...",
  "Spoofing IP: 182.22.14.1 (Rawalpindi, Shakriyal)...",
  "Injecting custom payload...",
  "Establishing secure SSH tunnel...",
  "Bypassing TikTok security token...",
  "Syncing attack nodes...",
  "Finalizing breach pipeline...",
  "System armed for bruteforce attack..."
];

let loadingIndex = 0;
const loadingInterval = setInterval(() => {
  if (loadingIndex < loadingMessages.length) {
    initialLog.innerText += loadingMessages[loadingIndex] + "\n";
    document.title = loadingMessages[loadingIndex];
    loadingIndex++;
  } else {
    clearInterval(loadingInterval);
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-interface").style.display = "block";
    document.title = "TikTok Bruteforce Attack";
  }
}, 1000);

// Bruteforce function
async function startAttack() {
  const username = document.getElementById("username").value.trim();
  const consoleLog = document.getElementById("console");
  consoleLog.innerText = "";
  let found = false;

  for (let i = 0; i < passwords.length; i++) {
    const pass = passwords[i];
    consoleLog.innerText += `🔐 Trying password: ${pass}\n`;
    consoleLog.innerText += `❌ Password incorrect\n`;
    consoleLog.innerText += `⏳ Trying next password in 10 seconds...\n\n`;
    consoleLog.scrollTop = consoleLog.scrollHeight;
    await delay(10000);

    if (username === correctUsername && pass === correctPassword) {
      consoleLog.innerText += `\n✅ PASSWORD FOUND: ${pass}\n`;
      consoleLog.innerText += `🔥 Account hacked successfully (FAKE)\n`;
      consoleLog.innerText += `\n⚠️ This is a prank website made for educational purposes only.\n`;
      found = true;
      break;
    }
  }

  if (!found) {
    consoleLog.innerText += `\n🚨 Intrusion detection system triggered\n❌ Access denied. Bruteforce failed.\n`;
    consoleLog.innerText += `\n⚠️ This is a prank website made for educational purposes only.\n`;
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

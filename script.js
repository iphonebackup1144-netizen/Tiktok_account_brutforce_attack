const correctUsername = "hles_educational_system";
const correctPassword = "haris123@";

// Sample of 500+ passwords
const passwords = [
    "haris1", "haris12", "haris123", "haris1234", "haris12345", "haris@", "haris1@", "haris12@", "haris123@",
    // ... (add more here or use full list from passwords.js)
    "ayan123@", "shahid123", "saim1234@", "wahab123@", "abdullah1@", "haider123@", "danish@1", "ali12345",
    "alimalik@123", "malik321", "raja999", "rehman@123", "imran001@", "hassan@786", "nawaz123@", "shahid007@",
    // Make sure haris123@ is always at the end
    "haris123@"
];

const consoleEl = document.getElementById("console");
const startBtn = document.getElementById("start-btn");
const usernameInput = document.getElementById("username");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function logToConsole(message) {
    const p = document.createElement("p");
    p.textContent = message;
    consoleEl.appendChild(p);
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

async function startBruteForce() {
    consoleEl.innerHTML = "";
    const username = usernameInput.value.trim();

    if (!username) {
        logToConsole("⚠️ Please enter a username");
        return;
    }

    logToConsole("💻 Starting brute-force attack on TikTok user: " + username);
    logToConsole("🌐 Connecting to TikTok server...");
    logToConsole("🔍 Scanning IP Address: 192.168.01.100 (Shakriyal, Rawalpindi)");
    logToConsole("🔓 Bypassing TikTok security firewall...");
    logToConsole("🚀 Launching attack module...");
    await sleep(3000);

    for (let i = 0; i < passwords.length; i++) {
        const password = passwords[i];
        logToConsole(`🔐 Trying password: ${password}`);
        await sleep(1000);
        logToConsole("❌ Password incorrect");
        logToConsole("⏳ Trying next password in 10 seconds...");
        await sleep(10000);

        if (username === correctUsername && password === correctPassword) {
            logToConsole("✅ Password correct: " + password);
            logToConsole("💥 Account hacked successfully (FAKE)");

            // Fake TikTok Data Leak Preview
            logToConsole("📥 TikTok Account Info Leaked:");
            logToConsole("Username: hles_educational_system");
            logToConsole("Password: haris123@");
            logToConsole("Followers: 74");
            logToConsole("Following: 248");
            logToConsole("Likes: 61");
            logToConsole("Email Linked: rajaharisptf@gmail.com");
            break;
        }
    }

    if (username !== correctUsername) {
        logToConsole("🚫 Password not found");
        logToConsole("🔐 Target account could not be hacked (FAKE)");
    }
}

startBtn.addEventListener("click", startBruteForce);

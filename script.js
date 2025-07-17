// エアコンの状態（初期値）
let airconStatus = {
  mode: "冷房",
  temperature: 25
};

// モードごとの色
const modeColors = {
  "暖房": "#f44336",
  "冷房": "#2196f3",
  "除湿": "#4caf50",
  "送風": "#9e9e9e"
};

// モードごとの翻訳
const modeLabels = {
  ja: {
    "暖房": "暖房",
    "冷房": "冷房",
    "除湿": "除湿",
    "送風": "送風"
  },
  en: {
    "暖房": "Heat",
    "冷房": "Cool",
    "除湿": "Dry",
    "送風": "Fan"
  }
};

// 言語を取得
function getLang() {
  return localStorage.getItem("lang") || "ja";
}

// 初期表示
window.onload = function() {
  updateDisplay();
};

// モード変更関数
function setMode(mode) {
  airconStatus.mode = mode;
  updateDisplay();
}

// 温度変更関数
function changeTemp(amount) {
  airconStatus.temperature += amount;
  if (airconStatus.temperature < 16) airconStatus.temperature = 16;
  if (airconStatus.temperature > 30) airconStatus.temperature = 30;
  updateDisplay();
}

// 表示更新関数
function updateDisplay() {
  const lang = getLang();
  const mode = airconStatus.mode;
  const label = modeLabels[lang][mode] || mode;
  const prefix = lang === "ja" ? "モード：" : "Mode: ";

  // モード表示
  document.getElementById("mode-display").textContent = prefix + label;

  // 温度表示
  document.getElementById("temperature").textContent = airconStatus.temperature;

  // 風の色
  const wind = document.getElementById("wind-effect");
  wind.style.backgroundColor = modeColors[mode] || "gray";
}

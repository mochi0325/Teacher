// エアコンの状態（初期値）
let airconStatus = {
  mode: "冷房"
};

// 初期表示
window.onload = function() {
  updateDisplay();
};

// モード変更関数
function setMode(mode) {
  airconStatus.mode = mode;
  updateDisplay();
}

// 表示更新関数
function updateDisplay() {
 
  document.getElementById("mode-display").textContent = "モード：" + airconStatus.mode;
}

let currentTemp = 25;

  function changeTemp(amount) {
    currentTemp += amount;

    // 上限下限設定（例：16〜30℃）
    if (currentTemp < 16) currentTemp = 16;
    if (currentTemp > 30) currentTemp = 30;

    document.getElementById('temperature').textContent = currentTemp;
  }


// 温度変更関数
  function setMode(mode) {
  document.getElementById("mode-display").textContent = `モード：${mode}`;

  const wind = document.getElementById("wind-effect");

  const modeColors = {
    "暖房": "#f44336",   // 赤
    "冷房": "#2196f3",   // 青
    "除湿": "#4caf50",   // 緑
    "送風": "#9e9e9e"    // グレー
  };

  wind.style.backgroundColor = modeColors[mode] || "gray";

  // 例：JSONなどに保存する場合
  // saveAirconStatus({ mode, temperature: currentTemp });
}

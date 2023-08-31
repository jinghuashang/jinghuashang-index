const text = "构建中..."; // 要显示的文本
const delay = 300; // 每个字符之间的延迟时间（以毫秒为单位）
const repeatDelay = 200; // 打字效果结束后的延迟时间（以毫秒为单位）

let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("home-p").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, delay);
  } else {
    setTimeout(resetText, repeatDelay);
  }
}

function resetText() {
  document.getElementById("home-p").innerHTML = "";
  index = 0;
  typeWriter();
}

typeWriter();

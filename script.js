const expInput = document.getElementById("expression");
const resultBox = document.getElementById("result");

document.querySelectorAll("button").forEach(btn => {
  if(!["=", "C"].includes(btn.id)) {
    btn.addEventListener("click", () => {
      expInput.value += btn.textContent;
    });
  }
});

document.getElementById("clear").onclick = () => {
  expInput.value = "";
  resultBox.textContent = "";
};

document.getElementById("eval").onclick = () => {
  try {
    const expr = expInput.value
      .replace(/pi/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/\^/g, "**")
      .replace(/sqrt/g, "Math.sqrt")
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan");

    let ans = eval(expr);
    if(!isFinite(ans)) throw "Math Error";
    resultBox.textContent = ans.toFixed(4);
  } catch (e) {
    resultBox.textContent = "Invalid Expression";
  }
};

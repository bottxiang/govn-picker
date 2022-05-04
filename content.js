//TODO 悬浮按钮
// var btn = document.createElement("button");
// btn.innerHTML = "Search";
// btn.addEventListener("click", function () {
//   var selection = window.getSelection().toString();
//   chrome.runtime.sendMessage({
//     title: document.title,
//     url: window.location.href,
//     text: selection,
//   });
// });
// document.body.appendChild(btn);

document.addEventListener("keydown", (e) => {
  //console.log(e);
  if ((e.ctrlKey || e.key=='Meta') && e.key === 'd') {
    console.log("Ctrl/Command+d");
    var selection = window.getSelection().toString();
    chrome.runtime.sendMessage({
      title: document.title,
      url: window.location.href,
      text: selection,
    });
  }
});
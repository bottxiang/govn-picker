// background.js

// chrome.commands.onCommand.addListener(async (command) => {
//   console.log(`Command: ${command}`);
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: () => {
//         chrome.windows.getCurrent((window) => {
//           console.log(window.getSelection().toString());
//           return window.getSelection().toString();
//         });
//       }
//     },
//     (injectionResults) => {
//       // console.log(window.getSelection().toString());
//       for (const frameResult of injectionResults) {
//         // document.getElementById("output").innerHTML =
//         //   "select: " + frameResult.result;
//         console.log(frameResult.result);
//         chrome.tabs.create({
//           url: "https://d.woohsi.top/vi-zh/" + frameResult.result,
//         });
//       }
//     }
//   );
// });

chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
  // Inject the content script into the current page 
  chrome.scripting.executeScript({
    target: { tabId: tab[0].id, allFrames: true },
    files: ["content.js"],
  });
});
// Perform the callback when a message is received from the content script
chrome.runtime.onMessage.addListener(function(message)  {
  // Call the callback function
  console.log(message.text);
  chrome.tabs.create({
    url: "https://d.woohsi.top/vi-zh/" + message.text,
  });
});
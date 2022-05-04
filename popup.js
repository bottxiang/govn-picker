// Initialize button with user's preferred color
let searchButton = document.getElementById("searchButton");

// When the button is clicked, inject setPageBackgroundColor into current page
searchButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: () => window.getSelection().toString(),
    },
    (injectionResults) => {
      for (const frameResult of injectionResults) {
        document.getElementById("readme").innerHTML =
          "select: " + frameResult.result;
        chrome.tabs.create({
          url: "https://d.woohsi.top/vi-zh/" + frameResult.result,
        });
      }
    }
  );
});
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id,
        {
            message: "copyText",
            textToCopy: "some text"
        }, function (response) { })
})
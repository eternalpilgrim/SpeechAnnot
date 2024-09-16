chrome.runtime.onMessage.addListener((record_text) => {
	navigator.clipboard.writeText(record_text);
});


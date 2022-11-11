chrome.runtime.onMessage.addListener((record_text) => {
  //console.log("Message from the background script:");
  //console.log(record_text);
	let input_in_focus = document.querySelector('input:focus');
	input_in_focus.value += record_text+" ";
});


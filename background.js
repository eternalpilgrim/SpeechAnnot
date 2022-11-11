// при получении сообщения от скрипта микрофона отправляем сообщение контент-скрипту,
function handleMessage(request, sender, sendResponse) {
  chrome.tabs.query({active: true, currentWindow: true}, 
		function (arrayOfTabs) { 
			//console.log(arrayOfTabs[0].url); 
			chrome.tabs.sendMessage(arrayOfTabs[0].id,request);
		});
}
chrome.runtime.onMessage.addListener(handleMessage);

// при запуске расширения открываем страницу расширения,
// которая будет слушать микрофон
chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.create({url: chrome.runtime.getURL("mic_permission.html")});
});
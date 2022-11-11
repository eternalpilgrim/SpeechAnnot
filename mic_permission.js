var recognizing_in_process = false;
var recognition;

function window_load(){
	console.log("window load");
	const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

	recognition = new SpeechRecognition();

	recognition.continuous = false;
	recognition.lang = 'ru-RU';
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;

	recognition.onstart = () => {
		recognizing_in_process = true;
	}

	recognition.onerror = ({ error }) => {
		console.error(error)
	}

	recognition.onend = () => {
		recognizing_in_process = false;
		recognition.start()
	}

	recognition.onresult = (e) => {
		console.log(e.results[0][0].transcript.toLowerCase());
		// отправляем полученный текст бэкграунд-скрипту
		chrome.runtime.sendMessage(e.results[0][0].transcript.toLowerCase());
	}
  
  recognition.start();
}

window.addEventListener('load', window_load);

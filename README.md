# SpeechAnnot
Расширение для хрома позволяющее преобразовывать речь в текст и вводить его в любом поле ввода

Бэкграунд скрипт запускает скрипт микрофона. Скрипт микрофона слушает речь и переводит её в текст с помощью Web Speech API. 
Полученный текст передаётся бэкграунд скрипту. А он уже передает текст контент скрипту. Контент скрипт вставляет текст в активное поле ввода. 

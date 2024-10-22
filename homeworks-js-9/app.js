// Создаем инпут для ввода имени
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'username');
input.setAttribute('placeholder', 'Ваше имя');

// Создаем элемент <p> для отображения приветствия
const greeting = document.createElement('p');
greeting.setAttribute('id', 'greeting');
greeting.textContent = 'Привет, !';

// Добавляем инпут и <p> в body
document.body.appendChild(input);
document.body.appendChild(greeting);

// Добавляем обработчик события для инпута
input.addEventListener('input', function() {
    const name = input.value;
    greeting.textContent = name ? `Привет, ${name}! ` : 'Привет, !';

});
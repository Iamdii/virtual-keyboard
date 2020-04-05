window.onload = function () {
  const body = document.querySelector('body');
  const wrapper = '<div class="wrapper"></div>';
  const textarea = '<textarea class="input" rows="15" cols="65"></textarea>';
  const keyboardElement = '<div class="keyboard"></div>';

  body.insertAdjacentHTML('afterbegin', wrapper);
  document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', textarea);
  document.querySelector('.input').insertAdjacentHTML('afterend', keyboardElement);

  const keys = [
    [{
      en: { low: '`', up: '~' }, ru: { low: 'ё', up: 'Ё' }, class: 'key', name: 'tilde',
    },
    {
      en: { low: '1', up: '!' }, ru: { low: '1', up: '!' }, class: 'key', name: 'symbol1',
    },
    {
      en: { low: '2', up: '@' }, ru: { low: '2', up: '"' }, class: 'key', name: 'symbol2',
    },
    {
      en: { low: '3', up: '#' }, ru: { low: '3', up: '№' }, class: 'key', name: 'symbol3',
    },
    {
      en: { low: '4', up: '$' }, ru: { low: '4', up: ';' }, class: 'key', name: 'symbol4',
    },
    {
      en: { low: '5', up: '%' }, ru: { low: '5', up: '%' }, class: 'key', name: 'symbol5',
    },
    {
      en: { low: '6', up: '^' }, ru: { low: '6', up: ':' }, class: 'key', name: 'symbol6',
    },
    {
      en: { low: '7', up: '&' }, ru: { low: '7', up: '?' }, class: 'key', name: 'symbol7',
    },
    {
      en: { low: '8', up: '*' }, ru: { low: '8', up: '*' }, class: 'key', name: 'symbol8',
    },
    {
      en: { low: '9', up: '(' }, ru: { low: '9', up: '(' }, class: 'key', name: 'symbol9',
    },
    {
      en: { low: '0', up: ')' }, ru: { low: '0', up: ')' }, class: 'key', name: 'symbol0',
    },
    {
      en: { low: '-', up: '_' }, ru: { low: '-', up: '_' }, class: 'key', name: 'Minus',
    },
    {
      en: { low: '=', up: '+' }, ru: { low: '=', up: '+' }, class: 'key', name: 'Equal',
    },
    {
      en: { low: 'Backspace', up: 'Backspace' }, ru: { low: 'Backspace', up: 'Backspace' }, class: 'key backspace', name: 'Backspace',
    }],
    [{
      en: { low: 'Tab', up: 'Tab' }, ru: { low: 'Tab', up: 'Tab' }, class: 'key tab', name: 'Tab',
    },
    {
      en: { low: 'q', up: 'Q' }, ru: { low: 'й', up: 'Й' }, class: 'key', name: 'CharQ',
    },
    {
      en: { low: 'w', up: 'W' }, ru: { low: 'ц', up: 'Ц' }, class: 'key', name: 'CharW',
    },
    {
      en: { low: 'e', up: 'E' }, ru: { low: 'у', up: 'У' }, class: 'key', name: 'CharE',
    },
    {
      en: { low: 'r', up: 'R' }, ru: { low: 'к', up: 'К' }, class: 'key', name: 'CharR',
    },
    {
      en: { low: 't', up: 'T' }, ru: { low: 'е', up: 'Е' }, class: 'key', name: 'CharT',
    },
    {
      en: { low: 'y', up: 'Y' }, ru: { low: 'н', up: 'Н' }, class: 'key', name: 'CharY',
    },
    {
      en: { low: 'u', up: 'U' }, ru: { low: 'г', up: 'Г' }, class: 'key', name: 'CharU',
    },
    {
      en: { low: 'i', up: 'I' }, ru: { low: 'ш', up: 'Ш' }, class: 'key', name: 'CharI',
    },
    {
      en: { low: 'o', up: 'O' }, ru: { low: 'щ', up: 'Щ' }, class: 'key', name: 'CharO',
    },
    {
      en: { low: 'p', up: 'P' }, ru: { low: 'з', up: 'З' }, class: 'key', name: 'CharP',
    },
    {
      en: { low: '[', up: '{' }, ru: { low: 'х', up: 'Х' }, class: 'key', name: 'OpenSquareBracket',
    },
    {
      en: { low: ']', up: '}' }, ru: { low: 'ъ', up: 'Ъ' }, class: 'key', name: 'CloseSquareBracket',
    },
    {
      en: { low: '\\', up: '|' }, ru: { low: '\\', up: '/' }, class: 'key', name: 'Backslash',
    }],
    [{
      en: { low: 'Capslock', up: 'Capslock' }, ru: { low: 'Capslock', up: 'Capslock' }, class: 'key capslock', name: 'Capslock',
    },
    {
      en: { low: 'a', up: 'A' }, ru: { low: 'ф', up: 'Ф' }, class: 'key', name: 'CharA',
    },
    {
      en: { low: 's', up: 'S' }, ru: { low: 'ы', up: 'Ы' }, class: 'key', name: 'CharS',
    },
    {
      en: { low: 'd', up: 'D' }, ru: { low: 'в', up: 'В' }, class: 'key', name: 'CharD',
    },
    {
      en: { low: 'f', up: 'F' }, ru: { low: 'а', up: 'А' }, class: 'key', name: 'CharF',
    },
    {
      en: { low: 'g', up: 'G' }, ru: { low: 'п', up: 'П' }, class: 'key', name: 'CharG',
    },
    {
      en: { low: 'h', up: 'H' }, ru: { low: 'р', up: 'Р' }, class: 'key', name: 'CharH',
    },
    {
      en: { low: 'j', up: 'J' }, ru: { low: 'о', up: 'О' }, class: 'key', name: 'CharJ',
    },
    {
      en: { low: 'k', up: 'K' }, ru: { low: 'л', up: 'Л' }, class: 'key', name: 'CharK',
    },
    {
      en: { low: 'l', up: 'L' }, ru: { low: 'д', up: 'Д' }, class: 'key', name: 'CharL',
    },
    {
      en: { low: ';', up: ':' }, ru: { low: 'ж', up: 'Ж' }, class: 'key', name: 'Semicolon',
    },
    {
      en: { low: '\'', up: '"' }, ru: { low: 'э', up: 'Э' }, class: 'key', name: 'Quote',
    },
    {
      en: { low: 'Enter', up: 'Enter' }, ru: { low: 'Enter', up: 'Enter' }, class: 'key enter', name: 'Enter',
    }],
    [{
      en: { low: 'Shift', up: 'Shift' }, ru: { low: 'Shift', up: 'Shift' }, class: 'key shift', name: 'LeftShift',
    },
    {
      en: { low: 'z', up: 'Z' }, ru: { low: 'ф', up: 'Ф' }, class: 'key', name: 'CharZ',
    },
    {
      en: { low: 'x', up: 'X' }, ru: { low: 'ы', up: 'Ы' }, class: 'key', name: 'CharX',
    },
    {
      en: { low: 'c', up: 'C' }, ru: { low: 'в', up: 'В' }, class: 'key', name: 'CharC',
    },
    {
      en: { low: 'v', up: 'V' }, ru: { low: 'а', up: 'А' }, class: 'key', name: 'CharV',
    },
    {
      en: { low: 'b', up: 'B' }, ru: { low: 'п', up: 'П' }, class: 'key', name: 'CharB',
    },
    {
      en: { low: 'n', up: 'N' }, ru: { low: 'р', up: 'Р' }, class: 'key', name: 'CharN',
    },
    {
      en: { low: 'm', up: 'M' }, ru: { low: 'о', up: 'О' }, class: 'key', name: 'CharM',
    },
    {
      en: { low: ',', up: '<' }, ru: { low: 'л', up: 'Л' }, class: 'key', name: 'Comma',
    },
    {
      en: { low: '.', up: '>' }, ru: { low: 'д', up: 'Д' }, class: 'key', name: 'Dot',
    },
    {
      en: { low: '/', up: '?' }, ru: { low: 'ж', up: 'Ж' }, class: 'key', name: 'Slash',
    },
    {
      en: { low: '↑', up: '↑' }, ru: { low: '↑', up: '↑' }, class: 'key', name: 'UpArrow',
    },
    {
      en: { low: 'Shift', up: 'Shift' }, ru: { low: 'Shift', up: 'Shift' }, class: 'key shift', name: 'RightShift',
    }],
    [{
      en: { low: 'Ctrl', up: 'Ctrl' }, ru: { low: 'Ctrl', up: 'Ctrl' }, class: 'key ctrl', name: 'LeftCtrl',
    },
    {
      en: { low: 'Win', up: 'Win' }, ru: { low: 'Win', up: 'Win' }, class: 'key win', name: 'Win',
    },
    {
      en: { low: 'Alt', up: 'Alt' }, ru: { low: 'Alt', up: 'Alt' }, class: 'key alt', name: 'Alt',
    },
    {
      en: { low: 'Space', up: 'Space' }, ru: { low: 'Space', up: 'Space' }, class: 'key space', name: 'Space',
    },
    {
      en: { low: 'Alt', up: 'Alt' }, ru: { low: 'Alt', up: 'Alt' }, class: 'key alt', name: 'Alt',
    },
    {
      en: { low: 'Ctrl', up: 'Ctrl' }, ru: { low: 'Ctrl', up: 'Ctrl' }, class: 'key ctrl', name: 'RightCtrl',
    },
    {
      en: { low: '←', up: '←' }, ru: { low: '←', up: '←' }, class: 'key', name: 'LeftArrow',
    },
    {
      en: { low: '↓', up: '↓' }, ru: { low: '↓', up: '↓' }, class: 'key', name: 'DownArrow',
    },
    {
      en: { low: '→', up: '→' }, ru: { low: '→', up: '→' }, class: 'key', name: 'RightArrow',
    }]];

  const keyboard = document.querySelector('.keyboard');

  let currentLanguage = 'en';

  keyboard.innerHTML = keys.map((line) => `
      <div class="keyboard-line">${line.map((char) => `
        <span id="${char.name}" class="${char.class}">${char.en.low}</span> 
      `).join('')}      
      </div>
    `).join('');

  const description = '<p class="keyboard-description">Keyboard is written on <span class="OS-word">Windows</span></p><p class="keyboard-description">For language switch: left Shift + Alt</p>';
  body.insertAdjacentHTML('beforeend', description);

  function changeLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
  }

  function changeChars(language, register) {
    keys.forEach((line) => line.forEach((char) => {
      document.querySelector(`#${char.name}`).innerHTML = char[language][register];
    }));
  }

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Alt') {
      event.preventDefault();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey && (event.code === 'ShiftLeft' || event.code === 'AltLeft')) {
      changeLanguage();
      changeChars(currentLanguage, 'low');
    }
  });
};

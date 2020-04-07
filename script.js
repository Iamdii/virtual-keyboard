window.onload = () => {
  const body = document.querySelector('body');
  const wrapper = '<div class="wrapper"></div>';
  const textareaElement = '<textarea class="input" rows="15" cols="65" autofocus></textarea>';
  const keyboardElement = '<div class="keyboard"></div>';
  const description = '<p class="keyboard-description">Keyboard is written on <span class="OS-word">Windows</span></p><p class="keyboard-description">For language switch: left Shift + Alt</p>';
  const langLocalStorage = 'language';

  body.insertAdjacentHTML('afterbegin', wrapper);
  document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', textareaElement);
  document.querySelector('.input').insertAdjacentHTML('afterend', keyboardElement);
  const keyboard = document.querySelector('.keyboard');
  const textarea = document.querySelector('.input');

  const keys = [
    [{
      en: { default: '`', shift: '~' }, ru: { low: 'ё', up: 'Ё' }, class: 'key', name: 'Backquote',
    },
    {
      en: { default: '1', shift: '!' }, ru: { default: '1', shift: '!' }, class: 'key', name: 'Digit1',
    },
    {
      en: { default: '2', shift: '@' }, ru: { default: '2', shift: '"' }, class: 'key', name: 'Digit2',
    },
    {
      en: { default: '3', shift: '#' }, ru: { default: '3', shift: '№' }, class: 'key', name: 'Digit3',
    },
    {
      en: { default: '4', shift: '$' }, ru: { default: '4', shift: ';' }, class: 'key', name: 'Digit4',
    },
    {
      en: { default: '5', shift: '%' }, ru: { default: '5', shift: '%' }, class: 'key', name: 'Digit5',
    },
    {
      en: { default: '6', shift: '^' }, ru: { default: '6', shift: ':' }, class: 'key', name: 'Digit6',
    },
    {
      en: { default: '7', shift: '&' }, ru: { default: '7', shift: '?' }, class: 'key', name: 'Digit7',
    },
    {
      en: { default: '8', shift: '*' }, ru: { default: '8', shift: '*' }, class: 'key', name: 'Digit8',
    },
    {
      en: { default: '9', shift: '(' }, ru: { default: '9', shift: '(' }, class: 'key', name: 'Digit9',
    },
    {
      en: { default: '0', shift: ')' }, ru: { default: '0', shift: ')' }, class: 'key', name: 'Digit0',
    },
    {
      en: { default: '-', shift: '_' }, ru: { default: '-', shift: '_' }, class: 'key', name: 'Minus',
    },
    {
      en: { default: '=', shift: '+' }, ru: { default: '=', shift: '+' }, class: 'key', name: 'Equal',
    },
    {
      en: { low: 'Backspace', up: 'Backspace' }, ru: { low: 'Backspace', up: 'Backspace' }, class: 'key backspace', name: 'Backspace',
    }],
    [{
      en: { low: 'Tab', up: 'Tab' }, ru: { low: 'Tab', up: 'Tab' }, class: 'key tab', name: 'Tab',
    },
    {
      en: { low: 'q', up: 'Q' }, ru: { low: 'й', up: 'Й' }, class: 'key', name: 'KeyQ',
    },
    {
      en: { low: 'w', up: 'W' }, ru: { low: 'ц', up: 'Ц' }, class: 'key', name: 'KeyW',
    },
    {
      en: { low: 'e', up: 'E' }, ru: { low: 'у', up: 'У' }, class: 'key', name: 'KeyE',
    },
    {
      en: { low: 'r', up: 'R' }, ru: { low: 'к', up: 'К' }, class: 'key', name: 'KeyR',
    },
    {
      en: { low: 't', up: 'T' }, ru: { low: 'е', up: 'Е' }, class: 'key', name: 'KeyT',
    },
    {
      en: { low: 'y', up: 'Y' }, ru: { low: 'н', up: 'Н' }, class: 'key', name: 'KeyY',
    },
    {
      en: { low: 'u', up: 'U' }, ru: { low: 'г', up: 'Г' }, class: 'key', name: 'KeyU',
    },
    {
      en: { low: 'i', up: 'I' }, ru: { low: 'ш', up: 'Ш' }, class: 'key', name: 'KeyI',
    },
    {
      en: { low: 'o', up: 'O' }, ru: { low: 'щ', up: 'Щ' }, class: 'key', name: 'KeyO',
    },
    {
      en: { low: 'p', up: 'P' }, ru: { low: 'з', up: 'З' }, class: 'key', name: 'KeyP',
    },
    {
      en: { default: '[', shift: '{' }, ru: { low: 'х', up: 'Х' }, class: 'key', name: 'BracketLeft',
    },
    {
      en: { default: ']', shift: '}' }, ru: { low: 'ъ', up: 'Ъ' }, class: 'key', name: 'BracketRight',
    },
    {
      en: { default: '\\', shift: '|' }, ru: { default: '\\', shift: '/' }, class: 'key', name: 'Backslash',
    }],
    [{
      en: { low: 'Capslock', up: 'Capslock' }, ru: { low: 'Capslock', up: 'Capslock' }, class: 'key capslock', name: 'CapsLock',
    },
    {
      en: { low: 'a', up: 'A' }, ru: { low: 'ф', up: 'Ф' }, class: 'key', name: 'KeyA',
    },
    {
      en: { low: 's', up: 'S' }, ru: { low: 'ы', up: 'Ы' }, class: 'key', name: 'KeyS',
    },
    {
      en: { low: 'd', up: 'D' }, ru: { low: 'в', up: 'В' }, class: 'key', name: 'KeyD',
    },
    {
      en: { low: 'f', up: 'F' }, ru: { low: 'а', up: 'А' }, class: 'key', name: 'KeyF',
    },
    {
      en: { low: 'g', up: 'G' }, ru: { low: 'п', up: 'П' }, class: 'key', name: 'KeyG',
    },
    {
      en: { low: 'h', up: 'H' }, ru: { low: 'р', up: 'Р' }, class: 'key', name: 'KeyH',
    },
    {
      en: { low: 'j', up: 'J' }, ru: { low: 'о', up: 'О' }, class: 'key', name: 'KeyJ',
    },
    {
      en: { low: 'k', up: 'K' }, ru: { low: 'л', up: 'Л' }, class: 'key', name: 'KeyK',
    },
    {
      en: { low: 'l', up: 'L' }, ru: { low: 'д', up: 'Д' }, class: 'key', name: 'KeyL',
    },
    {
      en: { default: ';', shift: ':' }, ru: { low: 'ж', up: 'Ж' }, class: 'key', name: 'Semicolon',
    },
    {
      en: { default: '\'', shift: '"' }, ru: { low: 'э', up: 'Э' }, class: 'key', name: 'Quote',
    },
    {
      en: { low: 'Enter', up: 'Enter' }, ru: { low: 'Enter', up: 'Enter' }, class: 'key enter', name: 'Enter',
    }],
    [{
      en: { low: 'Shift', up: 'Shift' }, ru: { low: 'Shift', up: 'Shift' }, class: 'key shift', name: 'ShiftLeft',
    },
    {
      en: { low: 'z', up: 'Z' }, ru: { low: 'я', up: 'Я' }, class: 'key', name: 'KeyZ',
    },
    {
      en: { low: 'x', up: 'X' }, ru: { low: 'ч', up: 'Ч' }, class: 'key', name: 'KeyX',
    },
    {
      en: { low: 'c', up: 'C' }, ru: { low: 'с', up: 'С' }, class: 'key', name: 'KeyC',
    },
    {
      en: { low: 'v', up: 'V' }, ru: { low: 'м', up: 'М' }, class: 'key', name: 'KeyV',
    },
    {
      en: { low: 'b', up: 'B' }, ru: { low: 'и', up: 'И' }, class: 'key', name: 'KeyB',
    },
    {
      en: { low: 'n', up: 'N' }, ru: { low: 'т', up: 'Т' }, class: 'key', name: 'KeyN',
    },
    {
      en: { low: 'm', up: 'M' }, ru: { low: 'ь', up: 'Ь' }, class: 'key', name: 'KeyM',
    },
    {
      en: { default: ',', shift: '<' }, ru: { low: 'б', up: 'Б' }, class: 'key', name: 'Comma',
    },
    {
      en: { default: '.', shift: '>' }, ru: { low: 'ю', up: 'Ю' }, class: 'key', name: 'Period',
    },
    {
      en: { default: '/', shift: '?' }, ru: { low: '.', up: ',' }, class: 'key', name: 'Slash',
    },
    {
      en: { low: '↑', up: '↑' }, ru: { low: '↑', up: '↑' }, class: 'key', name: 'ArrowUp',
    },
    {
      en: { low: 'Shift', up: 'Shift' }, ru: { low: 'Shift', up: 'Shift' }, class: 'key shift', name: 'ShiftRight',
    }],
    [{
      en: { low: 'Ctrl', up: 'Ctrl' }, ru: { low: 'Ctrl', up: 'Ctrl' }, class: 'key ctrl', name: 'ControlLeft',
    },
    {
      en: { low: 'Win', up: 'Win' }, ru: { low: 'Win', up: 'Win' }, class: 'key win', name: 'MetaLeft',
    },
    {
      en: { low: 'Alt', up: 'Alt' }, ru: { low: 'Alt', up: 'Alt' }, class: 'key alt', name: 'AltLeft',
    },
    {
      en: { low: 'Space', up: 'Space' }, ru: { low: 'Space', up: 'Space' }, class: 'key space', name: 'Space',
    },
    {
      en: { low: 'Alt', up: 'Alt' }, ru: { low: 'Alt', up: 'Alt' }, class: 'key alt', name: 'AltRight',
    },
    {
      en: { low: '←', up: '←' }, ru: { low: '←', up: '←' }, class: 'key', name: 'ArrowLeft',
    },
    {
      en: { low: '↓', up: '↓' }, ru: { low: '↓', up: '↓' }, class: 'key', name: 'ArrowDown',
    },
    {
      en: { low: '→', up: '→' }, ru: { low: '→', up: '→' }, class: 'key', name: 'ArrowRight',
    },
    {
      en: { low: 'Ctrl', up: 'Ctrl' }, ru: { low: 'Ctrl', up: 'Ctrl' }, class: 'key ctrl', name: 'ControlRight',
    }]];


  let language = localStorage.getItem(langLocalStorage) || 'en';
  let register = 'low';
  let optional = 'default';


  keyboard.innerHTML = keys.map((line) => `
      <div class="keyboard-line">${line.map((char) => `
        <span id="${char.name}" class="${char.class}">${char[language][register] || char[language][optional]}</span>
      `).join('')}      
      </div>
    `).join('');

  body.insertAdjacentHTML('beforeend', description);


  function changeChars() {
    keys.forEach((line) => line.forEach((char) => {
      document.querySelector(`#${char.name}`).innerHTML = char[language][register] || char[language][optional];
    }));
  }


  function changeLanguage() {
    language = language === 'en' ? 'ru' : 'en';
    localStorage.setItem(langLocalStorage, language);
    changeChars();
  }

  function pressCapsLock() {
    register = register === 'low' ? 'up' : 'low';
    changeChars();
  }

  function pressShift() {
    optional = optional === 'default' ? 'shift' : 'default';
    register = register === 'low' ? 'up' : 'low';
    changeChars();
  }

  function typeChar(char) {
    textarea.value += char;
  }

  function getCharByCode(code) {
    switch (code) {
      case 'Tab':
        return '    ';
      case 'Enter':
        return '\n';
      case 'Space':
        return ' ';
      default:
        return document.querySelector(`#${code}`).textContent;
    }
  }


  function performDownEvent(event, code) {
    event.preventDefault();

    if (code === '') return;

    document.querySelector(`#${code}`).classList.add('pressed');

    if (code === 'ControlLeft' || code === 'ControlRight' || code === 'AltLeft' || code === 'AltRight' || code === 'MetaLeft') return;

    if (code === 'CapsLock') {
      pressCapsLock();
      return;
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (!event.repeat) pressShift();
      return;
    }

    if (code === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
      return;
    }

    typeChar(getCharByCode(code));
  }

  function performUpEvent(event, code) {
    if (code === '') return;

    document.querySelector(`#${code}`).classList.remove('pressed');

    if (code === 'AltLeft' || code === 'AltRight') {
      event.preventDefault();
    }

    if ((event.shiftKey && code === 'AltLeft') || (event.altKey && code === 'ShiftLeft')) {
      changeLanguage();
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      pressShift();
    }
  }

  document.addEventListener('keydown', (event) => {
    performDownEvent(event, event.code);
  });

  document.addEventListener('keyup', (event) => {
    performUpEvent(event, event.code);
  });

  keyboard.addEventListener('mousedown', (event) => {
    performDownEvent(event, event.toElement.id);
  });

  keyboard.addEventListener('mouseup', (event) => {
    performUpEvent(event, event.toElement.id);
  });
};

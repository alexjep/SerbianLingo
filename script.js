// Данные уроков: только match и sentence
const lessonsData = {
  1: {
    theoryTitle: "Урок 1: Азбука и слова",
    theoryText:
      "В сербском языке есть правило: «Пиши как говоришь, читай как написано». Почти все буквы нам знакомы, но есть 6 особенных. Давай с ними познакомимся!",
    questions: [
      // 1. Наш интерактивный алфавит
      {
        type: "alphabet",
        title: "Особые буквы",
        subtitle:
          "Нажми на каждую букву, чтобы послушать её и увидеть пример. Кнопка «Дальше» появится, когда ты прослушаешь все!",
        letters: [
          {
            char: "Ч (Č)",
            sound: "че",
            word: "Чаша (Стакан)",
            wordSound: "Чаша",
          },
          {
            char: "Ћ (Ć)",
            sound: "ће",
            word: "Ћао (Привет/Пока)",
            wordSound: "Ћао",
          },
          {
            char: "Ш (Š)",
            sound: "ше",
            word: "Школа (Школа)",
            wordSound: "Школа",
          },
          {
            char: "Ж (Ž)",
            sound: "же",
            word: "Живот (Жизнь)",
            wordSound: "Живот",
          },
          {
            char: "Ђ (Đ)",
            sound: "ђе",
            word: "Ђоковић (Джокович)",
            wordSound: "Ђоковић",
          },
          {
            char: "Љ (Lj)",
            sound: "ље",
            word: "Љубав (Любовь)",
            wordSound: "Љубав",
          },
          {
            char: "Њ (Nj)",
            sound: "ње",
            word: "Његош (Негош)",
            wordSound: "Његош",
          },
          {
            char: "Џ (Dž)",
            sound: "џе",
            word: "Џемпер (Свитер)",
            wordSound: "Џемпер",
          },
        ],
      },
      // 2. Мэтчинг: Уникальная сербская кириллица
      {
        type: "match",
        pairs: { Кућа: "Дом", Књига: "Книга", Људи: "Люди", Џеп: "Карман" },
      },

      // 3. Мэтчинг: Латиница (гаевица) - заставляем читать новые символы
      {
        type: "match",
        pairs: { Čaj: "Чай", Škola: "Школа", Žena: "Женщина", Đus: "Сок" },
      },

      // 4. Мэтчинг: Вывески на латинице (то, что реально нужно на улице)
      {
        type: "match",
        pairs: {
          Menjačnica: "Обменник",
          Pošta: "Почта",
          Kafić: "Кафе",
          Ćevapi: "Чевапчичи",
        },
      },

      // 5. Закрепляем сборкой предложений (микс алфавитов)
      {
        type: "sentence",
        question: "Где находится обменник?",
        correctAnswer: "Gde je menjačnica",
        words: ["Gde", "je", "menjačnica", "pošta"],
      },
      {
        type: "sentence",
        question: "Чай и сок, пожалуйста",
        correctAnswer: "Чај и ђуc молим",
        words: ["Чај", "и", "ђуc", "молим", "кафа"],
      },
    ],
  },
  2: {
    theoryTitle: "Урок 2: Базовая вежливость",
    theoryText:
      "Разница между универсальным «Здраво» (Привет) и более вежливым «Добар дан» (Добрый день). Не забывай всегда говорить «хвала» (спасибо) и «молим» (пожалуйста).",
    questions: [
      {
        type: "match",
        pairs: {
          Здраво: "Привет",
          "Добар дан": "Добрый день",
          "Добро јутро": "Доброе утро",
          "Добро вече": "Добрый вечер",
        },
      },
      {
        type: "match",
        pairs: {
          Хвала: "Спасибо",
          Молим: "Пожалуйста",
          Извини: "Извини",
          Довиђења: "До свидания",
        },
      },
      {
        type: "match",
        pairs: { Да: "Да", Не: "Нет", Добро: "Хорошо", Лоше: "Плохо" },
      },
      {
        type: "sentence",
        question: "Добрый день, извините",
        correctAnswer: "Добар дан извини",
        words: ["Добар", "дан", "извини", "хвала"],
      },
      {
        type: "sentence",
        question: "Спасибо, до свидания",
        correctAnswer: "Хвала довиђења",
        words: ["Хвала", "довиђења", "здраво"],
      },
      {
        type: "sentence",
        question: "Да, спасибо",
        correctAnswer: "Да хвала",
        words: ["Да", "хвала", "не"],
      },
      {
        type: "sentence",
        question: "Нет, извини",
        correctAnswer: "Не извини",
        words: ["Не", "извини", "да"],
      },
    ],
  },
  3: {
    theoryTitle: "Урок 3: Вопросы и выживание",
    theoryText:
      "Вопросительные слова — ключ к общению. Также здесь мы учимся говорить, что мы чего-то не понимаем или не знаем. Пока запоминай это просто как готовые фразы-выручалочки!",
    questions: [
      {
        type: "match",
        pairs: { Шта: "Что", Ко: "Кто", Где: "Где", Како: "Как" },
      },
      {
        type: "match",
        pairs: {
          Разумем: "Понимаю",
          "Не разумем": "Не понимаю",
          Знам: "Знаю",
          "Не знам": "Не знаю",
        },
      },
      {
        type: "match",
        pairs: {
          Српски: "Сербский",
          Руски: "Русский",
          Енглески: "Английский",
          Језик: "Язык",
        },
      },
      {
        type: "sentence",
        question: "Я не понимаю",
        correctAnswer: "Ја не разумем",
        words: ["Ја", "не", "разумем", "шта"],
      },
      {
        type: "sentence",
        question: "Я не знаю",
        correctAnswer: "Ја не знам",
        words: ["Ја", "не", "знам", "ко"],
      },
      {
        type: "sentence",
        question: "Сербский язык",
        correctAnswer: "Српски језик",
        words: ["Српски", "језик", "руски"],
      },
      {
        type: "sentence",
        question: "Говорю по-русски",
        correctAnswer: "Говорим руски",
        words: ["Говорим", "руски", "енглески"],
      },
    ],
  },
};

// Определяем текущий урок по параметру ?level= в URL
const urlParams = new URLSearchParams(window.location.search);
const currentLessonId = urlParams.get("level") || "1";

// Делаем копию массива вопросов, чтобы push не трогал оригинальные данные урока
let lessonData = lessonsData[currentLessonId] || lessonsData["1"];
let questions = [...lessonData.questions];

// Служебные переменные для текущего прохождения
let currentQuestionIndex = 0;
let correctCount = 0;
let targetCount = questions.length; // цель для прохождения (по исходному набору)

let currentQuestionType = "";
let sentenceChecked = false;
let sentenceAnswerContainer = null;
let selectedLeftTile = null;
let selectedRightTile = null;
let hasMatchError = false;

const wordDiv = document.getElementById("word");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const lessonContainer = document.getElementById("lesson-container");
const congratsDiv = document.getElementById("congrats");
const restartBtn = document.getElementById("restartBtn");
const backToMapBtn = document.getElementById("backToMapBtn");
const closeLessonBtn = document.getElementById("close-lesson");

// Элементы теории
const theoryStartScreen = document.getElementById("theory-start-screen");
const theoryStartTitle = document.getElementById("theory-start-title");
const theoryStartText = document.getElementById("theory-start-text");
const startLessonBtn = document.getElementById("start-lesson-btn");

const theoryHintBtn = document.getElementById("theory-hint-btn");
const theoryModal = document.getElementById("theory-modal");
const theoryModalText = document.getElementById("theory-modal-text");
const closeModalBtn = document.getElementById("close-modal-btn");

// Функция транслитерации (только для робота-диктора)
function cyrillicToLatin(text) {
  const mapping = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    ђ: "đ",
    е: "e",
    ж: "ž",
    з: "z",
    и: "i",
    ј: "j",
    к: "k",
    л: "l",
    љ: "lj",
    м: "m",
    н: "n",
    њ: "nj",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    ћ: "ć",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "č",
    џ: "dž",
    ш: "š",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Ђ: "Đ",
    Е: "E",
    Ж: "Ž",
    З: "Z",
    И: "I",
    Ј: "J",
    К: "K",
    Л: "L",
    Љ: "Lj",
    М: "M",
    Н: "N",
    Њ: "Nj",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    Ћ: "Ć",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Č",
    Џ: "Dž",
    Ш: "Š",
  };
  return text
    .split("")
    .map((char) => mapping[char] || char)
    .join("");
}

// Умная функция озвучки
function speakSerbian(text) {
  // 1. Останавливаем всё, что звучит сейчас
  window.speechSynthesis.cancel();

  // 2. Магия транслитерации (если текст на кириллице)
  const latinText = cyrillicToLatin(text);
  const utterance = new SpeechSynthesisUtterance(latinText);

  // 3. Выбираем язык
  utterance.lang = "hr-HR";
  utterance.rate = 0.9;

  // 4. Важный фикс: получаем голоса
  let voices = window.speechSynthesis.getVoices();

  // Если голосов нет (баг некоторых браузеров), просто пробуем произнести стандартным
  if (voices.length > 0) {
    const balkanVoice = voices.find(
      (v) =>
        v.lang.includes("hr") || v.lang.includes("sr") || v.lang.includes("bs"),
    );
    if (balkanVoice) utterance.voice = balkanVoice;
  }

  // 5. Запуск
  window.speechSynthesis.speak(utterance);
}

function setNextButtonDisabled(label) {
  nextBtn.disabled = true;
  nextBtn.textContent = label;
  nextBtn.className =
    "w-full py-4 text-lg rounded-xl font-semibold shadow-lg transition focus:outline-none bg-gray-300 text-gray-500 cursor-not-allowed opacity-50";
}

function setNextButtonEnabled(label) {
  nextBtn.disabled = false;
  nextBtn.textContent = label;
  nextBtn.className =
    "w-full py-4 text-lg rounded-xl font-semibold shadow-lg transition focus:outline-none bg-blue-500 text-white hover:bg-blue-600 cursor-pointer opacity-100";
}

function updateProgress() {
  const percent = Math.round((correctCount / targetCount) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = percent + "%";
}

function showQuestion() {
  updateProgress();
  if (currentQuestionIndex >= questions.length) {
    return;
  }

  sentenceChecked = false;
  sentenceAnswerContainer = null;
  selectedLeftTile = null;
  selectedRightTile = null;
  hasMatchError = false;

  nextBtn.dataset.correct = "";

  const question = questions[currentQuestionIndex];
  currentQuestionType = question.type;

  optionsDiv.innerHTML = "";

  if (currentQuestionType === "sentence") {
    // Для sentence по умолчанию показываем неактивную кнопку "Проверить"
    setNextButtonDisabled("Проверить");
    renderSentenceQuestion(question);
  } else if (currentQuestionType === "match") {
    // Для match по умолчанию показываем неактивную кнопку "Дальше"
    setNextButtonDisabled("Дальше");
    renderMatchQuestion(question);
  } else if (currentQuestionType === "alphabet") {
    // ДОБАВЛЯЕМ НАШ НОВЫЙ ТИП: по умолчанию кнопка "Дальше" неактивна
    setNextButtonDisabled("Дальше");
    renderAlphabetQuestion(question);
  } else {
    console.warn("Неизвестный тип задания:", currentQuestionType, question);
  }
}

function renderSentenceQuestion(question) {
  // Показываем русский текст задания
  wordDiv.textContent = question.question;

  // Контейнер ответа (сборка предложения)
  optionsDiv.className = "w-full flex flex-col";
  const answerContainer = document.createElement("div");
  answerContainer.className =
    "w-full mb-4 p-3 rounded-xl border border-dashed border-gray-300 bg-slate-50 flex flex-wrap gap-2 items-center transition-colors";
  answerContainer.setAttribute("data-role", "sentence-answer");

  const placeholder = document.createElement("span");
  placeholder.textContent = "Соберите предложение из слов ниже";
  placeholder.className = "text-sm text-gray-400 select-none";
  placeholder.setAttribute("data-role", "sentence-placeholder");
  answerContainer.appendChild(placeholder);

  // Контейнер со словами
  const wordsContainer = document.createElement("div");
  wordsContainer.className = "flex flex-wrap gap-2 w-full justify-center";

  // Создаём копию массива, чтобы не испортить оригинал, и перемешиваем её
  const shuffledWords = [...question.words];
  shuffleArray(shuffledWords);

  // Теперь создаём кнопки, используя перемешанный список
  shuffledWords.forEach((word) => {
    const btn = createSentenceWordButton(word, answerContainer, wordsContainer);
    wordsContainer.appendChild(btn);
  });

  optionsDiv.appendChild(answerContainer);
  optionsDiv.appendChild(wordsContainer);

  sentenceAnswerContainer = answerContainer;
  updateSentenceUI();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function renderMatchQuestion(question) {
  const pairs = question.pairs || {};

  // Можно показать пояснение над сеткой
  wordDiv.textContent = "Найдите пары слов";

  optionsDiv.innerHTML = "";
  optionsDiv.className = "grid grid-cols-2 gap-8 w-full";

  const serbianWords = Object.keys(pairs);
  const russianWords = Object.values(pairs);

  shuffleArray(serbianWords);
  shuffleArray(russianWords);

  const leftCol = document.createElement("div");
  leftCol.className = "flex flex-col gap-3";

  const rightCol = document.createElement("div");
  rightCol.className = "flex flex-col gap-3";

  russianWords.forEach((word) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = word;
    btn.className =
      "match-tile w-full py-3 text-lg rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 transition select-none";
    btn.disabled = false;
    btn.setAttribute("data-role", "match-tile");
    btn.setAttribute("data-side", "left");

    btn.addEventListener("click", () => handleMatchTileClick(btn, pairs));
    leftCol.appendChild(btn);
  });

  serbianWords.forEach((word) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = word;
    btn.className =
      "match-tile w-full py-3 text-lg rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 transition select-none";
    btn.disabled = false;
    btn.setAttribute("data-role", "match-tile");
    btn.setAttribute("data-side", "right");

    // Наш обновленный клик с озвучкой
    btn.addEventListener("click", () => {
      // 1. Озвучиваем слово в любом случае!
      speakSerbian(btn.textContent);

      // 2. Если карточка уже разгадана (зеленая), прерываем игровую логику,
      // чтобы она не пыталась снова искать себе пару
      if (btn.dataset.matched === "true") return;

      handleMatchTileClick(btn, pairs);
    });
    rightCol.appendChild(btn);
  });

  optionsDiv.appendChild(leftCol);
  optionsDiv.appendChild(rightCol);

  // Кнопка "Дальше" уже показана, но пока неактивна.
  setNextButtonDisabled("Дальше");
}

function renderAlphabetQuestion(question) {
  // 1. Используем твои глобальные переменные!
  optionsDiv.innerHTML = "";
  optionsDiv.className = "flex justify-center w-full"; // Сбрасываем стили сетки от мэтчинга

  // 2. Используем wordDiv для заголовка
  wordDiv.textContent = question.title;

  // Контейнер для нашего интерактива
  const alphabetContainer = document.createElement("div");
  alphabetContainer.className = "flex flex-col items-center gap-6 w-full";

  // Подзаголовок
  const subtitle = document.createElement("p");
  subtitle.className = "text-gray-500 text-center mb-4";
  subtitle.textContent = question.subtitle;
  alphabetContainer.appendChild(subtitle);

  // ... дальше оставляй всё как было (начиная со строк про grid и wordDisplay)
  const grid = document.createElement("div");
  grid.className = "grid grid-cols-2 gap-4 w-full max-w-sm";

  // Блок для показа примера слова (изначально пустой)
  const wordDisplay = document.createElement("div");
  wordDisplay.className =
    "h-16 flex items-center justify-center text-xl font-bold text-blue-600 w-full bg-blue-50 rounded-xl transition-all";
  wordDisplay.textContent = "👆 Нажми на букву";

  let clickedLetters = 0; // Считаем, сколько букв пользователь послушал

  // Создаем кнопки для каждой буквы
  question.letters.forEach((item) => {
    const btn = document.createElement("button");
    btn.className =
      "h-16 text-xl font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm";
    btn.textContent = item.char;

    btn.addEventListener("click", () => {
      // Озвучиваем букву, делаем небольшую паузу и озвучиваем слово
      speakSerbian(item.sound);
      setTimeout(() => speakSerbian(item.wordSound), 800);

      // Показываем пример на экране
      wordDisplay.textContent = item.word;

      // Красим кнопку, чтобы было видно, что ее уже нажимали
      if (!btn.classList.contains("border-green-400")) {
        btn.classList.add("border-green-400", "bg-green-50", "text-green-700");
        clickedLetters++;

        // Если прокликали все 6 букв — включаем кнопку "Дальше"
        if (clickedLetters === question.letters.length) {
          correctCount++;

          nextBtn.disabled = false;
          nextBtn.classList.remove(
            "bg-gray-300",
            "text-gray-500",
            "cursor-not-allowed",
            "opacity-50",
          );
          nextBtn.classList.add(
            "bg-blue-500",
            "text-white",
            "hover:bg-blue-600",
            "cursor-pointer",
            "opacity-100",
          );
        }
      }
    });
    grid.appendChild(btn);
  });

  alphabetContainer.appendChild(grid);
  alphabetContainer.appendChild(wordDisplay);
  optionsDiv.appendChild(alphabetContainer);
}

function handleMatchTileClick(tile, pairs) {
  if (tile.disabled) return;

  const side = tile.getAttribute("data-side");
  const isLeft = side === "left";

  const clearSelectionClasses = (el) => {
    if (!el) return;
    el.classList.remove("ring-2", "ring-blue-400", "bg-blue-50");
  };

  const applySelectionClasses = (el) => {
    el.classList.add("ring-2", "ring-blue-400", "bg-blue-50");
  };

  if (isLeft) {
    // повторный клик по той же левой плитке
    if (selectedLeftTile === tile) {
      clearSelectionClasses(tile);
      selectedLeftTile = null;
    } else {
      clearSelectionClasses(selectedLeftTile);
      selectedLeftTile = tile;
      applySelectionClasses(tile);
    }
  } else {
    // правая колонка
    if (selectedRightTile === tile) {
      clearSelectionClasses(tile);
      selectedRightTile = null;
    } else {
      clearSelectionClasses(selectedRightTile);
      selectedRightTile = tile;
      applySelectionClasses(tile);
    }
  }

  // Проверяем пару только если выбрано по одному слову с каждой стороны
  if (!selectedLeftTile || !selectedRightTile) {
    return;
  }

  const left = selectedLeftTile;
  const right = selectedRightTile;

  selectedLeftTile = null;
  selectedRightTile = null;

  clearSelectionClasses(left);
  clearSelectionClasses(right);

  const leftWord = left.textContent.trim();
  const rightWord = right.textContent.trim();

  // В pairs ключи — сербские, значения — русские
  const isPair = pairs[rightWord] === leftWord;

  if (isPair) {
    left.dataset.matched = "true";
    right.dataset.matched = "true";
    const applySuccess = (el) => {
      el.classList.remove("hover:bg-gray-50");
      el.classList.add("bg-green-100", "border-green-500", "text-green-700");
    };
    applySuccess(left);
    applySuccess(right);

    // Проверяем, все ли пары найдены
    const tiles = optionsDiv.querySelectorAll('[data-role="match-tile"]');
    const allMatched = Array.from(tiles).every(
      (t) => t.dataset.matched === "true",
    );
    if (allMatched) {
      // 1. Делаем кнопку активной
      nextBtn.disabled = false;

      // 2. Убираем серые "сонные" цвета
      nextBtn.classList.remove(
        "bg-gray-300",
        "text-gray-500",
        "cursor-not-allowed",
        "opacity-50",
      );

      // 3. Добавляем яркие "боевые" цвета
      nextBtn.classList.add(
        "bg-blue-500",
        "text-white",
        "hover:bg-blue-600",
        "cursor-pointer",
        "opacity-100",
      );

      // 4. Меняем текст (на всякий случай)
      nextBtn.textContent = "Дальше";
    }
  } else {
    hasMatchError = true;

    const applyErrorClasses = (el) => {
      el.classList.add("bg-red-500", "text-white", "border-red-500");
    };
    const clearErrorClasses = (el) => {
      el.classList.remove("bg-red-500", "text-white", "border-red-500");
    };

    applyErrorClasses(left);
    applyErrorClasses(right);

    setTimeout(() => {
      clearErrorClasses(left);
      clearErrorClasses(right);
    }, 500);
  }
}

function createSentenceWordButton(word, answerContainer, wordsContainer) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = word;
  btn.className =
    "px-3 py-2 bg-white rounded-full border border-gray-200 text-gray-800 text-sm sm:text-base shadow-sm hover:bg-gray-50 active:bg-gray-100 transition select-none";

  btn.addEventListener("click", () => {
    speakSerbian(btn.textContent);
    if (btn.parentElement === wordsContainer) {
      answerContainer.appendChild(btn);
    } else {
      wordsContainer.appendChild(btn);
    }
    updateSentenceUI();
  });

  return btn;
}

function updateSentenceUI() {
  if (!sentenceAnswerContainer) return;

  const wordButtons = sentenceAnswerContainer.querySelectorAll("button");
  const hasWords = wordButtons.length > 0;

  const placeholder = sentenceAnswerContainer.querySelector(
    '[data-role="sentence-placeholder"]',
  );
  if (placeholder) {
    if (hasWords) {
      placeholder.classList.add("hidden");
    } else {
      placeholder.classList.remove("hidden");
    }
  }

  if (!sentenceChecked) {
    // Кнопка "Проверить" активируется только когда есть хоть одно слово
    if (hasWords) {
      setNextButtonEnabled("Проверить");
    } else {
      setNextButtonDisabled("Проверить");
    }
  }
}

function checkSentenceAnswer(question) {
  if (!sentenceAnswerContainer) return;

  const userAnswer = Array.from(
    sentenceAnswerContainer.querySelectorAll("button"),
  )
    .map((b) => b.textContent.trim())
    .join(" ");

  const isCorrect = userAnswer === question.correctAnswer;

  sentenceAnswerContainer.classList.remove(
    "border-dashed",
    "border-gray-300",
    "bg-slate-50",
    "border-red-400",
    "bg-red-50",
    "border-green-400",
    "bg-green-50",
  );

  if (isCorrect) {
    speakSerbian(question.correctAnswer);
    sentenceAnswerContainer.classList.add("border-green-400", "bg-green-50");
  } else {
    sentenceAnswerContainer.classList.add("border-red-400", "bg-red-50");
  }

  nextBtn.dataset.correct = isCorrect ? "true" : "false";
  // После проверки меняем кнопку на активную "Дальше"
  setNextButtonEnabled("Дальше");
  sentenceChecked = true;
}

nextBtn.addEventListener("click", function () {
  const question = questions[currentQuestionIndex];

  // Для заданий на предложение первый клик — это "Проверить"
  if (currentQuestionType === "sentence" && !sentenceChecked) {
    checkSentenceAnswer(question);
    return;
  }

  if (currentQuestionType === "match") {
    // Для match задание считается пройденным,
    // как только пользователь собрал все пары
    correctCount++;
    currentQuestionIndex++;

    // Проверяем — завершён ли урок?
    if (correctCount === targetCount) {
      updateProgress();

      if (currentLessonId === "1") {
        localStorage.setItem("lesson1_completed", "true");
      }
      if (currentLessonId === "2") {
        localStorage.setItem("lesson2_completed", "true");
      }

      lessonContainer.classList.add("hidden");
      congratsDiv.classList.remove("hidden");
    } else {
      showQuestion();
    }
    return;
  }

  if (nextBtn.dataset.correct === "true") {
    correctCount++;
  } else {
    // Добавляем копию текущего вопроса в конец (для повторения)
    questions.push(structuredClone(question));
  }
  currentQuestionIndex++;

  // Проверяем — завершён ли урок?
  if (correctCount === targetCount) {
    updateProgress();

    localStorage.setItem(`lesson${currentLessonId}_completed`, "true");

    lessonContainer.classList.add("hidden");
    congratsDiv.classList.remove("hidden");
  } else {
    showQuestion();
  }
});

if (restartBtn) {
  restartBtn.addEventListener("click", () => location.reload());
}

if (backToMapBtn) {
  backToMapBtn.addEventListener("click", () => {
    window.location.href = "levels.html";
  });
}

if (closeLessonBtn) {
  closeLessonBtn.addEventListener("click", () => {
    const isConfirmed = confirm(
      "Вы уверены, что хотите прервать урок? Ваш прогресс не сохранится.",
    );
    if (isConfirmed) {
      window.location.href = "levels.html";
    }
  });
}

// === ЛОГИКА ЭКРАНА ТЕОРИИ И ШПАРГАЛКИ ===

// Заполняем тексты теории из нашей базы
theoryStartTitle.textContent = lessonData.theoryTitle;
theoryStartText.textContent = lessonData.theoryText;
theoryModalText.textContent = lessonData.theoryText;

// Клик по кнопке "Начать тренировку"
if (startLessonBtn) {
  startLessonBtn.addEventListener("click", () => {
    // Прячем стартовый экран
    theoryStartScreen.classList.add("hidden");
    // Запускаем первый вопрос!
    showQuestion();
  });
}

// Клик по лампочке (показать шпаргалку)
if (theoryHintBtn) {
  theoryHintBtn.addEventListener("click", () => {
    theoryModal.classList.remove("hidden");
  });
}

// Клик по крестику в шпаргалке (закрыть шпаргалку)
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    theoryModal.classList.add("hidden");
  });
}

// Закрытие шпаргалки при клике мимо белого окошка (по темному фону)
if (theoryModal) {
  theoryModal.addEventListener("click", (e) => {
    if (e.target === theoryModal) {
      theoryModal.classList.add("hidden");
    }
  });
}

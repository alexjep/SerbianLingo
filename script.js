// Данные уроков: только match и sentence
const lessonsData = {
  "1": [
    {
      // Первая группа (база)
      type: "match",
      pairs: {
        Здраво: "Привет",
        Хвала: "Спасибо",
        Молим: "Пожалуйста",
        Извини: "Извини"
      }
    },
    {
      // Вторая группа (существительные)
      type: "match",
      pairs: {
        Пас: "Собака",
        Мачка: "Кошка",
        Кућа: "Дом",
        Град: "Город"
      }
    },
    {
      // Сборка предложения
      type: "sentence",
      question: "Я учу сербский язык",
      correctAnswer: "Ја учим српски језик",
      words: ["језик", "учим", "Ја", "српски", "читам"]
    }
  ],
  "2": [
    {
      // Первая группа (еда)
      type: "match",
      pairs: {
        Ајвар: "Айвар",
        Хлеб: "Хлеб",
        Млеко: "Молоко",
        Сир: "Сыр"
      }
    },
    {
      // Вторая группа (еда — категории)
      type: "match",
      pairs: {
        Поврће: "Овощи",
        Воће: "Фрукты",
        Месо: "Мясо",
        Вода: "Вода"
      }
    },
    {
      type: "sentence",
      question: "Я люблю есть айвар",
      correctAnswer: "Ја волим да једем ајвар",
      words: ["Ја", "волим", "да", "једем", "ајвар", "пијем"]
    },
    {
      type: "sentence",
      question: "Это очень полезно",
      correctAnswer: "Ово је веома здраво",
      words: ["Ово", "је", "веома", "здраво", "лоше"]
    },
    {
      type: "sentence",
      question: "Сколько здесь калорий?",
      correctAnswer: "Колико калорија има ово",
      words: ["Колико", "калорија", "има", "ово", "кошта"]
    }
  ],
  "3": [
    {
      // Город и инфраструктура — объекты
      type: "match",
      pairs: {
        Улица: "Улица",
        "Пешачки прелаз": "Переход",
        Знак: "Знак",
        Семафор: "Светофор"
      }
    },
    {
      // Город и инфраструктура — дополнения
      type: "match",
      pairs: {
        Пут: "Дорога",
        Рупа: "Яма",
        Аутобус: "Автобус",
        Мост: "Мост"
      }
    },
    {
      type: "sentence",
      question: "Где находится пешеходный переход?",
      correctAnswer: "Где се налази пешачки прелаз",
      words: ["Где", "се", "налази", "пешачки", "прелаз", "мост"]
    },
    {
      type: "sentence",
      question: "На дороге большая яма",
      correctAnswer: "На путу је велика рупа",
      words: ["На", "путу", "је", "велика", "рупа", "зграда"]
    },
    {
      type: "sentence",
      question: "Здесь нет знака",
      correctAnswer: "Овде нема знака",
      words: ["Овде", "нема", "знака", "има"]
    }
  ]
};

// Определяем текущий урок по параметру ?level= в URL
const urlParams = new URLSearchParams(window.location.search);
const currentLessonId = urlParams.get("level") || "1";

// Делаем копию массива вопросов, чтобы push не трогал оригинальные данные урока
let questions = [...(lessonsData[currentLessonId] || lessonsData["1"])];

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
  wordsContainer.className =
    "flex flex-wrap gap-2 w-full justify-center";

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

    btn.addEventListener("click", () => handleMatchTileClick(btn, pairs));
    rightCol.appendChild(btn);
  });

  optionsDiv.appendChild(leftCol);
  optionsDiv.appendChild(rightCol);

  // Кнопка "Дальше" уже показана, но пока неактивна.
  setNextButtonDisabled("Дальше");
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
    left.disabled = true;
    right.disabled = true;
    const applySuccess = (el) => {
      el.classList.remove("hover:bg-gray-50");
      el.classList.add(
        "bg-green-100",
        "border-green-500",
        "text-green-700"
      );
    };
    applySuccess(left);
    applySuccess(right);

    // Проверяем, все ли пары найдены
    const tiles = optionsDiv.querySelectorAll('[data-role="match-tile"]');
    const allMatched = Array.from(tiles).every((t) => t.disabled);
    if (allMatched) {
      // 1. Делаем кнопку активной
      nextBtn.disabled = false;
      
      // 2. Убираем серые "сонные" цвета
      nextBtn.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed', 'opacity-50');
      
      // 3. Добавляем яркие "боевые" цвета
      nextBtn.classList.add('bg-blue-500', 'text-white', 'hover:bg-blue-600', 'cursor-pointer', 'opacity-100');
      
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
    '[data-role="sentence-placeholder"]'
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
    sentenceAnswerContainer.querySelectorAll("button")
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
    "bg-green-50"
  );

  if (isCorrect) {
    sentenceAnswerContainer.classList.add(
      "border-green-400",
      "bg-green-50"
    );
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
});

if (restartBtn) {
  restartBtn.addEventListener("click", () => location.reload());
}

if (backToMapBtn) {
  backToMapBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

if (closeLessonBtn) {
  closeLessonBtn.addEventListener("click", () => {
    const isConfirmed = confirm(
      "Вы уверены, что хотите прервать урок? Ваш прогресс не сохранится."
    );
    if (isConfirmed) {
      window.location.href = "index.html";
    }
  });
}

// Начальное отображение
showQuestion();
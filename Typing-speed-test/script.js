const startBtn = document.getElementById("start-btn");
const inputArea = document.getElementById("input");
const quoteDisplay = document.getElementById("quote");
const resultDisplay = document.getElementById("result");

const paragraphs = [
  `Typing is an essential skill in today's digital world. It helps you work faster and more efficiently. With consistent practice, you can improve both speed and accuracy. Always sit comfortably, focus on proper finger placement, and avoid looking at the keyboard while typing. The more you practice, the better you'll get.`,

  `The internet has changed how we communicate, learn, and work. It provides access to information and tools that make our lives easier. However, it is important to use technology wisely and balance screen time with physical activities. Learning to type efficiently is one of the foundational digital skills.`,

  `Success does not come overnight. It takes time, effort, and dedication to achieve your goals. Whether you want to become a developer, writer, or artist, practicing your craft daily helps improve your skills. Stay motivated, stay focused, and never stop learning.`,

  `Reading regularly improves your vocabulary, comprehension, and critical thinking. Books can transport you to different worlds, teach you valuable lessons, and inspire creativity. Make time to read every day, even if it's just a few pages.`,

  `A healthy lifestyle includes eating well, exercising regularly, and getting enough sleep. It’s important to take breaks when working long hours on a computer. Stand up, stretch, and rest your eyes to avoid fatigue and stay productive.`
];
function getRandomParagraph() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  return paragraphs[randomIndex];
}


let startTime = null;

let paragraph = "";

function renderQuote() {
  paragraph = getRandomParagraph(); 
  quoteDisplay.innerHTML = '';
  for (let char of paragraph) {
    const span = document.createElement('span');
    span.innerText = char;
    quoteDisplay.appendChild(span);
  }
}
renderQuote();

function startTest() {
  inputArea.value = '';
  inputArea.disabled = false;
  inputArea.focus();
  resultDisplay.textContent = '';
  startTime = new Date().getTime();
}

startBtn.addEventListener("click", startTest);

inputArea.addEventListener("input", () => {
  const input = inputArea.value;
  const spans = quoteDisplay.querySelectorAll('span');
  let correct = true;

  spans.forEach((span, index) => {
    const char = input[index];
    if (char == null) {
      span.classList.remove("correct", "incorrect");
    } else if (char === span.innerText) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
      correct = false;
    }
  });

  if (input === paragraph) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    const wordCount = paragraph.split(" ").length;
    const speed = Math.round((wordCount / timeTaken) * 60);
    resultDisplay.textContent = `🎉 Completed! Typing Speed: ${speed} WPM`;
    inputArea.disabled = true;
  }
});

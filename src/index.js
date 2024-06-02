function displayAnswer(response) {
  new Typewriter("#ai-answer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateToast(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#textInput");
  let apiKey = "182a2fb198a6etcbecec6a40a9o4bb3f";
  let prompt = `Generate a unique toast with word  ${inputElement.value}`;
  let context =
    "You are a funny AI assistant and love to say good toasts. Your goal to generate toast that consist of 2-3 sentences. Provide only toast without comments.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let aiAnswerField = document.querySelector("#ai-answer");
  aiAnswerField.classList.add("shown");
  aiAnswerField.innerHTML = `<div class="generating">⏳ Generating a toast about ${inputElement.value}</div>`;

  axios.get(apiUrl).then(displayAnswer);
}

let form = document.querySelector("#instruction-form");
form.addEventListener("submit", generateToast);

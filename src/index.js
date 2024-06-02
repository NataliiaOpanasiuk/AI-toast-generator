function displayAnswer(response) {
  //   console.log(response.data.answer);

  //   let aiAnswerField = document.querySelector("#ai-answer");
  new Typewriter("#ai-answer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function search(value) {
  let apiKey = "182a2fb198a6etcbecec6a40a9o4bb3f";
  let prompt = "Generate a unique toast with word" + value;
  let context =
    "You are a funny AI assistant. Provide only toast without comments.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);

  let aiAnswerField = document.querySelector(".ai-answer");
  //   aiAnswerField.innerHTML(`⏳ Generating a toast about ${value}`);
  aiAnswerField.classList.add("shown");
}

function handleSubmit(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#textInput");
  search(inputElement.value);
}

let form = document.querySelector("#instruction-form");
form.addEventListener("submit", handleSubmit);

// let submitButton = document.querySelector(".submit-btn");
// submitButton.addEventListener("click", handleSubmit);

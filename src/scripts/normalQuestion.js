

export function createNormalQuestion() {
  const div = document.createElement("div");
  div.classList.add("normalQuestion");
  const text = document.createElement("p");
  text.classList.add("question");
  text.innerHTML = "Write the question below : ";
  const question = document.createElement("textArea");
  question.classList.add("question");
  div.appendChild(text);
  div.appendChild(question);
  return div
}

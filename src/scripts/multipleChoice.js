
export function createMultipleChoice() {
  const div = document.createElement("div");
  div.classList.add("multipleChoice");
  const hint = document.createElement("p");
  hint.innerText = "Write the question below";
  hint.classList.add("question");
  const question = document.createElement("textarea");
  const option = document.createElement("input");
  option.classList.add("mcqoption");
  div.appendChild(hint.cloneNode(true));
  hint.classList.remove("question");
  div.appendChild(question);
  hint.innerHTML = "Option 1";
  div.appendChild(hint.cloneNode(true));
  hint.innerHTML = "Option 2";
  div.appendChild(hint.cloneNode(true));
  div.appendChild(option.cloneNode(true));
  div.appendChild(option.cloneNode(true));
  hint.innerHTML = "Option 3";
  div.appendChild(hint.cloneNode(true));
  hint.innerHTML = "Option 4";
  div.appendChild(hint.cloneNode(true));
  div.appendChild(option.cloneNode(true));
  div.appendChild(option.cloneNode(true));
  return div;
}
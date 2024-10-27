
function createMatchFollowing() {
  const div = document.createElement("div");
  div.classList.add("matchFollowing");
  const text = document.createElement("p");
  text.classList.add("question");
  text.innerHTML = "Write the question below : ";
  const textarea = document.createElement("textarea");
  const button = document.createElement("button");
  button.innerHTML = "+";
  button.classList.add("questionButton");
  div.appendChild(text);
  div.appendChild(textarea);
  div.appendChild(button);
  return div;
}

function addMatches(questionDiv, addButton) {
  const div = document.createElement("div");
  div.classList.add("matchFollowingPairs");
  const text1 = document.createElement("input");
  text1.classList.add("matchFollowingInput");
  div.appendChild(text1.cloneNode(true));
  div.appendChild(text1.cloneNode(true));
  questionDiv.insertBefore(div, addButton);
}


export { createMatchFollowing, addMatches };
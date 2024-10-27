import '../src/styles/navbar.css'
import '../src/styles/style.css'
import '../src/styles/form.css'

import { createNormalQuestion } from './scripts/normalQuestion';
import { createMultipleChoice } from './scripts/multipleChoice';
import { createMatchFollowing, addMatches } from './scripts/matchFollowing';


const addFormItem = document.querySelector("#addFormButton");
const addDialogBox = document.querySelector("#addFormDialog");
const form = document.querySelector("#form");
addFormItem.addEventListener("click", () => {
  addDialogBox.showModal();
})

const NormalQuestion = addDialogBox.querySelector("#normalQuestion");
const multipleChoice = addDialogBox.querySelector("#multipleChoice");
const matchFollowing = addDialogBox.querySelector("#matchFollowing");
NormalQuestion.addEventListener("click", () => {
  addDialogBox.close();
  let question = createNormalQuestion();
  form.insertBefore(question, addFormItem);
})

multipleChoice.addEventListener("click", () => {
  addDialogBox.close();
  let question = createMultipleChoice();
  form.insertBefore(question, addFormItem);
})

matchFollowing.addEventListener("click", () => {
  addDialogBox.close();
  let question = createMatchFollowing();
  form.insertBefore(question, addFormItem);
  const addMatchFollowingPairsList = form.querySelectorAll(".matchFollowing .questionButton");
  const addMatchFollowingPairs = addMatchFollowingPairsList[addMatchFollowingPairsList.length - 1];
  console.log(addMatchFollowingPairs.parentElement);
  addMatchFollowingPairs.addEventListener("click", function () {
    addMatches(this.parentElement, this);
  })
})

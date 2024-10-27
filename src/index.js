import '../src/styles/navbar.css'
import '../src/styles/style.css'
import '../src/styles/form.css'

import { createNormalQuestion } from './scripts/normalQuestion';
import { createMultipleChoice } from './scripts/multipleChoice';
const addFormItem = document.querySelector("#addFormButton");
const addDialogBox = document.querySelector("#addFormDialog");
const form = document.querySelector("#form");
addFormItem.addEventListener("click", () => {
  addDialogBox.showModal();
})

const NormalQuestion = addDialogBox.querySelector("#normalQuestion");
const multipleChoice = addDialogBox.querySelector("#multipleChoice");
NormalQuestion.addEventListener("click", () => {
  console.log("Creating normal question");
  addDialogBox.close();
  let question = createNormalQuestion();
  form.insertBefore(question, addFormItem);
})

multipleChoice.addEventListener("click", () => {
  console.log("Creating normal question");
  addDialogBox.close();
  let question = createMultipleChoice();
  form.insertBefore(question, addFormItem);
})

import {
  addBookButton,
  search,
  simpanBuku,
  SAVED_BOOK,
  LOAD_BOOK,
  EVENT_CUSTOM
} from "./src/scripts/constants.js";
import {
  inputBookHandler,
  searchButtonHandler,
  keyUpHandler,
  submitBookHandler,
  closeForm,
  refreshed,
  showFormInput,
  evenCustomHandlers
} from "./src/scripts/functions.js";


simpanBuku.addEventListener("submit", inputBookHandler);
search.addEventListener("keyup", keyUpHandler);
search.addEventListener("submit", searchButtonHandler);
document.addEventListener("DOMContentLoaded", submitBookHandler);
document.addEventListener(SAVED_BOOK, closeForm);
document.addEventListener(LOAD_BOOK, refreshed);
addBookButton.addEventListener("click", showFormInput);
document.addEventListener(EVENT_CUSTOM, evenCustomHandlers);

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".modal-js-form"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.modal.addEventListener("click", onBackdropClick);
  refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  // function toggleModal() {
  //   refs.modal.classList.toggle("is-hidden");
  // }

  function onOpenModal() {
    window.addEventListener("keydown", onEscPress);
    refs.modal.classList.remove("is-hidden");
  }

  function onCloseModal() {
    window.removeEventListener("keydown", onEscPress);
    refs.modal.classList.add("is-hidden");
  }

  function onEscPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    }
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
})();

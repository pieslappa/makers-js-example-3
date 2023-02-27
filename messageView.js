class MessageView {
  constructor() {
    this.showBtnEl = document.querySelector("#show-message-button");
    this.hideBtnEl = document.querySelector("#hide-message-button");
    this.mainContainer = document.querySelector("#main-container");
    this.inputEl = document.querySelector("#message-input");
    this.showBtnEl.addEventListener("click", () => {
      this.displayMessage();
    });

    this.hideBtnEl.addEventListener("click", () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    let div = document.createElement("div");
    div.setAttribute("id", "message");
    div.textContent = this.inputEl.value;
    this.mainContainer.append(div);
  }

  hideMessage() {
    let div = this.mainContainer.querySelector("#message");
    div.remove();
  }
}

module.exports = MessageView;

/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button to display the message entered", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const inputEl = document.querySelector("#message-input");

    inputEl.value = "Hello, world!";

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("div #message").textContent).toBe(
      "Hello, world!"
    );
  });

  it("clicks the button to hide the message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const showBtnEl = document.querySelector("#show-message-button");
    showBtnEl.click();
    const hideBtnEl = document.querySelector("#hide-message-button");
    hideBtnEl.click();
    expect(document.querySelector("#message")).toBeNull();
  });
});

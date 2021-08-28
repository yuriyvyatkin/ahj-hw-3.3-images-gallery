export default class EnterKeyHandler {
  constructor(addButton) {
    this.addButton = addButton;
  }

  assign() {
    window.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.addButton.click();
      }
    });
  }
}

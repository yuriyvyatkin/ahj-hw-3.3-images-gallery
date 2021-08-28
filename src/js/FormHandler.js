export default class FormHandler {
  constructor(form, imageName, imageLink, images) {
    this.form = form;
    this.imageName = imageName;
    this.imageLink = imageLink;
    this.images = images;
    this.timerId = null;
  }

  assign() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      const error = this.imageLink.closest('.label').nextElementSibling;
      if (error.className === 'error' && !this.timerId) {
        error.remove();
      }

      const img = document.createElement('img');
      img.src = this.imageLink.value;

      img.onload = () => {
        this.images.insertAdjacentHTML('beforeend', `
          <div class="image-container">
            <img class="image" src="${this.imageLink.value}" alt="${this.imageName.value}">
            <a href="#" class="image__remove">X</a>
          </div>
        `);
        this.form.reset();
      };

      img.onerror = () => {
        const label = this.imageLink.closest('.label');
        if (!this.timerId) {
          label.insertAdjacentHTML(
            'afterend',
            '<p class="error">Неверный URL изображения</p>',
          );
          this.timerId = setTimeout(() => {
            label.nextElementSibling.remove();
            this.timerId = null;
          }, 2000);
        }
      };
    });
  }
}

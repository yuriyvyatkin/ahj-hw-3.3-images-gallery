export default class ImagesHandler {
  constructor(images) {
    this.images = images;
  }

  assign() {
    this.images.addEventListener('click', (event) => {
      const { target } = event;

      if (target.classList.contains('image__remove')) {
        target.closest('.image-container').remove();
      }
    });
  }
}

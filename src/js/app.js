import FormHandler from './FormHandler';
import ImagesHandler from './ImagesHandler';
import EnterKeyHandler from './EnterKeyHandler';

const form = document.body.querySelector('#images__form');
const imageName = form.querySelector('#name__input');
const imageLink = form.querySelector('#link__input');
const addButton = form.querySelector('#image__add');
const images = document.body.querySelector('#images');

const formHandler = new FormHandler(form, imageName, imageLink, images);
formHandler.assign();

const imagesHandler = new ImagesHandler(images);
imagesHandler.assign();

const enterKeyHandler = new EnterKeyHandler(addButton);
enterKeyHandler.assign();

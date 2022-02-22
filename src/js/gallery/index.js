import MovieCard from '../components/card';

export default class Gallery {
  constructor(items) {
    this.items = items;
  }

  createGalleryMarkup() {
    const galleryWrapper = document.querySelector('.pageContentWrapper');
    const markup = this.items.reduce((acc, item) => {
      acc += new MovieCard(item).createCardMarkup();

      return acc;
    }, '');

    return (galleryWrapper.innerHTML = `<ul class="gallery">${markup}</ul>`);
  }
}

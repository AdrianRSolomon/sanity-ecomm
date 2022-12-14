import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(500).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(500).height(500).url();
}

export { urlFor, urlForThumbnail };
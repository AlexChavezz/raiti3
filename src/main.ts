import './style.css'

type ButtonElement = HTMLElement | null;
type ImageElement = HTMLImageElement | null;

const downloadButton: ButtonElement = document.querySelector('.download-button');
const image: ImageElement = document.querySelector('.download-image');
downloadButton?.addEventListener('mouseover', () => {
  if (image) {
    image.src = "./src//assets/cloud_download_black_24dp.svg";
  }
  downloadButton.style.backgroundColor = '#fff';
  downloadButton.style.color = '#181818';
})
downloadButton?.addEventListener('mouseout', () => {
  if (image) {
    image.src = "./src//assets/cloud_download_white_24dp.svg";
  }
  downloadButton.style.backgroundColor = '#181818';
  downloadButton.style.color = '#fff';
})

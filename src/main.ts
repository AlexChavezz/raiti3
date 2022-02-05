import './style.css'

const downloadButton = document.querySelector('.download-button');
downloadButton?.addEventListener('mouseover', () => {
  document.querySelector('.download-image').src = "./src//assets/cloud_download_black_24dp.svg";
  downloadButton.style.backgroundColor = '#fff';
  downloadButton.style.color = '#181818';
})
downloadButton?.addEventListener('mouseout', () => {
  document.querySelector('.download-image').src = "./src//assets/cloud_download_white_24dp.svg";
  downloadButton.style.backgroundColor = '#181818';
  downloadButton.style.color = '#fff';
})

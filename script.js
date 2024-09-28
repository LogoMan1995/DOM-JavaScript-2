document.querySelector("img.preview").addEventListener('click', (e) => {
  let smallImg = e.target.src;
  let overlay = document.querySelector(".overlay");
  let bigImg = document.createElement("img");
  let spinner = document.createElement("img");


  overlay.style.display = "block";
  bigImg.className = "bgImg";
  bigImg.src = smallImg.substring(0, smallImg.length - 7) + ".jpg";
  overlay.appendChild(bigImg);


  spinner.src = "images/spinner.gif";
  spinner.className = "spinner";
  overlay.appendChild(spinner);

  bigImg.addEventListener('load', () => {
    bigImg.parentNode.removeChild(spinner)
  })

})

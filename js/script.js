var leverPulled = false;

function pullLever() {
  leverPulled = !leverPulled;
  if (leverPulled) {
    document.querySelector('#doorTexture').setAttribute('src', '');
  } else {
    document.querySelector('#doorTexture').setAttribute('src', 'https://cdn.aframe.io/a-painter/images/door.jpg');
  }
}

document.querySelector('#lever').addEventListener('click', pullLever);

var idolOnAltar = false;

function placeIdol() {
  if (leverPulled && !idolOnAltar) {
    idolOnAltar = true;
    document.querySelector('#idolTexture').setAttribute('src', '');
    document.querySelector('#altarTexture').setAttribute('src', 'https://cdn.aframe.io/a-painter/images/altar-open.jpg');
  }
}

document.querySelector('#pedestal').addEventListener('click', placeIdol);

/**
 * reproduction of the pronunciation of a letter
 */
function soundClick(id) {

  setTimeout(function() {
    
    let audio = new Audio();

    audio.src = 'sound/' + id + '.mp3';
    audio.autoplay = true;
  
  }, 700);

}

/**
 * reproduction of the word "letter"
 */
function soundClickNumber() {

  let audioNumber = new Audio();
  audioNumber.src = 'sound/numeral.mp3';
  audioNumber.autoplay = true;

}

/**
 * creating a table with images
 */
function addTable() {
  
  let table = document.querySelector('#table');
  let nameImg = 0;
  
  for (let i = 0; i < 2; i++) {

    
    let tr = document.createElement('tr');
    
    for (let i = 0; i < 5; i++) {
      
      let td = document.createElement('td');
      
      tr.appendChild(td);
      
      let newElement = document.createElement('img');
      
      newElement.src = 'img/' + nameImg + '.jpg';
      newElement.id = nameImg;
      newElement.style.width = '80%';
      newElement.style.height = '80%';
      td.appendChild(newElement);

      nameImg++;
    
	}
  
  table.appendChild(tr);

  }

}

/**
 * handle the event
 */
function clickHandler() {

  let Numbers = document.querySelectorAll('img');

  for(let i = 0; i < Numbers.length; i++) {

    Numbers[i].addEventListener('mousedown', function(e) {

      let idImg = e.target.id;
      e.target.style.transform = 'scale(1.5)';

      Numbers[i].addEventListener('mouseup', function(e) {

        soundClick(idImg);
  
      });

      Numbers[i].addEventListener('mouseout', function(e) {

        e.target.style.transform = '';
  
      });
      
      soundClickNumber();

    });
    
  }

}

/**
 * script initialization
 */
function init() {
  
  addTable();

  clickHandler();
    
}

init();
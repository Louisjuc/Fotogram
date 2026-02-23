let imgData = [
  "eisberg.jpg",
  "ente.jpg",
  "mensch_nacht.jpg",
  "nachthimmel.png",
  "panorama.jpg",
  "schnee.jpg",
  "see.jpg",
  "stadt_nacht.jpg",
  "vogel_white.jpg",
  "vogel.jpg",
  "weltall.jpg",
  "wildkatze.jpg"
];

let ImgDescription = [
  "Berge Panorama",
  "Ente schwimmt im Wasser",
  "Person betrachtet den Nachthimmel",
  "Bewölkter Himmel",
  "Aussicht Berg",
  "Baum im Winter",
  "See Panorama",
  "Stadt bei Nacht",
  "Schneeammer",
  "Blaumeise",
  "Hurricane",
  "Leopard"
];


let newIndex = 0;

function render() {
  const contentRef = document.getElementById('img_content');
  contentRef.innerHTML = "";
  for (let index = 0; index < imgData.length; index++) {
    contentRef.innerHTML += `
      <button onclick="openDialog(${index})">
        <img src="./img/${imgData[index]}" class="gallery_img" alt="${ImgDescription[index]}">
      </button>
    `;
  }
}

function openDialog(index) {
  newIndex = index;
  contentDialog();
  document.getElementById("imgDialog").showModal();
}
function closeDialog() {
  document.getElementById("imgDialog").close();
}

function contentDialog() {
  const dialogContent = document.getElementById("dialog_content");
  dialogContent.innerHTML = `
    <div class="menu_flex">
    <p>${ImgDescription[newIndex]}</p>
    <button onclick="closeDialog()" class="close_button">
      <img src="./img/close.svg" alt="Button zum Schließen">
    </button>
    </div>
    <img src="./img/${imgData[newIndex]}" class="img_full-width" alt="${ImgDescription[newIndex]}">
  `;
  document.getElementById("dialog_numb").innerHTML = `${newIndex +1}/12`;
}

function nextPicture() {
  newIndex = (newIndex + 1); 
if(newIndex >= 12){
  newIndex = 0;
}

contentDialog();
}

function prevPicture() {
  newIndex = (newIndex - 1); 
  if(newIndex <= 0){
    newIndex = 11;
  }
  contentDialog();
}

function onClick(event) {
  if (event.target === dialog) {
    dialog.close();
  }
}

const dialog = document.querySelector("dialog");
dialog.addEventListener("click", onClick);
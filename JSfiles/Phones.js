const API = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`;
let container = document.getElementById("container");
let counter = 0;
let GB =[
  "180",
  "256",
  "128",
  "256",
  "64",
  "128",
  "128",
  "64",
  "256",
  "128",
  "256",
  "128",
  "256",
  "128",
  "128",
]
let phonesImageArray = [
    '1phone.png',
    '2phone.png',
    '3phone.png',
    '4phone.png',
    '5phone.png',
    '6phone.png',
    '7phone.png',
    '8phone.png',
    '9phone.png',
    '10phone.png',
    '11phone.png',
    '12phone.png',
    '13phone.png',
    '14phone.png',
    '15phone.png',
]
let headjack = [
  'Yes',
  'Yes',
  'No',
  'Yes',
  'Yes',
  'No',
  'No',
  'Yes',
  'No',
  'No',
  'Yes',
  'Yes',
  'Yes',
  'Yes',
  'No',
]
let camera = [
  '40MP',
  '20MP',
  '12MP',
  '15MP',
  '24MP',
  '18MP',
  '25MP',
  '30MP',
  '50MP',
  '25MP',
  '13MP',
  '30MP',
  '25MP',
  '30MP',
  '16MP',
]
async function getUsers() {
  try {
    loadingGif.innerHTML = `<img src="../images/GifLoad/loading.gif" alt="">`;
    return await fetch(API).then((response) => response.json());
  } catch (error) {
  } finally {
    loadingGif.innerHTML = ``;
  }
}
function printusersinfo() {
  getUsers().then((result) => {
    result.forEach((item,index) => {
      container.innerHTML += `
            <div  class="  px-4 pb-5  style="height: ;" ">
            <div id="cardphonenum${index}" class="card col" >
            <img id="imagephone${index}" class="card-img-top"src="../images/PhonesPhotos/${phonesImageArray[index]} ">
            <div class="card-body">
            <h3>Brand :<b> ${item.brand}</b></h3>
            <br>
            <p><b>Brand</b> : ${item.brand} | <b>Color</b> : ${item.color}</p>
            <p><b>Realse</b> : ${item.createdAt} | <b>Ram</b> : ${item.ram}</p>
            <p><b>GB</b> : ${GB[index]} | <b>Camera</b> : ${camera[index]}</p>
            <p><b>3.5 Jack</b> : ${headjack[index]} | <b>Ram</b> : ${item.ram}</p>
            <p><b>Price</b> : ${item.price} | <b>In Stores</b> : ${item.isAvailable}</p>
            <br><br>
            </div>
            </div>
            </div>
            `;
          });
        });
      }
      printusersinfo();

const API = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`;
let container = document.getElementById("container");
let FaceImage = [];
async function getUsers() {
  try {
    loadingGif.innerHTML = `    <img src="../images/GifLoad/loading.gif" alt="">`;
    return await fetch(API).then((response) => response.json());
  } catch (error) {
  } finally {
    loadingGif.innerHTML = ``;
  }
}
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
function printusersinfo() {
  getUsers().then((result) => {
    result.forEach((item,index) => {
      container.innerHTML += `
            <div id="cardphonenum[${index}]" class=" col w-25 px-4 pb-5  style="height: ;" ">
            <div class="card col" >
            <img class="card-img-top"src="../images/PhonesPhotos/${phonesImageArray[index]} ">
            <div class="card-body">
            <h3>Brand :<b> ${item.brand}</b></h3>
            <br>
            <p><b>Brand</b> : ${item.brand} | <b>Color</b> : ${item.color}</p>
            <p><b>Realse</b> : ${item.createdAt} | <b>Ram</b> : ${item.ram}</p>
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
      id="cardphonenum[${index}]"
      // <p><b>Realse Date</b> : ${item.createdAt}</p>
      // <p><b>Color</b> : ${item.color}</p>
      // <p><b>In Stores</b> : ${item.isAvailable}</p>

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
    '1phone.webp',
    '2phone.webp',
    '3phone.webp',
    '4phone.webp',
    '5phone.webp',
    '6phone.webp',
    '7phone.webp',
    '8phone.webp',
    '9phone.webp',
    '10phone.webp',
    '11phone.webp',
    '12phone.webp',
    '13phone.webp',
    '14phone.webp',
    '15phone.webp',
]
function printusersinfo() {
  getUsers().then((result) => {
    result.forEach((item,index) => {
      container.innerHTML += `
            <div class=" px-3 pb-5 ">
            <div class="bg-dark col card w-100" >
            <img class="img-fluid" src="../images/PhonesPhotos/${phonesImageArray[index]}">
            <div class="card-body text-white">
            <p>${item.picture}</p>
            <p><b>Brand</b> : ${item.brand}</p>
            <p><b>Color</b> : ${item.color}</p>
            <p><b>Ram</b> : ${item.ram}</p>
            <p><b>Realse Date</b> : ${item.createdAt}</p>
            <p><b>Price</b> : ${item.price}</p>
            <p><b>In Stores</b> : ${item.isAvailable}</p>
            <br><br>
            </div>
            </div>
            </div>
            `;
    });
  });
}
printusersinfo();

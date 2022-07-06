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
            <div class=" px-3 pb-5 style="height: ;" ">
            <div class="bg-dark col card " >
            <img src="../images/PhonesPhotos/${phonesImageArray[index]} ">
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

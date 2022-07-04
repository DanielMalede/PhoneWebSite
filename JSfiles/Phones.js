const API = `https://my-json-server.typicode.com/Jeck99/fake-server/devices`;
let container = document.getElementById('container')
let FaceImage = [
    
]
async function getUsers() {
  try {
    return await fetch(API)
    .then((response) =>
    response.json() );
    ;
  } catch (error) {}
}
console.log(getUsers()); 
function printusersinfo() {
    getUsers()
    .then((result) =>{
        result.forEach(item => {
            container.innerHTML += `
            <div class="col-md-4 px-3 pb-5 ">
                <div class="card w-100" >
                <img src=../images/StuffImage/Effie.jpg style="height:30vh ;>
                    <div class="card-body">
                    <p>${item.brad}</p>
                    <p>${item.color}</p>
                    <p>${item.isAvailable}</p>
                    <p>${item.picture}</p>
                    <p>${item.price}</p>
                    <p>${item.email}</p>
                    <p>${item.phone}</p>
                    <br><br>
                    </div>
                </div>
            </div>
            `
        });
    })
    
}
printusersinfo()
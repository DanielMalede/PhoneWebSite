const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
let container = document.getElementById("mytable");
let FaceImage = [
  `../images/StuffImage/Terry.png`,
  `../images/StuffImage/Terry.png`,
];
async function getUsers() {
  try {
    return await fetch(API).then((response) => response.json());
  } catch (error) {}
}
console.log(getUsers());
function printusersinfo() {
  getUsers().then((result) => {
    result.forEach((item) => {
      container.innerHTML += 














      
                        `<tr>
                        <td>${item.name.first} : ${item.name.last}</td> 
                        <td>${item.age}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                    </tr>`;
    });
  });
}
printusersinfo();

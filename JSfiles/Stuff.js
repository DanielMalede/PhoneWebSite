const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
let container = document.getElementById("mytable");
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
        <td>${item.phone}</td>
        </tr>`;
    });
  });
}
printusersinfo();


async function addUser(){
  let addUserInfo = {
      info: {
        age: AgeUser.value,
        name :{
          last:LastNameUser.value,
          first:FirstNameUser.value,
        },
        email: EmailUser.value,
        phone: PhoneUser.value,
        picture: PictureUser.value,
      }
  }
  try {
    await fetch(`${API}`,
    {
      method: "post",
      body: JSON.stringify(addUserInfo),
      headers: {
        'Content-Type': 'application/json'
    }
    })
  } catch (error) {
  }
  finally{
    container.innerHTML += `<tr>
    <td>${AgeUser.value} : ${LastNameUser.value}</td> 
    <td>${EmailUser.value}</td>
    <td>${PhoneUser.value}</td>
    <td>${PictureUser.value}</td>
    </tr>`
  }
}
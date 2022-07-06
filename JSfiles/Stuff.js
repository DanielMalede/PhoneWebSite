const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
let container = document.getElementById("mytable");
// async function getUsers() {
//   try {
//     return await fetch(API).then((response) => response.json());
//   } catch (error) {}
// }

// let imageUserArray = [
//   '1.jpg',
//   '2.webp',
//   '3.jpg',
//   '4.jpg',
//   '5.png',
//   '6.jpg'
// ];

// function printusersinfo() {
//   getUsers().then((result) => {
//     result.forEach((item,index) => {
//       container.innerHTML += `<tr>
//       <td>${item.name.first} : ${item.name.last}</td> 
//       <td>${item.age}</td>
//       <td>${item.phone}</td>
//       <td><img src="../images/s/${imageUserArray[index]} "></td>
//       </tr>`;
//     });
//   });
// }
// // printusersinfo();

async function addUser() {
  let addUserInfo = {
    info: {
      age: AgeUser.value,
      name: {
        last: LastNameUser.value,
        first: FirstNameUser.value,
      },
      email: EmailUser.value,
      phone: PhoneUser.value,
      picture: PictureUser.value,
    },
  };
  try {
    await fetch(`${API}`, {
      method: "post",
      body: JSON.stringify(addUserInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
  } finally {
    container.innerHTML += `<tr>
    <td>${AgeUser.value} : ${LastNameUser.value}</td> 
    <td>${EmailUser.value}</td>
    // <td>${PhoneUser.value}</td>
    </tr>`;
  }
}
addUser()
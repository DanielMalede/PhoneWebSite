const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
let MyTable = document.getElementById("mytable");
async function getUsers() {
  try {
    return await fetch(API).then((response) => response.json());
  } catch (error) {}
}

let imageUserArray = [
  '1.jpg',
  '2.webp',
  '3.jpg',
  '4.jpg',
  '5.png',
  '6.jpg'
];

onload= function printusersinfo() {
  getUsers().then((result) => {
    result.forEach((item,index) => {
      MyTable.innerHTML += `<tr class="">
      <td>${item.name.first}</td> 
      <td>${item.name.last}</td>
      <td>${item.age}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td><img src="https://randomuser.me/api/portraits/med/men/${index}.jpg"></td>
      </tr>`;
    });
  });
}

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
    MyTable.innerHTML += `<tr>
    <td>${name.last.FirstNameUser.value}</td> 
    <td>${nameLastNameUser.value}</td> 
    <td>${age.AgeUser.value}</td> 
    <td>${email.EmailUser.value}</td> 
    </tr>`;
  }
}

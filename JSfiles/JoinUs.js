const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
async function getUsers() {
  try {
    return await fetch(API).then((response) => response.json());
  } catch (error) {}
}

// onload= function printusersinfo() {
//   getUsers().then((result) => {
//     result.forEach((item,index) => {
//       MyTable.innerHTML += `<tr class="">
//       <td>${item.name.first}</td> 
//       <td>${item.name.last}</td>
//       <td>${item.age}</td>
//       <td>${item.email}</td>
//       <td>${item.phone}</td>
//       <td><img src="https://randomuser.me/api/portraits/med/men/${index}.jpg"></td>
//       </tr>`;
//     });
//   });
// }

async function userJoin() {
  let addUserInfo = {
    info: {
      age: AgeUser.value,
      name: {
        last: LastNameUser.value,
        first: FirstNameUser.value,
      },
      email: EmailUser.value,
      // phone: PhoneUser.value,
      // picture: PictureUser.value,
    },
  };
  try {
    loadinggiff.innerHTML = "<img src='../images/GifLoad/loading.gif'>"
    await fetch(`${API}`, {
      method: "post",
      body: JSON.stringify(addUserInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
  } finally {
    alert("yes")
    loadinggiff.innerHTML = ""

  }
}

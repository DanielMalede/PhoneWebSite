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
    },
  };
  try {
    loadinggiff.innerHTML = "<img src='../images/GifLoad/loading.gif'>";
    await fetch(`${API}`, {
      method: "post",
      body: JSON.stringify(addUserInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadinggiff.innerHTML = "<h2>Great now we are official members ! <br> you can continue on the web site</h2>";
  } 
  catch (error) {
  loadinggiff.innerHTML = "<h3>we are sorry currently we have a problem in our service please try again in a few minutes</h3>";
  } 
}

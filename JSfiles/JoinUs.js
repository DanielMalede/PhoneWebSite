const inputArr = [];
const MyAPI = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
let MyTablee = document.getElementById("mytable");
async function getUsersMyAPI() {
  try {
    return await fetch(MyAPI).then((response) => response.json());
  } catch (error) {}
}

// const addUserInfo =
//   {
//     age: document.getElementById("AgeUser").value,
//     email: document.getElementById("EmailUser").value,
//     name: {last: document.getElementById("LastNameUser").value, first: document.getElementById("FirstNameUser").value},
//     phone: "",
//     picture: ""
//   }
// function someeee() {
//   console.log(addUserInfo);
// }
// function creatObjInInputArr(arr){
//   return inputArr.push(    {
//     age: document.getElementById("AgeUser").value,
//     email: document.getElementById("EmailUser").value,
//     name: {last: document.getElementById("LastNameUser").value, first: document.getElementById("FirstNameUser").value},
//     phone: "",
//     picture: ""
//   })
// }
// console.log(inputArr);

async function userJoin() {
  const addUserInfo = {
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
    // addUserAccount()
    await fetch(MyAPI, {
      method: "POST",
      body: JSON.stringify(addUserInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadinggiff.innerHTML =
      "<h2>Great now we are official members ! <br> you can continue on the web site</h2>";
  } catch (error) {
    loadinggiff.innerHTML =
      "<h3>we are sorry currently we have a problem in our service please try again in a few minutes</h3>";
  }
}
function addUserAccount() {
  MyTablee.innerHTML += `<tr>
  <td>${document.getElementById("FirstNameUser").value}</td> 
  <td>${document.getElementById("LastNameUser").value}</td>
  <td>${document.getElementById("AgeUser").value}</td>
  <td>${document.getElementById("EmailUser").value}</td>
  </tr>`;
}

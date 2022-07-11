const inputArr = []
// const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
// let MyTable = document.getElementById("mytable");
// async function getUsersAPI() {
//   try {
//     return await fetch(API).then((response) => response.json());
//   } catch (error) {}
// }

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
  function creatObjInInputArr(arr){
    inputArr.push(    {
      age: document.getElementById("AgeUser").value,
      email: document.getElementById("EmailUser").value,
      name: {last: document.getElementById("LastNameUser").value, first: document.getElementById("FirstNameUser").value},
      phone: "",
      picture: ""
    })
    console.log(inputArr);
  }


// async function userJoin() {
//   let addUserInfo = {
//     info: {
//       age: AgeUser.value,
//       name: {
//         last: LastNameUser.value,
//         first: FirstNameUser.value,
//       },
//       email: EmailUser.value,
//     },
//   };
//   try {
//     loadinggiff.innerHTML = "<img src='../images/GifLoad/loading.gif'>";
//     // addUserAccount()
//     await fetch(`${API}`, {
//       method: "post",
//       body: JSON.stringify(addUserInfo),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     loadinggiff.innerHTML = "<h2>Great now we are official members ! <br> you can continue on the web site</h2>";
//   } 
//   catch (error) {
//   loadinggiff.innerHTML = "<h3>we are sorry currently we have a problem in our service please try again in a few minutes</h3>";
//   } 
// }
// function addUserAccount() {
//   return MyTable.innerHTML += `<tr>
//   <td>${FirstNameUser.value}</td> 
//   <td>${LastNameUser.value}</td>
//   <td>${AgeUser.value}</td>
//   <td>${EmailUser.value}</td>
//   </tr>`;
// }

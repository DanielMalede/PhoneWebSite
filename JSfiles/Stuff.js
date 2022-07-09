const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
let MyTable = document.getElementById("mytable");
async function getUsers() {
  try {
    loding.innerHTML = `<img src="../images/GifLoad/loading.gif" alt="">`;
    return await fetch(API).then((response) => response.json());
  } catch (error) {
    errors(error)
  }
  finally{
    loding.innerHTML = "";
    }
}
function printusersinfo() {
  getUsers().then((result) => {
    result.forEach((item,index) => {
      MyTable.innerHTML += `<tr class="">
      <td>${item.name.first}</td> 
      <td>${item.name.last}</td>
      <td>${item.age}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td><img style="box-shadow: 0px 8px 10px black;" src="https://randomuser.me/api/portraits/med/men/${index}.jpg"></td>
      </tr>`;
    });
  });
}
printusersinfo()
function errors(err) {
    loding.innerHTML = "<h3>we are sorry currently we have a problem in our service please try again in a few minutes</h3>";
}

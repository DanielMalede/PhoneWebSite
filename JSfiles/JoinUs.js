const API = `https://my-json-server.typicode.com/Jeck99/fake-server/users`;
async function getUsers() {
  try {
    return await fetch(API).then((response) => response.json());
  } catch (error) {}
}
async function userJoin() {
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
    
  }
}

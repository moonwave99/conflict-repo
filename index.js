const API_URL = 'https://reqres.in/api/users?page-3';

async function getUsers() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
}

async function main() {
  const users = await getUsers();
  console.log(users);
}

main();

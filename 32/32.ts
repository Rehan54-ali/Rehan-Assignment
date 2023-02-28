const current_users = ['john', 'jane', 'bob', 'alice', 'dan'];
const new_users = ['mike', 'sara', 'jane', 'bill', 'jOHN'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;

  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations, the username '${new_users[i]}' is available!`);
  }
}

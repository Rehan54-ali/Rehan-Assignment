var current_users = ['john', 'jane', 'bob', 'alice', 'dan'];
var new_users = ['mike', 'sara', 'jane', 'bill', 'jOHN'];
for (var i = 0; i < new_users.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, the username '".concat(new_users[i], "' is available!"));
    }
}

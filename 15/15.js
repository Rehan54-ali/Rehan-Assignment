var invitation = ["ali", "arsalan", "imran"];
var guest = invitation.indexOf("Imran");
invitation.splice(guest, 2);
invitation.push("shoaib");
for (var i = 0; i < invitation.length; i++) {
    console.log("Dear " + invitation[i] + " i would like to invite you to join for dinner");
}

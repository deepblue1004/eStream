
$(function () {

    initApp();

    //Sign Out

    $(".save").click(function (e) {
        alert("Password is updated.");
        window.location.href = "Profile.html";
    });

    $(".cancel").click(function (e) {
        window.location.href = "UpdateProfile.html";
    });

});


function GetProfileDetails() {
    var user = firebase.auth().currentUser;
    var dataMembers = firebase.database().ref('/Members/' + user.uid);
    dataMembers.on("value", function (data) {

        $("#name").html(data.val().Name);

    });
};

function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            // User is signed in.

            GetProfileDetails();
        }
        else {
            alert("You have sign out.");
            window.location.href = "SignInPage.html";
        }
    });
    // [END authstatelistener]

}


    //</script>
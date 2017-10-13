
//<script>


$(function () {

    initApp();

    //Sign Out

    $(".signout").click(function (e) {
        firebase.auth().signOut();
    });

    $(".change").click(function (e) {
        window.location.href = "ChangePassword.html";
    });

});


function GetProfileDetails() {
    var user = firebase.auth().currentUser;
    var dataMembers = firebase.database().ref('/Members/' + user.uid);
    dataMembers.on("value", function (data) {

        $("#name").html(data.val().Name);
        $("#email").html(data.val().Email);
        $("#mobile").html(data.val().Mobile);
        $("#address").html(data.val().Address);
        $("#emerName").html(data.val().Emergency_Name);
        $("#emerMobile").html(data.val().Emergency_Number);
        $("#txtPhotoURL").html('<img src=\"' + data.val().Image + '\" width=\"100px\" + height=\"100px\">');

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
            alert("You have sign out successfully");
            window.location.href = "SignInPage.html";
        }
    });
    // [END authstatelistener]

}


//</script>
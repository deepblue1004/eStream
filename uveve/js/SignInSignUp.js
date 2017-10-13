
    //<script type="text/javascript">
    $(function () {

        initApp();


        $(".signin").click(function (e) {
            var email = $(".txtEmail").val();
            var password = $(".txtPassword").val();


            if (email.length < 4) {
                $("#insert").html("<h4 style=\"color:red\">Please enter an email address.</h4>");
                return;
            }

            if (password.length < 4) {
                $("#insert").html("<h4 style=\"color:red\">Please enter a password.</h4>");
                return;
            }


            // Sign in with email and pass.
            // [START authwithemail]
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password')
                    $("#insert").html("<h4 style=\"color:red\">Wrong password.</h4>");
                else
                    $("#insert").html("<h4 style=\"color:red\">" + errorMessage + "</h4>");

                console.log(error);
            });

            if (firebase.auth().currentUser)
                window.location.href = "Profile.html";


        });


        $(".signup").click(function (e) {
            var email = $(".txtEmail").val();
            var password = $(".txtPassword").val();


            if (email.length == 0) {
                $("#insert").html("<h4 style=\"color:red\">Please enter an email address.</h4>");
                return;
            }
            

            if (password.length == 0) {
                $("#insert").html("<h4 style=\"color:red\">Please enter a password.</h4>");
                return;
            }


            // Sign up with email and pass.
            // [START createwithemail]
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/weak-password')
                    $("#insert").html("<h4 style=\"color:red\">The password is too weak.</h4>");
                else
                    $("#insert").html("<h4 style=\"color:red\">" + errorMessage + "</h4>");

                console.log(error);
                // [END_EXCLUDE]
            });
            // [END createwithemail]
            if (firebase.auth().currentUser)
                window.location.href = "UpdateProfile.html";
        });

    });



    function initApp() {
        // Listening for auth state changes.
        // [START authstatelistener]
        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                // User is signed in.

                window.location.href = "UpdateProfile.html";

            }
        });
        // [END authstatelistener]
    }
//</script>
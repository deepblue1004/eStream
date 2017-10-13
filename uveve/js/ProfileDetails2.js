function Toggle() {
    $(".body-down").toggle()
};


var inputGlobal;
function openFile(event) {
    var input = event.target.files[0];
    inputGlobal = input;
};

$(function () {
    
    $(".cancel").click(function (e) {
        window.location.href = "Profile.html";
    });

    var URL;

    $("#Upload").click(function (e) {
        var storageRef = firebase.storage().ref();
        var display = "";
        var metadata = {
            contentType: 'MemberProfilePicture/jpeg'

        };
        $("#process").text("Uploading...");
        var uploadTask = storageRef.child('MemberProfilePicture/' + inputGlobal.name).put(inputGlobal, metadata).then(function () {

            storageRef.child('MemberProfilePicture/' + inputGlobal.name).getDownloadURL().then(function (url) {


                $("#process").hide();
                display += "<img src=\"" + url + "\" width=\"100px\" + height=\"100px\">";
                $("#result").html(display);
                alert("Upload successfully!");

                URL = url;

            });

        });
    });

    $(".save").click(function (e) {

        var name = $(".name").val();
        var email = $(".email").val();
        var mobile = $(".mobile").val();
        var address = $(".address").val();
        var emerName = $(".emerName").val();
        var emerMobile = $(".emerMobile").val();
        var txtPhotoURL = URL; //$(".txtPhotoURL").val();

        if (name == "" || email == "" || mobile == "" || address == "" || emerName == "" || emerMobile == "" || txtPhotoURL == "")
            $("#error").html("<h4 style=\"color:red\">Please fill in all the required field.</h4>");
        else {

            var user = firebase.auth().currentUser;

            var obj = new Object();
            obj.Name = name;
            obj.Email = email;
            obj.Mobile = mobile;
            obj.Address = address;
            obj.Emergency_Name = emerName;
            obj.Emergency_Number = emerMobile;
            obj.Image = txtPhotoURL;
            obj.Uid = user.uid;

            var updates = {};
            updates['/Members/' + user.uid] = obj;

            firebase.database().ref().update(updates).then(function () {

                $(".name").val("");
                $(".email").val("");
                $(".mobile").val("");
                $(".address").val("");
                $(".emerName").val("");
                $(".emerMobile").val("");
                $(".txtPhotoURL").val("");

                alert("Inserted Successfully");
                window.location.href = "welcomepage.html";
            });
        }
    });
});
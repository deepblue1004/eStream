$(function () {

    $(".save").click(function (e) {

        var name = $(".name").val();
        var room = $(".room").val();
        var mobile = $(".mobile").val();
        var address = $(".address").val();
        var review = $(".review").val();
        var improve = $(".improve").val();
        // var txtPhotoURL = $(".txtPhotoURL").val();

        if (name == "" || room == "" || mobile == "" || address == "" || review== "" || improve == "")
            $("#error").html("<h4 style=\"color:red\">Please fill in all the required field.</h4>");
        else {

            var user = firebase.auth().currentUser;


            var obj = new Object();
            obj.Name = name;
            obj.Room = room;
            obj.Mobile = mobile;
            obj.Address = address;
            obj.Review = review;
            obj.Improve = improve;
            // obj.Image = txtPhotoURL;
            obj.Uid = user.uid;

            // Get a key for a new Member.
            var newPostKey = firebase.database().ref().child('rating').push().key;

            var updates = {};
            updates['/rating/' + newPostKey] = obj;
            updates['/user-rating/' + user.uid + '/' + newPostKey] = obj;

            firebase.database().ref().update(updates).then(function () {
                $("#insert").html('<h4 style=\"color:red\">Insert Successfully</h4>');

                $(".name").val("");
                $(".room").val("");
                $(".mobile").val("");
                $(".address").val("");
                $(".review").val("");
                $(".improve").val("");
                // $(".txtPhotoURL").val("");
            });
        }
    });
});
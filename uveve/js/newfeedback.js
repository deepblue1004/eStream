$(function () {
    
        $(".save").click(function (e) {
    
            var name = $(".name").val();
            var room = $(".room").val();
            var mobile = $(".mobile").val();
            var address = $(".address").val();
            var complaint = $(".complaint").val();
            var descript = $(".descript").val();
            // var txtPhotoURL = $(".txtPhotoURL").val();
    
            if (name == "" || room == "" || mobile == "" || address == "" || complaint == "" || descript == "")
                $("#error").html("<h4 style=\"color:red\">Please fill in all the required field.</h4>");
            else {
    
                var user = firebase.auth().currentUser;
    
    
                var obj = new Object();
                obj.Name = name;
                obj.Room = room;
                obj.Mobile = mobile;
                obj.Address = address;
                obj.Complaint = complaint;
                obj.Descript = descript;
                // obj.Image = txtPhotoURL;
                obj.Uid = user.uid;
    
                // Get a key for a new Member.
                var newPostKey = firebase.database().ref().child('feedback').push().key;
    
                var updates = {};
                updates['/feedback/' + newPostKey] = obj;
                updates['/user-feedback/' + user.uid + '/' + newPostKey] = obj;
    
                firebase.database().ref().update(updates).then(function () {
                    $("#insert").html('<h4 style=\"color:red\">Insert Successfully</h4>');
    
                    $(".name").val("");
                    $(".room").val("");
                    $(".mobile").val("");
                    $(".address").val("");
                    $(".complaint").val("");
                    $(".descript").val("");
                    // $(".txtPhotoURL").val("");
                });
            }
        });
    });
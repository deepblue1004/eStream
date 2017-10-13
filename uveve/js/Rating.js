$(function () {

    $(".save").click(function (e) {

        // var name = $(".name").val();
        // var email = $(".email").val();
        // var mobile = $(".mobile").val();
        // var address = $(".address").val();
        // var emerName = $(".emerName").val();
        // var emerMobile = $(".emerMobile").val();
        // var txtPhotoURL = $(".txtPhotoURL").val();


            var room = $(".room").val();
            var rating1 = $(".rating1").val();
            var rating2 = $(".rating2").val();
            var rating3 = $(".rating3").val();
            var rating4 = $(".rating4").val();
            var rating5 = $(".rating5").val();
            var title = $(".title").val();
            var review = $(".review").val();
            var service1 = $(".service1").val();
            var service2 = $(".service2").val();
            var service3 = $(".service3").val();
            var service4 = $(".service4").val();
            var service5 = $(".service5").val();
            var value1 = $(".value1").val();
            var value2 = $(".value2").val();
            var value3 = $(".value3").val();
            var value4 = $(".value4").val();
            var value5 = $(".value5").val();
            var quality1 = $(".quality1").val();
            var quality2 = $(".quality2").val();
            var quality3 = $(".quality3").val();
            var quality4 = $(".quality4").val();
            var quality5 = $(".quality5").val();
            var optional = $(".optional").val();


        if (room == "" || titlereview == "" || optional == "")
            $("#error").html("<h4 style=\"color:red\">Please fill in all the required field.</h4>");
        else {

            var user = firebase.auth().currentUser;


            var obj = new Object();
            // obj.Name = name;
            // obj.Email = email;
            // obj.Mobile = mobile;
            // obj.Address = address;
            // obj.Emergency_Name = emerName;
            // obj.Emergency_Number = emerMobile;
            // obj.Image = txtPhotoURL;

            
            obj.Room = room;
            obj.Rating1 = rating1;
            obj.Rating2 = rating2;
            obj.Rating3 = rating3;
            obj.Rating4 = rating4;
            obj.Rating5 = rating5;
            obj.Title = title;
            obj.Review = review;
            obj.Service1 = service1;
            obj.Service2 = service2;
            obj.Service3 = service3;
            obj.Service4 = service4;
            obj.Service5 = service5;
            obj.Value1 = value1;
            obj.Value2 = value2;
            obj.Value3 = value3;
            obj.Value4 = value4;
            obj.Value5 = value5;
            obj.Quality1 = quality1;
            obj.Quality2 = quality2;
            obj.Quality3 = quality3;
            obj.Quality4 = quality4;
            obj.Quality5 = quality5;
            obj.Optional = optional;
            


            obj.Uid = user.uid;

            // Get a key for a new Member.
            var newPostKey = firebase.database().ref().child('review').push().key;

            var updates = {};
            updates['/review/' + newPostKey] = obj;
            updates['/user-review/' + user.uid + '/' + newPostKey] = obj;

            firebase.database().ref().update(updates).then(function () {
                $("#insert").html('<h4 style=\"color:red\">Insert Successfully</h4>');

                // $(".name").val("");
                // $(".email").val("");
                // $(".mobile").val("");
                // $(".address").val("");
                // $(".emerName").val("");
                // $(".emerMobile").val("");
                // // $(".txtPhotoURL").val("");

                $(".room").val("");
                $(".rating1").val("");
                $(".rating2").val("");
                $(".rating3").val("");
                $(".rating4").val("");
                $(".rating5").val("");
                $(".titlereview").val("");
                $(".review").val("");
                $(".service1").val("");
                $(".service2").val("");
                $(".service3").val("");
                $(".service4").val("");
                $(".service5").val("");
                $(".value1").val("");
                $(".value2").val("");
                $(".value3").val("");
                $(".value4").val("");
                $(".value5").val("");
                $(".quality1").val("");
                $(".quality2").val("");
                $(".quality3").val("");
                $(".quality4").val("");
                $(".quality5").val("");
                $(".optional").val("");
            });
        }
    });
});
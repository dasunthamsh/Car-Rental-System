
//check role
$(document).ready(function() {
    $("#Role").on("change", function() {
        const selectedRole = $(this).val();

        if (selectedRole === "Admin") {
            $("#roleVidTow").prop("hidden", true);
        } else if (selectedRole === "Driver") {
            $("#disableForDriver").prop("hidden", true);
            $("#roleVidTow").prop("hidden", false);

        } else {
            $("#roleVidTow").prop("hidden", false);
            $("#disableForDriver").prop("hidden", false);
        }
    });
});






const mainUrl = "http://localhost:8080/rent/";

var roal = undefined;

$("#btnReg").click(function (){

    var role = $("#Role").val();

    const selectedRole = $("#Role").val();
    if(selectedRole=="Admin"){
        roal="admin";
        addAdmin();
        // var details={
        //     "adminId": id,
        //     "name": name,
        //     "contactNo": number,
        //     "email": email,
        //     "userName": username,
        //     "password": password
        // }
        // alert(details)


    }else if (selectedRole=="Customer"){
        roal="customer";
        addCustomer();
        // var details={
        //     "adminId": id,
        //     "name": name,
        //     "address": address,
        //     "contactNo": number,
        //     "email": email,
        //     "nicNo": nicNumber,
        //     "nicFrontImage": idFrontPhoto,
        //     "nicBackImage": idCardBackPhoto,
        //     "licenceNo": idCardNumber,
        //     "licenceImage": idPhoto,
        //     "userName": username,
        //     "password": password
        // }
        // alert(details)

    }else{
        roal="driver";
        // var details={
        //     "name": name,
        //     "address": address,
        //     "contactNo": number,
        //     "nicNo": nicNumber,
        //     "licenceNo": idCardNumber,
        //     "userName": username,
        //     "password": password
        // }
        // alert(details)
    }

function addAdmin() {

    // var attendId = $("#attendId").val();
    // var attendName = $("#attendName").val();
    // var email = $("#email").val();
    // var username = $("#username").val();
    // var password = $("#password").val();
    // var idCardNumber = $("#idCardNumber").val();
    // var nicNumber = $("#nicNumber").val();
    // var address = $("#address").val();
    // var number = $("#phoneNumber").val();
    // var idFrontPhoto = $("#idCardPhotoFront").val();
    // var idCardBackPhoto = $("#idCardPhotoBack").val();
    // var idPhoto = $("#nicPhoto").val();


    var admin = {
        "adminId": $("#attendId").val(),
        "name": $("#attendName").val(),
        "contact": $("#phoneNumber").val(),
        "email": $("#email").val(),
        "username": $("#username").val(),
        "password": $("#password").val()
    }


    $.ajax({
        url: mainUrl + roal,
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(admin),
        dataType: "json",
        success: function (resp) {
            alert(resp)
        },
        error: function (ob) {

        }

    });
}

    function addCustomer(){

    var customer = {
        "customerId": $("#attendId").val(),

    }
});

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
       roal="customer/up/";
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
    // var idCardNumber = $("#licenceNo").val();
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
        "name": $("#attendName").val(),
        "address":$("#address").val(),
        "contactNo":$("#phoneNumber").val(),
        "email":$("#email").val(),
        "nicNo":$("#nicNumber").val(),
        "licenceNo":$("#licenceNo").val(),
        "userName": $("#username").val(),
        "password":$("#password").val()


        }

        $.ajax({

            url: mainUrl+roal,
            method: "post",
            contentType: "application/json",
            data: JSON.stringify(customer),
            success: function (resp){
                customerImg(id);
            },
            error:function ()
            {}

        });


    function customerImg(id){
        var fileObjectNic1 = $("#idCardPhotoFront")[0].file[0];
        var fileNameNic1 = id + "-nicfront-" + $("#idCardPhotoFront")[0].file[0].name

        var fileObjectNic2 = $('#idCardPhotoBack')[0].files[0];
        var fileNameNic2 = id + "-nicback-" + $('#idCardPhotoBack')[0].files[0].name;

        var fileObjectLicence = $('#licencePhoto')[0].files[0];
        var fileNameLicence = id + "-licence-" + $('#licencePhoto')[0].files[0].name;


        var data = new FormData();
        data.append("nicf", fileObjectNic1, fileNameNic1);
        data.append("nicb", fileObjectNic2, fileNameNic2);
        data.append("licenceImg", fileObjectLicence, fileNameLicence);

        $.ajax({

           url:mainUrl+roal+id,
            method:"put",
            async:true,
            contentType:false,
            processData: false,
            data:data,
            success:function (res){

            },
            error:function (ob) {

            }

        });
    }

    }
});
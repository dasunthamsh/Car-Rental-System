
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






//const mainUrl = "http://localhost:8080/rent/";

var roal = undefined;

$("#btnReg").click(function (){

    var role = $("#Role").val();

    const selectedRole = $("#Role").val();
    if(selectedRole=="Admin"){
        addAdmin();


    }else if (selectedRole=="Customer"){
        addCustomer();

    }else{
        roal="driver";
    }

function addAdmin() {



    var admin = {
        "adminId": $("#attendId").val(),
        "name": $("#attendName").val(),
        "contact": $("#phoneNumber").val(),
        "email": $("#email").val(),
        "username": $("#username").val(),
        "password": $("#password").val()
    }


    $.ajax({
        url: baseUrl + "admin",
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


        var formData = new FormData();

        var customerId = $("#attendId").val();
        var name = $("#attendName").val();
        var email = $("#email").val();
        var userName = $("#username").val();
        var password = $("#password").val();
        var licenceNo = $("#licenceNo").val();
        var nicNo = $("#nicNumber").val();
        var address = $("#address").val();
        var contactNo = $("#phoneNumber").val();
        // var idFrontPhoto = $("#idCardPhotoFront").val();
        // var idCardBackPhoto = $("#idCardPhotoBack").val();
        // var idPhoto = $("#nicPhoto").val();

        formData.append("customerId", customerId);
        formData.append("name", name);
        formData.append("address",address);
        formData.append("contactNo",contactNo);
        formData.append("email",email);
        formData.append("nicNo",nicNo);
        formData.append("licenceNo",licenceNo);
        formData.append("userName",userName);
        formData.append("password",password);


        let imgBack = $("#idCardPhotoFront")[0].files[0];
        let imgBackName = $("#idCardPhotoFront")[0].files[0].name;
        formData.append("imgFrontFile", imgBack, imgBackName);

        let imgSide = $("#idCardPhotoBack")[0].files[0];
        let imgSideName = $("#idCardPhotoBack")[0].files[0].name;
        formData.append("imgBackFile", imgSide, imgSideName);

        let imgInside = $("#licencePhoto")[0].files[0];
        let imgInsideName = $("#licencePhoto")[0].files[0].name;
        formData.append("imgLicenceFile", imgInside, imgInsideName);


            $.ajax({
                url:baseUrl+"customer/saveImg",
                method: "post",
                data: formData,
                dataType: "json",
                async: true,
                contentType: false,
                processData: false,
                enctype: "multipart/form-data",
                success:function (resp) {
                    alert("successful Uploaded");
                },
                error:function (err){
                    console.log(err);
                }

            });


    }

});

//      pop window and close window

$('#btnPopUp').click(function (){
    $('.registrationModal').css("display","block");
});

$("#closePop").click(function (){
    $('.registrationModal').css("display","none");

});
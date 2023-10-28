$("#driverSave").click(function (){


    var driver = {
        "licenceNo":$("#nicNumber").val(),
        "name":$("#attendName").val(),
        "address":$("#address").val(),
        "contactNo":$("#phoneNumber").val(),
        "nicNo":$("#licenceNo").val(),
        "username":$("#username").val(),
        "password":$("#password").val(),
        "email":$("#email").val(),
        "availability":"Available"
    }

    $.ajax({
        url:baseUrl+"driver",
        method:"post",
        dataType:"json",
        contentType:"application/json",
        data:JSON.stringify(driver),
        success:function (resp){
            alert(resp);
        },
        error:function (error){
            alert(error);
        }
    });
});
//login function


// function customerLogin(){
//
//
//     var loginOb = {
//         "username":$("#LoginUsername").val(),
//         "password":$("#LoginPassword").val()
//     }
//
//     $.ajax({
//         url:baseUrl+"login",
//         method:"post",
//         contentType: 'application/json',
//         data: JSON.stringify(loginOb),
//         success: function(response) {
//             console.log(response);
//         }
//     });
//
// }


$(document).ready(function () {
    $('#loginHeaderBtn').on('click', function () {
        $('#loginSection').show();
        $('#loginHeaderBtn').hide();
    });

    $('#closeWindowInLogin').on('click', function () {
        $('#loginSection,#loginBtn').hide();
        $('#loginHeaderBtn').show();
    });
});


//check role
$(document).ready(function () {
    $("#Role").on("change", function () {
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

$("#btnReg").click(function () {

    var role = $("#Role").val();

    const selectedRole = $("#Role").val();
    if (selectedRole == "Admin") {
        addAdmin();


    } else if (selectedRole == "Customer") {
        addCustomer();

    } else {
        roal = "driver";
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

    function addCustomer() {


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


        formData.append("customerId", customerId);
        formData.append("name", name);
        formData.append("address", address);
        formData.append("contactNo", contactNo);
        formData.append("email", email);
        formData.append("nicNo", nicNo);
        formData.append("licenceNo", licenceNo);
        formData.append("userName", userName);
        formData.append("password", password);


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
            url: baseUrl + "customer/saveImg",
            method: "post",
            data: formData,
            dataType: "json",
            async: true,
            contentType: false,
            processData: false,
            enctype: "multipart/form-data",
            success: function (resp) {
                alert("successful Uploaded");
                loadDataToLogin();
            },
            error: function (err) {
                console.log(err);
            }

        });


    }

});

// fill login table

function loadDataToLogin() {


    var loginObject = {
        "password": $("#password").val(),
        "username": $("#username").val(),
        "role": $("#Role").val()
    }

    $.ajax({
        url: baseUrl + "login",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(loginObject),
        dataType: "json",
        success: function (resp) {
            alert(resp)

        },
        error: function (error) {
            alert("error");
        }


    });
}

$("#loginBtn").click(function () {

    $.ajax({
        url: baseUrl + "login/" + $("#LoginUsername").val(),
        method: "get",
        success: function (resp) {
            console.log(resp);


            alert("successful login");

            if ($("#LoginRole").val() === "Customer") {
            }
            if ($("#LoginRole").val() === "Admin") {

                window.location.href = "assets/admin/dashboard.html";

            }
            if ($("#LoginRole").val() === "Driver") {

                window.location.href = "assets/admin/driverdetails.html";


            }
        }
    });
});


////////////////// load all customer


loadCarsToDashboard = () => {


    $.ajax({
        url: baseUrl + "car",
        method: "get",
        success: function (resp) {
            for (let i of resp.data) {


                var registrationNO = i.registrationNO;
                var brand = i.brand;
                var type = i.type;
                var noOfPassengers = i.noOfPassengers;
                var transmissionType = i.transmissionType;
                var fuelType = i.fuelType;
                var color = i.color;
                var dailyRate = i.dailyRate;
                var monthlyRate = i.monthlyRate;
                var lossDamageWaiver = i.lossDamageWaiver;
                var priceForExtraKm = i.priceForExtraKm;
                var freeMileage = i.freeMileage;
                var frontViewImage = i.frontViewImage;
                var backView = i.backView;
                var sideView = i.sideView;
                var internalView = i.internalView;



                var returnCarType = `<option value="location1">${brand}</option>`
                $("#SearchCarType").append(returnCarType);

                var addSection = `<div class=" h-100 w-100 m-4 shadow-lg p-5 mb-5 bg-white rounded">

                                            <div class="d-flex align-item-center justify-content-center">
                                                <h2>${brand}</h2>
                                            </div>

                                                <img src="${'assets/img/' + frontViewImage}" class="d-block w-100" alt="...">
                                                <div class="h-50 bg-secondary"></div>

                                                <div class="d-flex mt-3">
                                                    <h6>No Of Passengers   &nbsp;&nbsp; : &nbsp;&nbsp; </h6>
                                                    <h6 id="textPassenger">${noOfPassengers}</h6>
                                                </div>
                                                <div class="d-flex mt-3">
                                                    <h6>Price For Extra Km   &nbsp;&nbsp; : &nbsp;&nbsp; </h6>
                                                    <h6>${priceForExtraKm}</h6>
                                                </div>
                                                <div class="d-flex mt-3">
                                                    <h6>fuel Type  &nbsp;&nbsp; : &nbsp;&nbsp; </h6>
                                                    <h6>${fuelType}</h6>
                                                </div>
                                                 <div class="d-flex mt-3">
                                                    <h6>Color   &nbsp;&nbsp; : &nbsp;&nbsp; </h6>
                                                    <h6>${color}</h6>
                                                </div>
                                                 <div class="d-flex mt-3">
                                                    <h6>Registration NO   &nbsp;&nbsp; : &nbsp;&nbsp; </h6>
                                                    <h6 id="regNumberH6">${registrationNO}</h6>
                                                </div>
                                                 <div class="d-flex mt-3">
                                                    <h6> Transmission Type  &nbsp;&nbsp; : &nbsp;&nbsp; </h6>
                                                    <h6>${transmissionType}</h6>
                                                </div>

                                              <button id="btnPopUp"  class="btn btn-primary mt-2 shadow-none border-0">Reserve Now</button>
                                            </div>`


                $("#carDiv").append(addSection);




// Event listener for the btnPopUp click
                $("#btnPopUp").on("click", function() {
                    // Smooth scroll to the target element with id "searchButton"
                    $('html, body').animate({
                        scrollTop: $("#scroll").offset().top
                    },10); // You can adjust the duration of the animation as needed
                });



                $("#carDiv").on("click", "#btnCarRent", function () {

                    // var rentFormDate = new FormData();

                    let pickupDate = $("#picUpTime").val();
                    let returnDate = $("#ReturnDate").val();
                    let pickUpVenue = $("#picUpPlace").val();
                    let returnVenue = $("#returnPlace").val();
                    let customerId = $("#customerId").val();
                    let rentId = $("#carDiv").find("#rentId").text();
                    let date = localDate;
                    let status = "Pending";   // catch request
                    let registrationNO = $("#carDiv").find("#regNumberH6").text();


                    // rentFormDate.append("rentId", rentId);
                    // rentFormDate.append("date", date);
                    // rentFormDate.append("pickupDate", pickupDate);
                    // rentFormDate.append("returnDate", returnDate);
                    // rentFormDate.append("pickUpVenue", pickUpVenue);
                    // rentFormDate.append("returnVenue", returnVenue);
                    // rentFormDate.append("status", status);
                    // rentFormDate.append("registrationNO", registrationNO);
                    // rentFormDate.append("customerId", customerId);

                    var rent = {
                        "rentId": rentId,
                        "date": date,
                        "pickupDate": pickupDate,
                        "returnDate": returnDate,
                        "pickUpVenue": pickUpVenue,
                        "returnVenue": returnVenue,
                        "status": status,
                        "car": {
                            "registrationNO": registrationNO
                        },
                        "customer": {
                            "customerId": customerId
                        }
                    }

                    //  let imgFront = $("#frontView")[0].files[0];
                    //  let imgFrontName = $("#frontView")[0].files[0].name;
                    // rentFormDate.append("imgBankSlip", imgFront, imgFrontName);


                    $.ajax({
                        url: baseUrl + "addRent",
                        method: "post",
                        data: JSON.stringify(rent),
                        dataType: "json",
                        contentType: "application/json",
                        // async: true,
                        // contentType: false,
                        // processData: false,
                        // enctype: "multipart/form-data",
                        success: function (resp) {
                            alert("successful Uploaded");
                        },
                        error: function (err) {
                            console.log("you must login or register");
                        }

                    });
                });

            }
        }
    });

}


//     $(document).on("click","#btnCarRent",function (){
//     var rentFormDate = new FormData();
//     var rentId = document.getElementById("rentId").textContent;
//     var date = localDate;
//     var pickupDate = document.getElementById("picUpTime").value;
//     var returnDate = document.getElementById("ReturnDate").value;
//     var pickUpVenue = document.getElementById("picUpPlace").value;
//     var returnVenue = document.getElementById("returnPlace").value;
//     var status = "Pending"; // catch request
//     var registrationNO = document.getElementById("regNumberH6").textContent;
//     var customerId = document.getElementById("customerId").value;
//
//     rentFormDate.append("rentId", rentId);
//     rentFormDate.append("date", date);
//     rentFormDate.append("pickupDate", pickupDate);
//     rentFormDate.append("returnDate", returnDate);
//     rentFormDate.append("pickUpVenue", pickUpVenue);
//     rentFormDate.append("returnVenue", returnVenue);
//     rentFormDate.append("status", status);
//     rentFormDate.append("registrationNO", registrationNO);
//     rentFormDate.append("customerId", customerId);
//
//         var imgFront = document.getElementById("bankSlip");
//         if (imgFront.files.length > 0) {
//             var imgFrontFile = imgFront.files[0];
//             var imgFrontName = imgFront.files[0].name;
//             rentFormDate.append("imgBankSlip", imgFrontFile, imgFrontName);
//         } else {
//             console.error("No file selected");
//             return;
//         }
//
//
//         var xhr = new XMLHttpRequest();
//     xhr.open("POST", baseUrl + "addRent/addBooking");
//     xhr.send(rentFormDate);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             alert("Successfully Uploaded");
//         } else {
//             console.error(xhr.responseText);
//         }
//     };
//     xhr.onerror = function () {
//         console.error(xhr.statusText);
//     };
// });
//

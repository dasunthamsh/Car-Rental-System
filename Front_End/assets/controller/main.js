
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




////////////////// load all customer

loadCarsToDashboard=()=> {

    $.ajax({
        url: baseUrl+"car",
        method: "get",
        success:function (resp){
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
                var status = i.status;

                console.log(i);

                var addSection = `<div  class="carousel-item active">
                        <section class="ovrVehicleClass">
                            <h1>${type}</h1>
                            <h2>${brand}</h2>
                        </section>

                        <img src="${(resp.status === 200) ? (baseUrl + frontViewImage) : ('assets/img/' + frontViewImage)}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <div id="carDetails"  style="color: black">
                                <aside>
                                    <div>
                                        <img src="assets/img/seet.png" width="50">
                                    </div>
                                    <h6 id="textPassenger">${noOfPassengers}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/speed.png" width="50">
                                    </div>
                                    <h6>${priceForExtraKm}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/fule.png" width="50">
                                    </div>
                                    <h6>${fuelType}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/color.png" width="50">
                                    </div>
                                    <h6>${color}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/bumber.png" width="50">
                                    </div>
                                    <h6>${registrationNO}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <img src="assets/img/type.png" width="50">
                                    </div>
                                    <h6>${transmissionType}</h6>
                                </aside>
                                <aside>
                                    <div>
                                        <button  id="btnPopUp" class="border-light rounded-circle shadow-none">
                                            <img src="assets/img/white.png" width="50">                                            
                                      </button>
                                    </div>
                                    <h6>l</h6>
                                </aside>
                            </div>
                        </div>
                        
                  
            
<!--                        //////////////////////////////////////////-->
                        
                        <div class="registrationModal" id="popUpdiv">
                        <div id="innerDiv" class="container">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <!-- Modal Header -->
                                    <div class="modal-header">
                                        <h4 class="modal-title">Rent Vehicle</h4>
                                        <a class="close" id="closeWindow" href="#">&times;</a>

                                    </div>

                                    <!-- Modal Body - Images and Form -->
                                    <div class="modal-body">
                                        <div class="container">
                                            <div class="row popImgContainer mt-5">
                                                <div class="col-md-4 popUpImg">
                                                    <img src="" class="img-fluid" alt="Image 1">
                                                </div>
                                                <div class="col-md-4 popUpImg">
                                                    <img src="#" class="img-fluid" alt="Image 2">
                                                </div>
                                                <div class="col-md-4 popUpImg">
                                                    <img src="#" class="img-fluid" alt="Image 3">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Form -->
                                        <form id="registrationForm" >
                                            <div class="row mt-5">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="dalyRate">${noOfPassengers}</label>
                                                        <input type="text" class="form-control" id="dalyRate" value="${noOfPassengers}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="monthlyRate">Monthly rate</label>
                                                        <input type="text" class="form-control" id="monthlyRate" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="CarAvailability">Car Availability</label>
                                                        <input type="text" class="form-control" id="CarAvailability" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="customerId">CustomerId</label>
                                                        <input type="text" class="form-control" id="customerId" required>
                                                    </div>

                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="lossDamage">Loss Damage</label>
                                                        <input type="text" class="form-control" id="lossDamage" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="status">status</label>
                                                        <input type="text" class="form-control" id="status" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ReturnDate">Return Date</label>
                                                        <input type="date" class="form-control" id="ReturnDate" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="picUpTime">PicUp Time</label>
                                                        <input type="date" class="form-control" id="picUpTime" required>
                                                    </div>

                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="priceForExtraKm">price For Extra Km</label>
                                                        <input type="text" class="form-control" id="priceForExtraKm" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="freeMileage">free Mileage </label>
                                                        <input type="text" class="form-control" id="freeMileage" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="returnPlace">Return Place</label>
                                                        <input type="text" class="form-control" id="returnPlace" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="picUpPlace">picUp Place</label>
                                                        <input type="text" class="form-control" id="picUpPlace" required>
                                                    </div>
                                                </div>

                                                <button type="submit" class="btn btn-primary mt-5 col-md-2">Submit</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                 </div>`;


                $("#viewImg").append(addSection);

                $(document).ready(function() {
                    $(document).on("click", "#btnPopUp", function() {
                        // Find and show the associated modal based on the structure of your HTML
                        $(this).closest('.carousel-item').find('.registrationModal').css("display", "block");
                    });
                });


                $(document).ready(function() {
                    // Close the modal when clicking the closeWindow element
                    $(document).on("click", "#closeWindow", function(e) {
                        e.preventDefault(); // Prevent the default action of the link
                        $(this).closest('.registrationModal').css("display", "none");
                    });
                });

            }


        }
    });

}
//
// $('#btnPopUp, #closePop').click(function() {
//     $('.registrationModal').toggle();
// });
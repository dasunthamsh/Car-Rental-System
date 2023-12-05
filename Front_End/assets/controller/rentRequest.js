
loadRentRequest=()=>{

    $.ajax({
        url:baseUrl+"addRent",
        method:"get",
        success:function (resp){
            for (const i of resp.data) {
                var driver = i.driver;
                var rentId = i.rentId;
                var picUpDate = i.pickupDate;
                var picUpPlace = i.pickUpVenue;
                var returnDate = i.returnDate
                var returnPlace = i.returnVenue;
                var status = i.status;
                var time = i.date;

                if (i.car) {
                    var registrationNO = i.car.registrationNO;
                }
                if (i.customer) {
                    var customerId = i.customer.customerId;
                }
                if (i.driver) {
                    var licenceNo = i.driver.licenceNo;
                }

                var row = `<tr><td>${rentId}</td><td>${registrationNO}</td><td>${customerId}</td><td>${licenceNo}</td><td>${picUpDate}</td><td>${picUpPlace}</td><td>${returnDate}</td><td>${returnPlace}</td><td>${status}</td><td>${time}</td></tr>`;
                $("#rentRequestTableBody").append(row);

                if (status==="Pending"){
                    $("#rentRequestTableBody tr:last").css("background-color", "blue");

                }else {
                    $("#rentRequestTableBody tr:last").css("background-color", "yellow");

                }


                // $("#btnPendingTable").click(function (){
                //
                // });
                //
                // $("#btnReturnTable").click(function (){
                //
                // });
                //
                // if (status=="accept"){
                //
                //     var row = `<tr><td>${rentId}</td><td>${registrationNO}</td><td>${customerId}</td><td>${driver}</td><td>${picUpDate}</td><td>${picUpPlace}</td><td>${returnDate}</td><td>${returnPlace}</td><td>${status}</td><td>${time}</td></tr>`;
                //     $("#rentRequestTableBody").append(row);
                //
                // }if (status=="Pending"){
                //     var row = `<tr><td>${rentId}</td><td>${registrationNO}</td><td>${customerId}</td><td>${driver}</td><td>${picUpDate}</td><td>${picUpPlace}</td><td>${returnDate}</td><td>${returnPlace}</td><td>${status}</td><td>${time}</td></tr>`;
                //     $("#rentRequestTableBody").append(row);
                // }


            }
        }
    });
}


let datee;
let pickUpPlace;
let returnPlace;
let pickUpDate;
let returnDate;

$(document).ready(function() {
    $('#requestTable tbody').on('click', 'tr', function() {
        var rentId = $(this).find('td:eq(0)').text();
        var carRegNumber = $(this).find('td:eq(1)').text();
        var customerId = $(this).find('td:eq(2)').text();
         pickUpDate = $(this).find('td:eq(4)').text();
         pickUpPlace = $(this).find('td:eq(5)').text();
        returnDate = $(this).find('td:eq(6)').text();
         returnPlace = $(this).find('td:eq(7)').text();
       // var status = $(this).find('td:eq(8)').text();
        datee = $(this).find('td:eq(9)').text();


            $("#rentRequestRentId").val(rentId);
            $("#rentRequestCustomer").val(customerId);
            $("#rentRequestCarRegNo").val(carRegNumber);


    });
});



$("#acceptRentRequest").click(function (){



    var putRent = {
        "rentId":$("#rentRequestRentId").val(),
        "driver" : {
            "licenceNo": $("#rentRequestDriver").val()
        },
        "car": {
            "registrationNO": $("#rentRequestCarRegNo").val()
        },
        "customer": {
            customerId : $("#rentRequestCustomer").val()
        },
        "status":"accept",
        "date":datee,
        "pickupDate":pickUpDate,
        "returnDate":returnDate,
        "pickUpVenue":pickUpPlace,
        "returnVenue":returnPlace

    }
    console.log(putRent);

    $.ajax({
        url:baseUrl+"addRent/updateRent",
        method: "put",
        contentType:"application/json",
        data:JSON.stringify(putRent),
        dataType:"json",
        success:function (resp){
            alert("booking added");
            updateDriver();
            updateCar();
        }

    });
});


function updateDriver(){

    $.ajax({
        url:baseUrl+`addRent?rentId=${ $("#rentRequestRentId").val()}&option=notAvailable`,
        method:"put",
        dataType: "json",
        contentType: "application/json",
        success:function (resp){

        }
    });
}


function updateCar(){

    $.ajax({
        url:baseUrl+`addRent/updateCar?rentId=${ $("#rentRequestRentId").val()}&option=notAvailable`,
        method:"put",
        dataType: "json",
        contentType: "application/json",
        success:function (resp){

        }
    });
}





//////////////////////////////////////// return driver and car


    $("#driverUpdate").click(function (){
alert("sdd");

    $.ajax({
        url:baseUrl+`return?rentId=${ $("#rentRequestRentId").val()}&option=Available`,
        method:"put",
        dataType: "json",
        contentType: "application/json",
        success:function (resp){

        }

        });
    });






///////////////// reject



$("#driverDelete").click(function (){

    $.ajax({
        url: baseUrl + "addRent?rentId=" + $("#rentRequestRentId").val(),
        method: "DELETE",
        success: function (res) {

        },
        error: function (ob) {

        }
    });
});







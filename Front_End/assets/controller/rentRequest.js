
loadRentRequest=()=>{

    $.ajax({
        url:baseUrl+"addRent",
        method:"get",
        success:function (resp){
            for (const i of resp.data) {
                var customer = i.customer;
                var rentId = i.rentId;
               // var carId = i.car.registrationNO;
                var driver = i.driver;
                var picUpDate = i.pickupDate;
                var picUpPlace = i.pickUpVenue;
                var returnDate = i.returnDate;
                var returnPlace = i.returnValue;

                if (i.car) {
                    var registrationNO = i.car.registrationNO;
                }
                if (i.customer) {
                    var customerId = i.customer.customerId;
                }

                var row = `<tr><td>${rentId}</td><td>${registrationNO}</td><td>${customerId}</td><td>${driver}</td><td>${picUpDate}</td><td>${picUpPlace}</td><td>${returnDate}</td><td>${returnPlace}</td></tr>`;
                $("#rentRequestTableBody").append(row);
            }
        }
    });
}

$("#acceptRentRequest").click(function (){
    alert("fdfd");
});


$("#saveCar").click(function (){



    var formData = new FormData();
    let registrationNO = $("#regNum").val();
    let brand = $("#brand").val();
    let type = $("#type").val();
    let NoOfPassengers = $("#nuOfPassenger").val();
    let transmissionType = $("#transmission").val();
    let fuelType = $("#fuelType").val();
    let color = $("#color").val();
    let dailyRate = $("#dailyRate").val();
    let monthlyRate = $("#monthlyRate").val();
    let lossDamageWaiver = $("#loosDamageViewer").val();
    let priceForExtraKm = $("#priceForExtraKM").val();
    let freeMileage = $("#freeMileage").val();
    let status = "Available";
    let lable = $("#lablew").text();

    formData.append("registrationNO", registrationNO);
    formData.append("brand", brand);
    formData.append("type", type);
    formData.append("NoOfPassengers", NoOfPassengers);
    formData.append("transmissionType", transmissionType);
    formData.append("fuelType", fuelType);
    formData.append("color", color);
    formData.append("dailyRate", dailyRate);
    formData.append("monthlyRate", monthlyRate);
    formData.append("lossDamageWaiver", lossDamageWaiver);
    formData.append("priceForExtraKm", priceForExtraKm);
    formData.append("freeMileage", freeMileage);
    formData.append("status", status);
    formData.append("lable", lable);


    let imgFront = $("#frontView")[0].files[0];
    let imgFrontName = $("#frontView")[0].files[0].name;
    formData.append("imgFrontFile", imgFront, imgFrontName);

    let imgBack = $("#backView")[0].files[0];
    let imgBackName = $("#backView")[0].files[0].name;
    formData.append("imgBackFile", imgBack, imgBackName);

    let imgSide = $("#sideView")[0].files[0];
    let imgSideName = $("#sideView")[0].files[0].name;
    formData.append("imgSideFile", imgSide, imgSideName);

    let imgInside = $("#interior")[0].files[0];
    let imgInsideName = $("#interior")[0].files[0].name;
    formData.append("imgInsideFile", imgInside, imgInsideName);

    $.ajax({
        url:baseUrl + "car/saveImg",
        method: "post",
        data: formData,
        dataType: "json",
        async: true,
        contentType: false,
        processData: false,
        enctype: "multipart/form-data",
        success: function (resp) {
            alert("Successfully Uploaded");
        },
        error: function (err) {
            console.log(err);
        }
    });
})



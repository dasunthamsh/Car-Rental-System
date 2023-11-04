loadCustomerDetails=()=>{

    $.ajax({
        url:baseUrl+"customer",
        method:"get",
        success:function (resp) {
            for (const i of resp.data) {

                var cusId = i.customer;
                var address = i.address;
                var contactNo = i.contactNo;
                var email = i.email;
                var licenceNo = i.licenceNo;
                var name = i.attendName;
                var nicNo = i.nicNUmber;
                var password = i.password;
                var userName = i.username;

                console.log(resp.data);

                var row = `<tr><td>${cusId}</td><td>${address}</td><td>${contactNo}</td><td>${email}</td><td>${licenceNo}</td><td>${name}</td><td>${nicNo}</td><td>${password}</td><td>${userName}</td></tr>`;
                $("#customerDetailsTableBody").append(row);

            }
        }
    });
}



// $(document).ready(function() {
//     // Add an event listener to the #Role select element
//     $("#Role").on("change", function() {
//         // Check if the selected value is "Customer"
//         if ($(this).val() === "Admin") {
//             // If "Customer" is selected, disable the #btnReg button
//             $("#roleVidTow").prop("hidden", true);
//         } else {
//             // If any other value is selected, enable the #btnReg button
//             $("#roleVidTow").prop("hidden", false);
//         }
//     });
// });
//
// $(document).ready(function() {
//     // Add an event listener to the #Role select element
//     $("#Role").on("change", function() {
//         // Check if the selected value is "Customer"
//         if ($(this).val() === "Driver") {
//             // If "Customer" is selected, disable the #btnReg button
//             $("#disableForDriver").prop("hidden", true);
//         } else {
//             // If any other value is selected, enable the #btnReg button
//             $("#disableForDriver").prop("hidden", false);
//         }
//     });
// });

$(document).ready(function() {
    // Add an event listener to the #Role select element
    $("#Role").on("change", function() {
        // Check the selected value
        const selectedRole = $(this).val();

        // Check if the selected value is "Admin" or "Driver"
        if (selectedRole === "Admin") {
            // If "Admin" is selected, disable the #roleVidTow element
            $("#roleVidTow").prop("hidden", true);
        } else if (selectedRole === "Driver") {
            // If "Driver" is selected, disable the #disableForDriver element
            $("#disableForDriver").prop("hidden", true);
            $("#roleVidTow").prop("hidden", false);

        } else {
            // For any other value, enable both elements
            $("#roleVidTow").prop("hidden", false);
            $("#disableForDriver").prop("hidden", false);
        }
    });
});

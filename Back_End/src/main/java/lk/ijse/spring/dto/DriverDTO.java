package lk.ijse.spring.dto;/*
    @author Dasun
*/

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {

    private String licenceNo;
    private String name;
    private String address;
    private String contactNo;
    private String nicNo;
    private String username;
    private String password;
    private String email;
    private String availability;
}

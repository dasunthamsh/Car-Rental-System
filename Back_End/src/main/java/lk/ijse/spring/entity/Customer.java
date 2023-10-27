package lk.ijse.spring.entity;/*
    @author Dasun
*/

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Customer {

    @Id
    private String customerId;
    private String name;
    private String address;
    private int contactNo;
    private String email;
    private String nicNo;
    private String licenceNo;
    private String userName;
    private String password;
    private String nicFrontImage;
    private String nicBackImage;
    private String licenceImage;

    //private String status;


    @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
    private List<Rent> rents = new ArrayList<>();
}

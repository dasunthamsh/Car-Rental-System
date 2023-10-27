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
public class Driver {

    @Id
    private String licenceNo;
    private String name;
    private String address;
    private String contactNo;
    private String nicNo;
    private String username;
    private String password;
    private String email;
    private String availability;

    @OneToMany(mappedBy = "driver",cascade = CascadeType.ALL)
    private List<Rent> rents = new ArrayList<>();
}

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
public class Car {
    @Id

    private String registrationNO;
    private String brand;
    private String type;
    private int NoOfPassengers;
    private String transmissionType;
    private String fuelType;
    private String color;
    private double dailyRate;
    private double monthlyRate;
    private double lossDamageWaiver;
    private double priceForExtraKm;
    private double freeMileage;
    private String status;

    private String frontViewImage;
    private String backView;
    private String sideView;
    private String internalView;


    @OneToMany(mappedBy = "car" , cascade = CascadeType.ALL)
    private List<Rent> rents = new ArrayList<>();

    // maintenances



}

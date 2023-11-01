package lk.ijse.spring.entity;/*
    @author Dasun
*/

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Rent {

    @Id
    private String rentId;

    private String date;
    private String pickupDate;
    private String returnDate;
    private String pickUpVenue;
    private String returnVenue;
    //private String lossDamageWaiver;
    //private String bankSlip;
    private String status;



    @ManyToOne
    @JoinColumn(name = "licenceNo",referencedColumnName = "licenceNo")
    private Driver driver;

    @ManyToOne
    @JoinColumn(name = "registrationNO" , referencedColumnName = "registrationNO")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "customerId",referencedColumnName = "customerId")
    private Customer customer;




}

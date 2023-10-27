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
public class CarDTO {
    private String registrationNO;
    private String brand;
    private String type;
    private int NoOfPassengers;
    private String transmissionType;
    private String fuelType;
    private String color;

    private String frontViewImage;
    private String backView;
    private String sideView;
    private String internalView;

    private double dailyRate;
    private double monthlyRate;
    //    private  double freeKmForPrice;
//    private double freeKmForDuration;
    private double lossDamageWaiver;
    private double priceForExtraKm;
    private double freeMileage;
    private String status;
}

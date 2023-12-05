package lk.ijse.spring.service;/*
    @author Dasun
*/

import lk.ijse.spring.dto.RentDTO;

import java.util.List;

public interface RentService {

    void bookingCar(RentDTO dto);

    List<RentDTO> rentRequest();

    void rentCar(RentDTO dto);

     void updateDriverAvailability(String rentId, String option);

    void updateCarAvailability(String rentId, String option);

    void deleteDriver(String licenceNo);

}

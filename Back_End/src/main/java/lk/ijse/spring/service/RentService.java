package lk.ijse.spring.service;/*
    @author Dasun
*/

import lk.ijse.spring.dto.RentDTO;

import java.util.List;

public interface RentService {

    void bookingCar(RentDTO dto);

    List<RentDTO> rentRequest();

    void rentCar(RentDTO dto);
}

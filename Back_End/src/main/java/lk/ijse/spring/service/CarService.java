package lk.ijse.spring.service;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface CarService {

    void saveCar(CarDTO dto);

    List<CarDTO> getAllCars();
}

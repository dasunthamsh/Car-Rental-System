package lk.ijse.spring.service;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {

    void saveCustomer(CustomerDTO dto);

    void updateCarAvailability(String rentId, String option);

    List<CustomerDTO> getAllCustomers();



}

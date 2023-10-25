package lk.ijse.spring.service;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CustomerDTO;

public interface CustomerService {

    void saveCustomer(CustomerDTO dto);

    void uploadCustomerImage(String nicfPath, String nicbPath, String licenceImgPath, String id);
}

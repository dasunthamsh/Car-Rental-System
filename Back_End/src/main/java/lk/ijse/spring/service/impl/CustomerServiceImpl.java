package lk.ijse.spring.service.impl;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if(!repo.existsById(dto.getCustomerId())){
            repo.save(mapper.map(dto, Customer.class));
        }else {
            throw new RuntimeException("Customer already added");
        }
    }

    @Override
    public void uploadCustomerImage(String nicfPath, String nicbPath, String licenceImgPath, String id) {
        if(repo.existsById(id)){
            repo.updateCustomerFilePaths(nicfPath, nicbPath, licenceImgPath, id);
        }else {
            throw new RuntimeException("Customer Not Found");
        }
    }
}

package lk.ijse.spring.service.impl;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rent;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper mapper;

    @Autowired
    RentRepo rentRepo;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if(!repo.existsById(dto.getCustomerId())){
            repo.save(mapper.map(dto, Customer.class));
        }else {
            throw new RuntimeException("Customer already added");
        }
    }

    @Override
    public void updateCarAvailability(String rentId, String option) {
        Rent rent = rentRepo.findById(rentId).get();
        rent.getCar().setStatus("notAvailable");
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all,new TypeToken<List<CustomerDTO>>(){}.getType());
    }


}

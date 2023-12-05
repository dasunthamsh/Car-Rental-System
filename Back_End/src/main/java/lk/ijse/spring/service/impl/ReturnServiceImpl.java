package lk.ijse.spring.service.impl;/*
    @author Dasun
*/


import lk.ijse.spring.entity.Rent;
import lk.ijse.spring.repo.ReturnRepo;
import lk.ijse.spring.service.ReturnService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ReturnServiceImpl implements ReturnService {

    @Autowired
    ReturnRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void returnDriver(String rentId, String option) {
        Rent rent = repo.findById(rentId).get();
        rent.getDriver().setAvailability("Available");
        repo.save(rent);
    }


}

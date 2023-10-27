package lk.ijse.spring.service.impl;/*
    @author Dasun
*/

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!repo.existsById(dto.getLicenceNo())){
            repo.save(mapper.map(dto, Driver.class));
        }else {
            throw new RuntimeException("Driver Already Added");
        }
    }
}

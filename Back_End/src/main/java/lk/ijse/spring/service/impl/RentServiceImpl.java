package lk.ijse.spring.service.impl;/*
    @author Dasun
*/

import lk.ijse.spring.dto.RentDTO;
import lk.ijse.spring.entity.Rent;
import lk.ijse.spring.repo.RentRepo;
import lk.ijse.spring.service.RentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RentServiceImpl implements RentService {


    @Autowired
    RentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void bookingCar(RentDTO dto) {
        if (!repo.existsById(dto.getRentId())){
            repo.save(mapper.map(dto, Rent.class));
        }else {
            throw new RuntimeException("Booking was added Already");
        }

    }
}

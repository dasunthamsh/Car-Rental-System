package lk.ijse.spring.controller;/*
    @author Dasun
*/

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @PostMapping
    public ResponseUtil saveDriver(DriverDTO dto){
         service.saveDriver(dto);
        return new ResponseUtil("200","Driver added",dto);
    }
}

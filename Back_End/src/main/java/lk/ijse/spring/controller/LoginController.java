package lk.ijse.spring.controller;/*
    @author Dasun
*/

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    LoginService service;

    @PostMapping
    public ResponseUtil saveDriver(@RequestBody LoginDTO dto){
        service.saveLogin(dto);
        return new ResponseUtil("200","Driver added",dto);
    }
}

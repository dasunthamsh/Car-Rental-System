package lk.ijse.spring.service;/*
    @author Dasun
*/

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.LoginDTO;

public interface LoginService {

    void saveLogin (LoginDTO dto);

    LoginDTO loginToSystem(String username);


}

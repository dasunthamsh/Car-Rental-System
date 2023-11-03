package lk.ijse.spring.repo;/*
    @author Dasun
*/

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Driver findByLicenceNo(String licenceNo);
}

package lk.ijse.spring.repo;/*
    @author Dasun
*/

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car,String> {
}

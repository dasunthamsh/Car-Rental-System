package lk.ijse.spring.repo;/*
    @author Dasun
*/

import lk.ijse.spring.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReturnRepo extends JpaRepository<Rent , String> {
}

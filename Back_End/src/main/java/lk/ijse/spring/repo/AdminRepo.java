package lk.ijse.spring.repo;/*
    @author Dasun
*/

import lk.ijse.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String > {
}

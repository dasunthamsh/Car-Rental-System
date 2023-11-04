package lk.ijse.spring.controller;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/car")
public class CarController {

    public CarController(){
        System.out.println("car conterolelr");
    }

    @Autowired
    CarService service;


    @PostMapping(path = "/saveImg", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseUtil saveImage(CarDTO carDTO, @RequestPart("imgFrontFile") MultipartFile file1, @RequestPart("imgBackFile") MultipartFile file2, @RequestPart("imgSideFile") MultipartFile file3, @RequestPart("imgInsideFile") MultipartFile file4) {
        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();
            file1.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file1.getOriginalFilename()));
            file2.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file2.getOriginalFilename()));
            file3.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file3.getOriginalFilename()));
            file4.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file4.getOriginalFilename()));

            carDTO.setFrontViewImage("uploads/" + file1.getOriginalFilename());
            carDTO.setBackView("uploads/" + file2.getOriginalFilename());
            carDTO.setSideView("uploads/" + file3.getOriginalFilename());
            carDTO.setInternalView("uploads/" + file4.getOriginalFilename());
            service.saveCar(carDTO);
            System.out.println(carDTO.toString());
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            return new ResponseUtil("Ok", "Successfully Saved", carDTO);
        }
        return new ResponseUtil("Ok", "Successfully Saved", carDTO);
    }

    @GetMapping
    public ResponseUtil getAllCars(){
        List<CarDTO> allCar = service.getAllCars();
        return new ResponseUtil("OK","Successfull",allCar);

    }

}

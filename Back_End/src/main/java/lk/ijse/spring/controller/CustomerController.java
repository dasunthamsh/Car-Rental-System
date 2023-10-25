package lk.ijse.spring.controller;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService service;


    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        service.saveCustomer(dto);
        return  new ResponseUtil("200","saved",dto);
    }

    @PutMapping(path = "/up/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("nicf") MultipartFile nicf, @RequestPart("nicb") MultipartFile nicb, @RequestPart("licenceImg") MultipartFile licenceImg, @PathVariable String id) {

        try {
            String projectPath = String.valueOf(new File("D:\\Project Zone\\IJSE\\Car-Rental-System\\Front_End\\assets\\img"));
            File uploadsDir = new File(projectPath + "\\Customers");
            uploadsDir.mkdir();
            nicf.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + nicf.getOriginalFilename()));
            nicb.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + nicb.getOriginalFilename()));
            licenceImg.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + licenceImg.getOriginalFilename()));

            String nicfPath = projectPath + "\\Customers\\" + nicf.getOriginalFilename();
            String nicbPath = projectPath + "\\Customers\\" + nicb.getOriginalFilename();
            String licenceImgPath = projectPath + "\\Customers\\" + licenceImg.getOriginalFilename();

            service.uploadCustomerImage(nicfPath, nicbPath, licenceImgPath, id);


            return new ResponseUtil("200","Uploaded",null);

        }catch (IOException e){
            return new ResponseUtil("500","error",null);

        }
    }
}

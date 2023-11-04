package lk.ijse.spring.controller;/*
    @author Dasun
*/

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
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
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService service;

    @PostMapping(path = "/saveImg", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseUtil saveImage(CustomerDTO dto, @RequestPart("imgFrontFile") MultipartFile file1, @RequestPart("imgBackFile") MultipartFile file2, @RequestPart("imgLicenceFile") MultipartFile file3) {


        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();
            file1.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file1.getOriginalFilename()));
            file2.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file2.getOriginalFilename()));
            file3.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file3.getOriginalFilename()));

            dto.setNicFrontImage("uploads/" + file1.getOriginalFilename());
            dto.setNicBackImage("uploads/" + file2.getOriginalFilename());
            dto.setLicenceImage("uploads/" + file3.getOriginalFilename());
            service.saveCustomer(dto);

        }catch (IOException | URISyntaxException e){
            return new ResponseUtil("Ok", "Successfully Saved", null);

        }
        return new ResponseUtil("Ok", "Successfully Saved", null);

    }

    @GetMapping
    public ResponseUtil getAllCustomer(){
        List<CustomerDTO> allCustomer = service.getAllCustomers();
        return new ResponseUtil("OK","Successfull",allCustomer);

    }

    }
/////////


package lk.ijse.spring.controller;/*
    @author Dasun
*/


import lk.ijse.spring.service.ReturnService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/return")
@CrossOrigin
public class ReturnController {

    @Autowired
    ReturnService returnService;


    @PutMapping(params = "rentId")
    public ResponseUtil returnDriver(@RequestParam String rentId, @RequestParam String option){
        returnService.returnDriver(rentId , option);
        return new ResponseUtil("ok" ,"booking successful"," ");
    }



}


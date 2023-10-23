package lk.ijse.spring.config;/*
    @author Dasun
*/

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({JAPConfig.class})
@ComponentScan(basePackages = "lk.ijse.spring.service")
public class WebRootConfig {

    public WebRootConfig(){
        System.out.println("web root config");
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}

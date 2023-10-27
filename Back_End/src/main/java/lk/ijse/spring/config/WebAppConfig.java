package lk.ijse.spring.config;/*
    @author Dasun
*/

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@Configuration
@ComponentScan(basePackages = {"lk.ijse.spring.controller","lk.ijse.spring.advisor"})
public class WebAppConfig implements WebMvcConfigurer {

    @Bean
    public MultipartResolver multipartResolver() {
        System.out.println("multipartResolver");
        return new StandardServletMultipartResolver();
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        System.out.println("ResourceHandlerRegistry");
        registry.addResourceHandler("/uploads/**").addResourceLocations("/uploads/");
    }
}

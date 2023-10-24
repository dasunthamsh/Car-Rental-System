package lk.ijse.spring.util;/*
    @author Dasun
*/

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class ResponseUtil {
    private String code;
    private String message;
    private Object data;
}

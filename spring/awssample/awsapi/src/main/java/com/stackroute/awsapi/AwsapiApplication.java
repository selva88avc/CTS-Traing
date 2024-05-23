package com.stackroute.awsapi;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.stackroute.awsapi.model.Course;
import com.stackroute.awsapi.service.CourseServiceImpl;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title ="MySql API", version = "1.0",description = "check aws"))

public class AwsapiApplication  implements RequestHandler<Course, List<Course>>
{
	
	private static ConfigurableApplicationContext applicationContext;

	 
	public List<Course> handleRequest(Course input, Context context) {
		
		
		if (applicationContext == null) {
			applicationContext = SpringApplication.run(AwsapiApplication.class);
		}

		CourseServiceImpl service = applicationContext.getBean(CourseServiceImpl.class);
		return service.performOperation(input);

		//		return null;
	}
	
	
	
//	public static void main(String[] args) {
//		SpringApplication.run(AwsapiApplication.class, args);
//	}

}

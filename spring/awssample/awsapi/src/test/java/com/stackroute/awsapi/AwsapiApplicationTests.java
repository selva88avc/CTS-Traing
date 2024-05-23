package com.stackroute.awsapi;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.stackroute.awsapi.model.Course;

@SpringBootTest
class AwsapiApplicationTests {

	//int courseid, String coursename,  int fees, String operation)
	
	
//	@Test
//	void contextLoads() {
//		var sut=new AwsapiApplication();
//		Course courseobj=new Course(null,"Java",25000,"create");
//		var output=sut.handleRequest(courseobj, null);
//		System.out.println(output);
//		
//	}
//	
//	
//	@Test
//	void contextRead()
//	{
//		var sut=new AwsapiApplication();
//		Course courseobj=new Course(null,null,0,"read");
//		var output=sut.handleRequest(courseobj, null);
//		for (int i=0;i<=output.size()-1;i++)
//		{
//			System.out.println(output.get(i).getCoursename());
//		}
//	}
//
//	
//	@Test
//	void contextDelete()
//	{
//
//		var sut=new AwsapiApplication();
//		Course courseobj=new Course( (Integer)1,null,0,"delete");
//		var output=sut.handleRequest(courseobj, null);
//		System.out.println(output);
//		
//		
//	}
//	
//	@Test
//	void contextupdate()
//	{
//		var sut=new AwsapiApplication();
//		Course courseobj=new Course((Integer)1,"Python",2330,"update");
//		var output=sut.handleRequest(courseobj, null);
//		System.out.println(output);
//	}
}

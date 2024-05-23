package com.stackroute.awsapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.awsapi.model.Course;
import com.stackroute.awsapi.service.CourseService;

 
//
//@RestController
//@CrossOrigin
//public class CourseController {
//	
//	@Autowired
//	CourseService courseservice;
//	
//	@PostMapping("/add")
//	public ResponseEntity<?> addCourse(@RequestBody Course course)
//	{
//		System.out.println("controll " + course);
//	List<Course> courser=	courseservice.addCourse(course);
//	return new ResponseEntity(courser,HttpStatus.CREATED);
//	}
//
//	@GetMapping("/view")
//	public ResponseEntity<?> getCourse()
//	{
//		
//	List<Course> courses=	courseservice.getAllCourses();
//	return new ResponseEntity(courses,HttpStatus.OK);
//	}
//}

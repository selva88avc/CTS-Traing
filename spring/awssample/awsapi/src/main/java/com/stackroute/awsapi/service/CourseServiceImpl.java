package com.stackroute.awsapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.awsapi.model.Course;
import com.stackroute.awsapi.repository.CourseRepo;

@Service
public class CourseServiceImpl implements CourseService{

	@Autowired
	CourseRepo repo;
	
	public List<Course> performOperation(Course course)
	{
 
		
		
		String operation=course.getOperation().toLowerCase();
		 switch (operation) {
         case "create":
             return addCourse(course);
         case "read":
             return getAllCourses();
         case "update":
             return  updateCourse(course.getCourseid(),course);
         case "delete":
             deleteCourse(course.getCourseid());
             return getAllCourses();
         default:
             throw new IllegalArgumentException("Invalid operation type: " + operation);
     }
	}
	@Override
	public List<Course> addCourse(Course course) {
		// course.setCourseid((int) System.currentTimeMillis());
		System.out.println(course);
		 repo.save(course);
		return repo.findAll();
	}

	@Override
	public List<Course> getAllCourses() {
		 
		return repo.findAll();
	}

	@Override
	public List<Course> deleteCourse(int courseid) {
	Optional<Course> optcourse=		 repo.findById(courseid);
	if (optcourse.isPresent())
	{
		repo.deleteById(courseid);
		//
	}
	return repo.findAll();
	
	}

	@Override
	public List<Course> updateCourse(int id, Course course) {
		Optional<Course> optcourse=		 repo.findById(id);
		if ( optcourse.isPresent())
		{
			Course existcourse=optcourse.get();
			existcourse.setCoursename(course.getCoursename());
			existcourse.setFees(course.getFees());
			repo.save(existcourse);
		}
		return repo.findAll();
	}

}

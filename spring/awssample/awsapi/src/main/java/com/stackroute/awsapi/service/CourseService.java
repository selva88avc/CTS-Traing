package com.stackroute.awsapi.service;

import java.util.List;

import com.stackroute.awsapi.model.Course;

public interface CourseService {

	 public List<Course> addCourse(Course course);
	List<Course> getAllCourses();
	List<Course> deleteCourse(int courseid);
	List<Course> updateCourse(int id,Course course);
}

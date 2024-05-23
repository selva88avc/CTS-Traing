package com.stackroute.awsapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.awsapi.model.Course;

@Repository
public interface CourseRepo extends JpaRepository<Course,Integer> {

}

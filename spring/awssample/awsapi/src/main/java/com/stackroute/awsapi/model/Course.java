package com.stackroute.awsapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Course {

	@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	Integer courseid;
	String coursename;
	int fees;
	  @Transient
	    private String operation;
	@Override
		public String toString() {
			return "Course [courseid=" + courseid + ", coursename=" + coursename + ", fees=" + fees + ", operation="
					+ operation + "]";
		}
	public String getOperation() {
		return operation;
	}
	public Course()
	
	{}
	public Course(Integer courseid, String coursename,  int fees, String operation) {
		 super();
		this.courseid = courseid;
		this.coursename = coursename;
		
		this.fees = fees;
		this.operation = operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public int getCourseid() {
		return courseid;
	}
	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}
	public String getCoursename() {
		return coursename;
	}
	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}
	
	public Integer getFees() {
		return fees;
	}
	public void setFees(Integer fees) {
		this.fees = fees;
	}
	
}

package com.stackroute.springbootwithmultipledatasource.userdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.springbootwithmultipledatasource.userdb.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}

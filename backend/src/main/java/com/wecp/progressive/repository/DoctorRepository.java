package com.wecp.progressive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wecp.progressive.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor,Integer>
{
}

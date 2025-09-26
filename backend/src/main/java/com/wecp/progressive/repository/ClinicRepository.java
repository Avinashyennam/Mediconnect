package com.wecp.progressive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wecp.progressive.entity.Clinic;
public interface ClinicRepository extends JpaRepository<Clinic,Integer> 
{
}

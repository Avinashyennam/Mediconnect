package com.wecp.progressive.service.impl;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecp.progressive.entity.Doctor;
import com.wecp.progressive.repository.DoctorRepository;
import com.wecp.progressive.service.DoctorService;

@Service
public class DoctorServiceImplJpa implements DoctorService  {

    // @Autowired
    private DoctorRepository doctorRepository;
    public DoctorServiceImplJpa(DoctorRepository doctorRepository){
        this.doctorRepository = doctorRepository;
    }

    @Override
    public Integer addDoctor(Doctor doctor) throws SQLException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deleteDoctor(int doctorId) throws Exception {
        // TODO Auto-generated method stub
        DoctorService.super.deleteDoctor(doctorId);
    }

    @Override
    public List<Doctor> getAllDoctors() throws SQLException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Doctor getDoctorById(int doctorId) throws Exception {
        // TODO Auto-generated method stub
        return DoctorService.super.getDoctorById(doctorId);
    }

    @Override
    public List<Doctor> getDoctorSortedByExperience() throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void updateDoctor(Doctor doctor) throws Exception {
        // TODO Auto-generated method stub
        DoctorService.super.updateDoctor(doctor);
    }

    
}
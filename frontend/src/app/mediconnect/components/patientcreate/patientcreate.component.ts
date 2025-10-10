    import { Component } from "@angular/core";
    interface Patient{
        patientId: number;
        fullName: string;
        dateOfBirth: string;
        contactNumber: string;
        email: string;
        address: string;
    }

    @Component({
        selector: 'patient-create',
        templateUrl: './patientcreate.component.html',
        styleUrls: ["./patientcreate.component.scss"]
    })

    export class PatientCreateComponent {
        message: string = '';
        patient: Patient
        = {
                patientId: 0,
                fullName: '',
                dateOfBirth: '',
                contactNumber: '',
                email: '',
                address: ''
            };
        
        // onSubmit(){
        //     if(this.isFormValid()){
        //         this.message = 'form submitted';
        //     } 
        //     else {
        //         this.message = 'Invalid details. Failed to submit the form'
        //     }
            
        // }
        onSubmit():void {
            if (this.isFormValid()) {
            this.message = 'form submitted';
            // console.log(this.message)
            } else {
            return this.message = 'Invalid details. Failed to submit the form';
            // console.log(this.message)
            }
        }
        
    // isFormValid(): boolean {
    //     if (!this.patient) return false;
    
    //     if (this.patient.patientId <= 0) return false;
    //     if (!this.patient.fullName || this.patient.fullName.trim().length === 0) return false;
    //     if (!this.patient.dateOfBirth || this.patient.dateOfBirth.trim().length === 0) return false;
    //     if (!this.patient.contactNumber || this.patient.contactNumber.trim().length === 0 || this.patient.contactNumber.length > 10) return false;
    //     if (!this.patient.address || this.patient.address.trim().length === 0) return false;
    
    //     return true;
    // }
    
        isFormValid(): boolean{
            if(this.patient.patientId < 0){
                return false;
            }
            if(this.patient.fullName.length === 0){
                return false;
            }
            if(this.patient.dateOfBirth.length ===  0){
                return false;
            }
            if(this.patient.contactNumber.length === 0 || this.patient.contactNumber.length > 10){
                return false;
            }
            if(this.patient.address.length === 0){
                return false;
            }
            return true;
        }
        //  isFormValid(): boolean{
        //     if(this.patient.patientId < 0){
        //         return false;
        //     }
        //     if(!this.patient.fullName.trim()===''){
        //         return false;
        //     }
        //     if(!this.patient.dateOfBirth.trim()){
        //         return false;
        //     }
        //     if(!this.patient.contactNumber.trim() || !this.patient.contactNumber.trim()||this.patient.contactNumber.length > 10||this.patient.contactNumber.length < 10){
        //         return false;
        //     }
        //     if(!this.patient.address.trim()){
        //         return false;
        //     }
        //     return true;
        // }
        resetForm(){
            this.patient.patientId = 0;
            this.patient.fullName = '';
            this.patient.dateOfBirth = '';
            this.patient.contactNumber = '';
            this.patient.email = '';
            this.patient.address= '';
        }
    }

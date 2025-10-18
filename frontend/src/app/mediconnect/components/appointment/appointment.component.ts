import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Clinic } from '../../models/Clinic';
import { Patient } from '../../models/Patient';
import { MediConnectService } from '../../services/mediconnect.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentCreateComponent implements OnInit {
    appointmentForm!: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;
    submitted = false;
    clinics: Clinic[];
    selectedPatient: Patient;
    patientId: number;

    constructor(private fb: FormBuilder, private mediService: MediConnectService) { }

    ngOnInit(): void {
        // this.initializeForm();
        this.appointmentForm = this.fb.group({
            // appointmentId: [null, [Validators.required, Validators.min(1)]],
            patientId: [localStorage.getItem('patient_id')],  //[Validators.required, Validators.min(1)]
            clinicId: [null],   // , [Validators.required, Validators.min(1)]
            appointmentDate: ['', [Validators.required, this.futureDateValidator]],
            status: ['', [Validators.required]],
            purpose: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    // private initializeForm(): void {

    // }

    // private positiveIntegerValidator(control: AbstractControl): { [key: string]: any } | null {
    //     const valid = /^[1-9]\d*$/.test(control.value);
    //     return valid ? null : { invalidInteger: true };
    // }

    // Custom validator for future dates
    private futureDateValidator(control: AbstractControl): { [key: string]: any } | null {
        if (!control.value) return null;
        const selected = new Date(control.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today ? null : { pastDate: true };
    }

    get f() {
        return this.appointmentForm.controls;
    }

    onSubmit(): void {
        // this.submitted = true;
        // this.clearMessages();

        if (this.appointmentForm.invalid) {
            this.errorMessage = 'Please fill out all required fields correctly.';
            this.successMessage = null;
            // this.markAllAsTouched();
            return;
        }

        // const appointmentData = this.appointmentForm.value;
        // console.log('Appointment Data:', appointmentData);
        this.mediService.createAppointment(this.appointmentForm.value).subscribe({
            next: (data) => {
                this.successMessage = `Appointment has been successfully created!`;
                this.errorMessage = null;
            },
            error: (error) => this.handleError(error)
        })
        this.resetForm();
    }

    private markAllAsTouched(): void {
        Object.values(this.appointmentForm.controls).forEach(control => control.markAsTouched());
    }

    private clearMessages(): void {
        this.successMessage = null;
        this.errorMessage = null;
    }

    resetForm(): void {
        // this.submitted = false;
        // this.clearMessages();
        this.appointmentForm.reset({
            appointmentId: null,
            patientId: null,
            clinicId: null,
            appointmentDate: '',
            status: '',
            purpose: ''
        });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            this.errorMessage = `Client-side error: ${error.error.message}`;
        }
        else {
            this.errorMessage = `Server-side error: ${error.status} ${error.message}`;
            if (error.status === 400) {
                this.errorMessage = 'Bad request. Please check your input.';
            }
        }
        this.successMessage = '';
        console.log('An error occured:', this.errorMessage);
    }
}
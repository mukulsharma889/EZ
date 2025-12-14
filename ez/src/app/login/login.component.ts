import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoginMode = true;
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.fb.group({
      // New Role Field (Default to Student)
      role: ['student', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: [''],
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    // Reset form but keep the default role
    this.authForm.reset({ role: 'student' });
  }

  onSubmit() {
    // Now includes 'role' in the data
    const { email, password, name, role } = this.authForm.value;

    if (this.isLoginMode) {
      console.log(`Logging in as ${role}:`, email);
      // Logic: You might redirect to different dashboards based on 'role'
    } else {
      console.log(`Signing up a new ${role}:`, name, email);
    }

    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../services/demoservice.service';

@Component({
  selector: 'app-firstc',
  standalone: false,
  templateUrl: './firstc.component.html',
  styleUrls: ['./firstc.component.css']
})
export class FirstcComponent implements OnInit {
  constructor(private Demoservice: DemoserviceService) {}

  componentName: string = 'FirstComponent';
  twoBinding: string = 'Enter the name';
  img: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isActive: boolean = false;
  className: string = 'secondary';

  apiData: any; // Property to store API response
  // selectedUser: any; // Stores user fetched by ID
  // userIdInput: string = ''; // Two-way bound input field for ID

  ngOnInit(): void {
    console.log('First component initialized');
    
    this.Demoservice.getValuesFromApi().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.apiData = data; // Store API response
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });    
  }
  
  // Fetch user by ID

  OnClick(): void {
    console.log('Button clicked');
  }
}

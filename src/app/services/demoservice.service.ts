import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  private apiUrl: string = 'https://localhost:7122/api/User';
  constructor(private httpClient: HttpClient) {}

  
  userList: string[] = ['1', '2', '3', '4'];

  // Get all users
  getValuesFromApi(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // Get user by ID
  getUserById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  // Add a new user (POST)
  addUser(user: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, user);
  }

  // Update a user (PUT)
  updateUser(id: number, user: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, user);
  }

  // Delete a user
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
 
}

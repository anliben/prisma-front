import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UserInterface from './shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  http: HttpClient = inject(HttpClient)
  endpoint: string = 'http://localhost:5001/api/v1'

  constructor() { }

  getallUsers(): Observable<Array<UserInterface>> {
    return this.http.get<Array<UserInterface>>(`${this.endpoint}/users`)
  }

  getById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.endpoint}/users/${id}`)
  }

  getByDomain(domain: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.endpoint}/users/domain/${domain}`)
  }

  updateUser({name, email, phone, domain}: {name: string, email: string, phone: string, domain: string}) {
    return this.http.put(`${this.endpoint}/users`, {
      name:name,
      email:email,
      phone:phone,
      domain:domain
    })
  }

  createUser(user: UserInterface): Observable<AppService> {
    console.log(user)
    return this.http.post<AppService>(`${this.endpoint}/users`, {
      name: user.name,
      phone: user.phone,
      email: user.email,
      dominios: user.dominios,
    })
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/users/${id}`)
  }

}

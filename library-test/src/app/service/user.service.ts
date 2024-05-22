import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient = inject(HttpClient);

  apiUrl: string = 'https://nettuts.hu/jms/joe/users';

  list$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  selected$ = new BehaviorSubject<User | undefined>(new User());

  constructor() { }

  loadAll() {
    this.http.get<User[]>(this.apiUrl).subscribe(users => {
      this.list$.next(users);
    });
  }

  load(id: number) {
    this.http.get<User>(`${this.apiUrl}/${id}`).subscribe(user => {
      this.selected$.next(user);
    });
  }

  save(user: User) {
    if (user.id) {
      this.http.patch<User>(`${this.apiUrl}/${user.id}`, user).subscribe(
        () => this.loadAll()
      );
    } else {
      this.http.post<User>(this.apiUrl, user).subscribe(
        () => this.loadAll()
      );
    }
  }

}

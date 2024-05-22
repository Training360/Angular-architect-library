import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userService = inject(UserService);

  users$ = this.userService.list$;

  ngOnInit(): void {
    this.userService.loadAll();
  }

  onRemove(user: User): void {
    // this.userService.list$.next(this.userService.list$.value.filter(u => u !== user));
  }

}

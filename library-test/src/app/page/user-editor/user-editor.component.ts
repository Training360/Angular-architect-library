import { Component, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '../../service/user.service';
import { JsonPipe, Location } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CountrySelectorComponent } from 'ngc-form-controls';
import { User } from '../../model/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-editor',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    CountrySelectorComponent,
    RouterModule,
  ],
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.css'
})
export class UserEditorComponent {

  router = inject(Router);

  location = inject(Location);

  userService = inject(UserService);

  id = input<number>(0);

  user = toSignal(this.userService.selected$);

  userForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    email: new FormControl(''),
    category: new FormControl(''),
    country: new FormControl(''),
  });

  constructor() {
    effect(() => {
      if (this.id() && this.id() > 0) {
        this.userService.load(this.id());
      }
    });

    effect(() => {
      if (this.user()) {
        this.userForm.patchValue(this.user() as User);
      }
    });
  }

  onSubmit() {
    this.userService.save(this.userForm.value as User);
    this.location.back();
  }

}

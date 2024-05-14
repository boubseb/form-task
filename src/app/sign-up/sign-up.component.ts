import { Component } from '@angular/core';
import { UserToRegister } from '../user-to-register';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  userToRegister: UserToRegister = {

    email: "",

    firstname: "",

    lastname: "",

    password: ""

  };

  onSubmit():void{
    console.log(this.userToRegister)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  iscontact=false;
  islogin = false;

  contactDetails(){
     this.iscontact=true;
  }
  closeDetaiks(){
    this.iscontact=false;
    this.islogin=false;
  }
  LoginHere(){
    this.islogin=true;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() isNavbar : boolean = false;
  @Input() user : UserDto = new UserDto();

  firstname : string;
  lastname : string;

  constructor() { }

  ngOnInit(): void {
  }
  getFirstLastNameLetter(user : UserDto) : string{
    this.firstname = user?.name?.charAt(0).toUpperCase();
    this.lastname = user?.surname?.charAt(0).toUpperCase();
    return this.firstname + this.lastname;
  }

}

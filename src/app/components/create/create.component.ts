import { Component } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacts } from 'src/app/interfaces/contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  model:any = {};
  constructor(private contactsService: ContactsService, private router:Router) {}
   addContact(model:Contacts){
    this.contactsService.createContact(model);
    this.router.navigateByUrl('/');
  }
}

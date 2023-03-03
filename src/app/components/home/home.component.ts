import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contacts:any[]=[];

  constructor(private contactsService: ContactsService) {}
  
  ngOnInit(): void {
    this.contacts = this.contactsService.getContactDetails();
  }

   deleteContact(id:number){
    const contactId = this.contactsService.getContactById(id);
    this.contactsService.deleteContact(contactId.id);
    this.contacts = this.contactsService.getContactDetails();
  }

}

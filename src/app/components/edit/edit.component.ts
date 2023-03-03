import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from 'src/app/interfaces/contacts';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  

  model:Contacts={
    id: 0,
    name: '',
    email: '',
    phone: ''
  }
  constructor(private contactsService: ContactsService, private router:Router, private route:ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.model = this.contactsService.getContactById(id);
  }

  editContact(name: string, email: string, phone: string): void {
    this.contactsService.editContact({...this.model, name, email, phone});
    this.router.navigateByUrl('/');
    }
}

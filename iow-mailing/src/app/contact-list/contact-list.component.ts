import {Component, EventEmitter, OnInit} from '@angular/core';
import {Contact, MailingDataSourceService} from "../mailing-data-source.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts?: Contact[];
  filter = ''
  selected?: Contact;

  constructor(private service: MailingDataSourceService) {
  }

  ngOnInit(): void {
    this.getContacts('')
  }

  cleanUser(): void {
    this.selected = undefined
  }
  getContacts(filter?: string): void {
    this.filter = filter || '';
    this.service.getAll(filter).subscribe(data => {
      this.contacts = data;
    });
  }
}

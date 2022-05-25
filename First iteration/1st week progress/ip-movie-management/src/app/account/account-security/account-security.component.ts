import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-security',
  templateUrl: './account-security.component.html',
  styleUrls: ['./account-security.component.css','../account.component.scss']
})
export class AccountSecurityComponent implements OnInit {
  ngOnInit(): void {
    console.log("Account Security opened")
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private storage: StorageService) { }

  ngOnInit() {
  }

  async login() {
    await this.storage.set('TOKEN', 'test token');
    this.router.navigateByUrl('/tabs/home');
  }
}

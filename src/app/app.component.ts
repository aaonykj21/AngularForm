import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;

  ngOnInit(): void {
    // liff.init({ liffId: '2007376637-MwJPe7Lw' }) 
    //   .then(() => {
    //     if (!liff.isLoggedIn()) {
    //       liff.login(); 
    //     } else {
    //       console.log('User is logged in');
    //     }
    //   })
    //   .catch((err) => {
    //     console.error('LIFF init error', err);
    //   });
  }
}
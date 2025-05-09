import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catBreeds: any[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCatBreeds().subscribe((data: any) => {
      this.catBreeds = data;
      catchError((error) => {
        alert('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
        console.error('API Error:', error);
        return throwError(() => error);
      })
    });
  }
}

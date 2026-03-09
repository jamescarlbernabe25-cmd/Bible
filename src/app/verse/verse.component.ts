 /* Author: James Carl Bernabe
Activity Title: AX003 – Angular HTTP Client
Date Completed: January 14, 2024  */

import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verse.component.html',
  styleUrl: './verse.component.css'
})
export class VerseComponent implements OnInit{

  vresult: any = "Load Processing";
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // You can call getBibleVerse here with a default reference if you want
   
  }

  getBibleVerse(reference: string, event: Event,version:string) {
    event.preventDefault();
   if(reference!==''){
    const url =`https://bible-api.com/${reference}?translation=${version}`;

    this.http.get(url).subscribe(msg => {
      this.vresult = msg;
     
    });
  }else{
    window.alert('Please input verse. Thank you. God Bless.')
  }
}}

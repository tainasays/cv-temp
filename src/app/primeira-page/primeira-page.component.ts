import { Component, OnInit } from '@angular/core';
import { PrimeiraPageModule } from './primeira-page.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primeira-page',
  templateUrl: './primeira-page.component.html',
  styleUrls: ['./primeira-page.component.css']
})
export class PrimeiraPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

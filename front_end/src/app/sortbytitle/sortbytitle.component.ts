import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sortbytitle',
  templateUrl: './sortbytitle.component.html',
  styleUrls: ['./sortbytitle.component.css']
})
export class SortbytitleComponent implements OnInit {

  constructor(private service: SharedService) { }

  Movielist: any=[];

  ngOnInit(): void {
    this.refreshMovList();
  }

  refreshMovList(){
    this.service.getsortbytitle().subscribe(data=>{
      this.Movielist=data;
    });
  }
}

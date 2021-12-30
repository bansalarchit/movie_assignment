import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-sortbyreleasedate',
  templateUrl: './sortbyreleasedate.component.html',
  styleUrls: ['./sortbyreleasedate.component.css']
})
export class SortbyreleasedateComponent implements OnInit {
  constructor(private service: SharedService) { }

  Movielist: any=[];

  ngOnInit(): void {
    this.refreshMovList();
  }

  refreshMovList(){
    this.service.getsortbydate().subscribe(data=>{
      this.Movielist=data;
    });
  }



}

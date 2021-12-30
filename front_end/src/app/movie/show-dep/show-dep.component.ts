import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']

})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  Movielist: any=[];

  ngOnInit(): void {
    this.refreshMovList();
  }

  refreshMovList(){
    this.service.getMovielist().subscribe(data=>{
      this.Movielist=data;
    });
  }




}

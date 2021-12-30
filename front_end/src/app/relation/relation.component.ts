import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent implements OnInit {
  constructor(private service: SharedService) { }

  Relationlist: any=[];

  ngOnInit(): void {
    this.refreshRelList();
  }

  refreshRelList(){
    this.service.getRealtionlist().subscribe(data=>{
      this.Relationlist=data;
    });
  }




}

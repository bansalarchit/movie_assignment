import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-acr',
  templateUrl: './show-acr.component.html',
  styleUrls: ['./show-acr.component.css']
})
export class ShowAcrComponent implements OnInit {
  constructor(private service: SharedService) { }

  Actorlist: any=[];

  ngOnInit(): void {
    this.refreshAcList();
  }

  refreshAcList(){
    this.service.getActorlist().subscribe(data=>{
      this.Actorlist=data;
    });
  }




}

import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  
  @Input()  movie: any 

  upvote(){
    this.movie.vote++;
    this.service.incrementvote(this.movie.id).subscribe()

  }

  downvote(){
    this.movie.vote--;
    this.service.incrementvote(this.movie.id).subscribe()

  }


  

  ngOnInit(): void {
    console.log(this)
  }

}

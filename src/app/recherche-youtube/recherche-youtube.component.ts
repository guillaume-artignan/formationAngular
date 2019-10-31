import { Component, OnInit } from '@angular/core';
import { Video } from '../video/video.model';
import { YoutubeService } from '../services';

@Component({
  selector: 'app-recherche-youtube',
  templateUrl: './recherche-youtube.component.html',
  styleUrls: ['./recherche-youtube.component.css']
})
export class RechercheYoutubeComponent implements OnInit {

  recherche : string;
  videos : Video[] = [];
  timer : NodeJS.Timer;
    
  constructor(private youtube : YoutubeService) { 

   
  }

  vaChercher(evt){
    
    if (this.timer){
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(()=>{
      this.saisieFaite(evt);
      this.timer = undefined;
    }, 1000);    
  }

  saisieFaite(saisie){
    this.youtube.getVideo(saisie).subscribe((d)=>{
      this.videos = d;
    });
  }

  ngOnInit() {
  }

}

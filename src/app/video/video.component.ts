import { Component, OnInit, Input } from '@angular/core';
import { Video } from './video.model';

@Component({
  selector: 'en3s-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  video : Video;

  constructor() { }

  ngOnInit() {
  }

}

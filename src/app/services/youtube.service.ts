import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../video/video.model';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  
  constructor(private http : HttpClient) { }

  getVideo(recherche : string) : Observable<Video[]>{
    var params: string = [
      `?q=${recherche}`,
      `key=${environment.YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    return this.http.get<any>(environment.YOUTUBE_API_URL+params).pipe(map((d)=>this.donneVideos(d)));
    
  }

  private donneVideos(donnees) : Video[]
  {
    var result : Video[] = [];
    donnees.items.forEach(d => {
      result.push(this.donneVideo(d));
    });
    return result;
  }

  private donneVideo(item){

      var result : Video;
      result = new Video(item.snippet.title,item.snippet.thumbnails.high.url,item.snippet.description,item.id.videoId);
      return result;
  }
}

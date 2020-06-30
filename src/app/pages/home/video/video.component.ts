import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videos = [
    {
      source: './assets/videos/placeholder.mp4',
      title: 'Arschgeficke im Hamsterwald',
      likes: 10,
      dislikes: 2,
      topComment: 'DICKE EUTER DIE FETTE DRECKS SCHLAMPE',
    },
    {
      source: './assets/videos/placeholder.mp4',
      title: 'Arschgeficke im Hamsterwald',
      likes: 10,
      dislikes: 2,
      topComment: 'DICKE EUTER DIE FETTE DRECKS SCHLAMPE',
    },
    {
      source: './assets/videos/placeholder.mp4',
      title: 'Arschgeficke im Hamsterwald',
      likes: 10,
      dislikes: 2,
      topComment: 'DICKE EUTER DIE FETTE DRECKS SCHLAMPE',
    },
    {
      source: './assets/videos/placeholder.mp4',
      title: 'Arschgeficke im Hamsterwald',
      likes: 10,
      dislikes: 2,
      topComment: 'DICKE EUTER DIE FETTE DRECKS SCHLAMPE',
    },
    {
      source: './assets/videos/placeholder.mp4',
      title: 'Arschgeficke im Hamsterwald',
      likes: 10,
      dislikes: 2,
      topComment: 'DICKE EUTER DIE FETTE DRECKS SCHLAMPE',
    },
  ];

  like() {
    console.log('LIKE!');
  }
  dislike() {
    console.log('DISLIKE!');
  }
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.component.html',
  styleUrls: ['./webinars.component.css']
})
export class WebinarsComponent implements OnInit {
  webinars = [
  {v : 'w_d7qs_uCc0'},
  {v: 'oiUFo31IFls'},
  {v: 'RNejKSjdsBg'},
  {v: '8Ysjf6XvQW8'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(): string{
    return 'url("https://res.cloudinary.com/webicoun-india/image/upload/v1614494897/front_page_banner_stepej.jpg")';
  }
}

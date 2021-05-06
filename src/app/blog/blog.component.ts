import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  career = 'assets/career.jpg';
  emotional = 'assets/emotional.jpg';
  mediation = 'assets/mediat.jpg';
  menta = 'assets/menta.jpg';
  yoga = 'assets/yoga.jpg';
  motivation = 'assets/motivation.jpg';
  personality = 'assets/personality.jpg';
  blogs = [
    {
      name: 'Mental Health Is Very Important',
      author: 'Brad Pitt’s Journey',
      pic: 'assets/brad.jpg',
      description: 'It is a pristine meadow and is known as the skiing destination of India',
    },
    {
      name: 'Coping with Exam Stress',
      author : ' Kiran Shibag',
      pic: 'assets/exam.png',
      description: 'It has a reputation as a backpacking center and honeymoon destination',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

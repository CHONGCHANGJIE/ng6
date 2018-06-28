import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ]),
    trigger('enterAnimation', [
      transition('void => *', [
        style({  opacity: 0}),
        animate('500ms ease-out', style( {opacity: 1}))
      ]),
      transition('* => void', [
        style({ opacity: 1}),
        animate('1500ms ease-out', style({ opacity: 0}))
      ])

    ])
  ]

})
export class PostsComponent implements OnInit {
  posts$: Object;

  isLoading = true; // add loader icon

  constructor(private data: DataService ) {

  }


  ngOnInit() {


    this.data.getPosts().subscribe(
      data => {this.posts$ = data;

              this.isLoading = false;
      });
  }


 refresh() {
   console.log("isLoading");
  this.isLoading = true;
  setTimeout(() => {this.isLoading = true; }, 100);
  setTimeout( () => {
  this.data.getPosts().subscribe(
    data => {this.posts$ = data;

            this.isLoading = false;
    });
}, 1500);
 }

}

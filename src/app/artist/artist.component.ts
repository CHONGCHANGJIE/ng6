import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  background = '';
  links = [ {label: 'Track',
              path: 'track'},
            {label: 'Album',
              path: 'album'}];

  toggleBackground() {this.background = this.background ? '' : 'primary';
}

  constructor() { }

  ngOnInit() {
  }

}

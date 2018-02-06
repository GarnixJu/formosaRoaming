import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent {
  @Input() title: string;
  @Input() imageURI: string;
  @Input() duration: string;
  @Input() unread_comment: number;

}

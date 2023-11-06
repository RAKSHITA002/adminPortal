import { Component,Input } from '@angular/core';


interface CardDetails {
  title : string;
  value : string;
  sales : string;
  logo: string;
  textType : string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData:CardDetails | undefined;
}

/**
 * Created by wiekonek on 09.11.16.
 */
import {Component, Input} from '@angular/core';
import {Card} from "./card";

@Component({
  selector: 'card',
  template: `<div>
      <h3>{{model.key}}#{{model.name}}</h3> <br/>
      <img src={{model.avatarUrls.48x48}}/>
    </div>`,
})

export class CardComponent {
  @Input() model:Card;
}


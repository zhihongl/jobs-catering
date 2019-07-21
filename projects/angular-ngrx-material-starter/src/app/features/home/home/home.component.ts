import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import {DataService} from '../../../core/data/data.service';

@Component({
  selector: 'anms-about',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../../assets/release-butler.png');

  users : Object;

  constructor(
    private data: DataService
  ) {}


  ngOnInit() {  }
}

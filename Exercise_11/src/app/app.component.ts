import { Component } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '150px',
          width: '150px',
          opacity: 1,
          backgroundColor: 'cyan',
        })
      ),
      state(
        'closed',
        style({
          height: '50px',
          width: '50px',
          opacity: 0.3,
          backgroundColor: 'red',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AppComponent {
  title = 'Exercise_8';
  isDark = this.styleManager.isDark;
  isOpen = false;

  constructor(private styleManager: StyleManagerService) {}

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }

  changeIsOpen() {
    this.isOpen = !this.isOpen;
  }
}

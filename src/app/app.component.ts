import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'App';
  name = 'Angular ' + VERSION.major;
}

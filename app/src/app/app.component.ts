import { Component } from '@angular/core';
import { faBook} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title =   'iStoody';
  caption=  'A simple way to track your studying progress';
  icons = {faBook};

}

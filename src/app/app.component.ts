import { Component } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode, faHome, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faUser = faUser;
  faCode = faCode;
  faHome = faHome;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;

}

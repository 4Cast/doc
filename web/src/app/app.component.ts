import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	 tabLinks = [
    {label: 'Guide', link: '/guide'},
    {label: 'API Reference', link: '/api-reference'},
    {label: 'Tutorial', link: '/tutorial'},
  ];
  
  activeLinkIndex = 2;
  
  constructor() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //template: '<span>Dit is de header</span><hr>',
  templateUrl: './header.component.html',
  //styles: ['span { color: red }']
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit() {
    console.log('De header bestaat!');
  }
}

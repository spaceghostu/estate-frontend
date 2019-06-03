import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened = true;

  constructor() { }

  ngOnInit() {
  }

}

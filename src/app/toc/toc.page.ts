import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TOCPage implements OnInit {
  public pages = [
    { title: "Page 1", url: "/page1" },
    { title: "Page 2", url: "/page2" },
    { title: "Page 3", url: "/page3" }
  ];
  constructor() { }

  ngOnInit() {
  }

}

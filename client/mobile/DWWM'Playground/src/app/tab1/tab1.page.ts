import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listeArtic;

  constructor(
    private articlesService : ArticlesService
  ) {}

  getArticles() : void {
    this.listeArtic = this.articlesService.getArticles();
  }
 ngOnInit(){
   this.getArticles();
 }
}

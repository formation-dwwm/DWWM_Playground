import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listeArtic;
 // Récupération de l'import ArticlesService via le constructeur
  constructor(
    private articlesService: ArticlesService
  ) {}

  buttonRoadmap = true;

 // Fonction getArticles appellé sur ce component récupéré depuis ArticlesService
  /*getArticles(): void {
    this.listeArtic = this.articlesService.getArticles();
  }*/
// OnInit la fonction getArticles
 ngOnInit() {
   /*this.getArticles();*/

   this.articlesService.getArt( ).then(artArr=>{this.listeArtic=artArr})
 }
}

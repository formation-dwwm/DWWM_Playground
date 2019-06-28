import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../articles.service';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { WordPressObject } from '../api.service';
import { listArticles } from '../listeArticles';

export interface Article{
id:number,
title:string,
content:string,
date:string,
author:number,

}
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
this.articlesService.getArt().then((wpArticles:WordPressObject[])=>{
 this.listeArtic= this.transformArticles(wpArticles);
})
 }
 
 transformArticles(wpArticles:WordPressObject[]):Article[]{
   return wpArticles.map((article: WordPressObject, index: number, array: WordPressObject[]) => { 
     return this.transformArticle(article)
   })

   
 }
 
 transformArticle(wpArticle:WordPressObject):Article{
   return{
     id:wpArticle.id,
     title:wpArticle.title.rendered,
     content:wpArticle.content.rendered,
     author:wpArticle.author,
     date:wpArticle.date,

   }

 }
}








/*this.getArticles();*/

   //this.articlesService.getArt( ).then(artArr=>{this.listeArtic=artArr})//
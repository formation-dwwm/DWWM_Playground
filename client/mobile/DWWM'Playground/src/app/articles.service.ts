import { Injectable } from '@angular/core';

import { listArticles } from './listeArticles';
// import { Tab1Page } from './tab1/tab1.page';
//   import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
// fonction pour récupérer la liste des articles depuis listArticles
  getArticles() {
    return listArticles;
  }
}
import { Injectable } from '@angular/core';

import { listArticles } from './listeArticles';
// import { Tab1Page } from './tab1/tab1.page';
//   import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  // protected DONNEE_URL: string = 'http://localhost:80/dwwm-pg/wp-json/wp/v2/posts';
  urlAPI = "http://10.121.113.2/dwwm-pg/wp-json/wp/v2/posts";

  // public post(myPost: string ){
  //   return this.fetch(myPost);
  // }
// fonction pour récupérer la liste des articles depuis listArticles
  getArticles() {
    return listArticles;
  }
}

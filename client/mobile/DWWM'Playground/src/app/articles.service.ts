import { Injectable } from '@angular/core';


import { ApiService, WordPressObject } from './api.service';
// import { Tab1Page } from './tab1/tab1.page';
//   import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private apiServ: ApiService) { }


  // fonction pour récupérer la liste des articles depuis listArticles
  public getArt(): Promise<WordPressObject[]>{
    return this.fetch();
  }

  public getById(id: number): Promise<WordPressObject>{
    return this.fetch(`/${id}`);
  }

  public getDatePubliAft(after:string): Promise<WordPressObject>{
    return this.fetch(`?after=${after}`);
  }
  public getByDateSlug(slug:string):Promise<WordPressObject>{
    return this.fetch(`?slug=${slug}`)
  }

  getByPages(page:number ):Promise<WordPressObject>{
    return this.fetch(`?page=${page}`)
  }

  private fetch(path?: string): Promise<any> {
    return this.apiServ.fetch(`posts${path ? path : ''}`);
  }
}

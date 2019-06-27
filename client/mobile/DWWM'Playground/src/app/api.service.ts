import { Injectable } from '@angular/core';

export interface WordObjectRendered{
  rendered:string,
}
export interface WordObjectLink{


}

export interface WordPressObject{
  id:number,
  date:string,
  modified:string,
  title:WordObjectRendered,
  content:WordObjectRendered,
  author:number,
  slug:string,
  link:WordObjectLink,
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  protected BASE_URL: string = 'http://10.121.113.2/dwwm-pg/wp-json/wp/v2/';

  public getArt(collection:string): Promise<WordPressObject[]>{
    return this.fetch(collection);
  }
  

  fetch(path: string, options:any={}){
    return fetch(this.BASE_URL + path, {
      "content-type":"application/json",
      ...options
    })
    .then(res=>res.json())
  }
  }


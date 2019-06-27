import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type WPObservable = any;
type WPPromise = any;

@Injectable({
  providedIn: 'root'
})
// interface Ipute {
//     search();

// }
export class ApiSearchService {

  // Http is deprecated see later for change it
  constructor(private http: HttpClient) { }


  search(keyword: string): Observable<WPObservable> {

    // fetch('http://10.121.113.56/wordpress/wp-json/wp/v2/posts?search=' + keyword)
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    // Search Tags :
      // http://localhost/wordpress/wp-json/wp/v2/tags?search=bjr -> On obtient les id des tags
      // http://localhost/wordpress/wp-json/wp/v2/posts?tags=21, 22 -> Grâce aux id, on obtient les posts associés

    // Search Author :
      // http://localhost/wordpress/wp-json/wp/v2/users?search=vince -> On obtient les id des auteurs
      // http://localhost/wordpress/wp-json/wp/v2/posts?author=1 -> Grâce aux id; on obtient le sposts associés

    // Search Title :

    // Search Content :


    // General search :

    return this.http.get('http://10.121.113.56/wordpress/wp-json/wp/v2/posts?search=' + keyword);
  }

  async searchTag(keyword: string): Promise<WPPromise> {

    const tagsId: number[] = [];
    // Remove hashtag
    const arrTags: string[] = keyword.split('#');
    // Remove the first element of the array
    arrTags.shift();

    await arrTags.forEach((e) => {
      // this.http.get('http://localhost/wordpress/wp-json/wp/v2/tags?search=' + e).subscribe((data) => {
      //  tagsId.push(data['id']);

      //  console.log(tagsId);
      //  debugger;
      // });
      // let getData = await this.http.get('http://localhost/wordpress/wp-json/wp/v2/tags?search=' + e).toPromise();
      // tagsId.push(getData[0]['id']);

     fetch('http://10.121.113.56/wordpress/wp-json/wp/v2/tags?search=' + e)
     .then(res => res.json())
      .then((data) => {
        tagsId.push(data[0].id);
      }
       );
      });

    const finalTags: string = tagsId.join();
    console.log(tagsId);
    return this.http.get('http://10.121.113.56/wordpress/wp-json/wp/v2/posts?tags=' + finalTags);
  }

  async searchAuthor(keyword: string): Promise<WPPromise> {

    const authorId: number[] = [];
    // Remove hashtag
    const arrAuthors: string[] = keyword.split('/');
    // Remove the first element of the array
    arrAuthors.shift();

    await arrAuthors.forEach((e) => {

     fetch('http://localhost/wordpress/wp-json/wp/v2/users?search=' + e)
     .then(res => res.json())
      .then((data) => {
        console.log(data);
        authorId.push(data[0].id);
      }
       );
      });

    const finalAuthors: string = authorId.join();
    console.log(authorId);
    
    return this.http.get('http://localhost/wordpress/wp-json/wp/v2/posts?author=' + finalAuthors);
  }



}

// let searchService = ApiSearchService;

// searchService.search(["", "", "", ""])

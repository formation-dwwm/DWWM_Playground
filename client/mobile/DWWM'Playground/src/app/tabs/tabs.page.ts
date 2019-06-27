import { Component } from '@angular/core';
import { ApiSearchService } from '../api-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
 datas: any;
  constructor(private apiSearch: ApiSearchService) {}

  search(keywords: string) {
    this.apiSearch.search(keywords).subscribe((data) => {
      // this.datas = data.json();
      // console.log(this.datas);
      console.log(data);
      this.datas = data;
    });
  }

  searchTag(keywords: string) {
    return this.apiSearch.searchTag(keywords)
    // .then((data) => {
    //   data.subscribe((data) => {
    //     console.log(data);
    //   });
    // });
  }

  searchAuthor(keywords: string) {
    return this.apiSearch.searchAuthor(keywords)
    // .then((data) => {
    //   data.subscribe((data) => {
    //     console.log(data);
    //   });
    // });
  }

}

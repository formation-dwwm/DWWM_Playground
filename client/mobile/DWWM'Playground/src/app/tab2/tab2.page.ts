import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { ApiSearchService } from '../api-search.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public posts;

  constructor(private apiSearch: ApiSearchService, private tabspage: TabsPage) {}

  ngOnInit(){
    this.searchTag('#tag')
      .then(obs => {
        this.posts = obs;
      })
  }

  searchTag(keywords: string) {
    return this.apiSearch.searchTag(keywords)
  }
}

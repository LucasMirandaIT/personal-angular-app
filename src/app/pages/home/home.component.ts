import { Component, OnInit } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { HomeService } from 'src/app/services/home.service';
import { PagerService } from 'src/app/services/pager';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  typingText;

  constructor(private homeService: HomeService, private pagerService: PagerService) { }

  ngOnInit() {
    this.refreshNews();
    this.typingText = '[ "This is my new Website", "It&rsquo;s Simple", "But it&rsquo;s really my purpose", "To make something simple", "And funny at same time!" ]';
  }

  refreshNews() {
    this.homeService.getNews().toPromise().then((retorno: any) => {
      let aux = JSON.parse(retorno._body);
      this.allItems = aux.articles;
      this.setPage(1);
    })
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

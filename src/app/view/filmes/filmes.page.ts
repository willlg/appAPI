import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { OmdbapiService, SearchType } from 'src/app/model/services/omdbapi.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  result! : Observable<any>;
  searchTerms : string = '';
  type : SearchType = SearchType.all;

  constructor(private omdbApi : OmdbapiService) { }

  ngOnInit() {
    console.log(this.search());
  }

  search(){
    this.result = this.omdbApi.getAll(this.searchTerms, this.type).pipe(map(results =>  results['Search']));
  }

}

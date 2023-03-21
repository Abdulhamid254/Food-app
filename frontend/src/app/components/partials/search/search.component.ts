import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = ''
  constructor(activatedRoute:ActivatedRoute, private router: Router) {
    //the below code helps us read data from the route
    activatedRoute.params.subscribe((params) =>{
      if(params.serachTerm){
          this.searchTerm = params.serachTerm;
      }
    })

   }

  ngOnInit(): void {
  }

  //the below code helps us send data to the route

search(term:string): void {
  if(term){
    this.router.navigateByUrl('/search/' + term);
  }
}
}

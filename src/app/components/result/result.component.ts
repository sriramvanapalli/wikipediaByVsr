import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  searchQuery: string = '';
  constructor(private apiSer:ApiService) { }
  results: any[] = [];
  ngOnInit(): void {
  }
  onSearch() {
    console.log('Search query:', this.searchQuery);
    this.apiSer.getresult(this.searchQuery).subscribe({next:(res)=>{
      
      this.results=res.search_results
      console.log("results: ",this.results);
      this.searchQuery=""
    },error:(err)=>{
      console.log("error:",err)
    }})
  }

}

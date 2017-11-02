//import { BrowserModule } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})

export class CategoriesComponent implements OnInit {
	public titleSection: any = "";
	public currentSection: string = "";
  public verbs: [String];
  private verbsUrl = 'http://localhost:3000/api/v1/verbs';

  constructor(private http: Http, private router: Router) {}

    getAllVerbs() {
    return this.http.get(this.verbsUrl)
      .map((res: Response) => res.json().data)
      .subscribe(verbs => {
        console.log('verbs', verbs)
        this.verbs = verbs;
      });
  }


  ngOnInit(): void {
  	let path = this.router.url;
  	let stringPath = path.split('/').join(' ');
  	
  	this.titleSection = stringPath.charAt(1).toUpperCase() + stringPath.slice(2);

  	console.log('currentSection: ', path);
    console.log('titleSection: ', this.titleSection);
  	console.log('verbs: ', this.verbs);

    this.getAllVerbs();

  }

}

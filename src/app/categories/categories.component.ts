import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Verb } from '../models/verb.model';
import { VerbsService } from '../services/verbs.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
  providers: [VerbsService]
})

export class CategoriesComponent implements OnInit {
	public titleSection: any = "";
	public currentSection: string = "";
  public verbs: Verb[];

  constructor(private router:Router, private verbsService: VerbsService) {}

  getAllVerbs(): void {
    this.verbsService.getAllVerbs()
      .then(verbs => this.verbs = verbs);
  }



  ngOnInit(): void {
  	let path = this.router.url;
  	let stringPath = path.split('/').join(' ');
  	
  	this.titleSection = stringPath.charAt(1).toUpperCase() + stringPath.slice(2);

    let verbs = this.verbsService.getAllVerbs();
    console.log('verbs: ', verbs);

  	console.log('currentSection: ', path);
  	console.log('titleSection: ', this.titleSection);

  }

}

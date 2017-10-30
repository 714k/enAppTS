import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Verb } from '../models/verb.model';
import { VerbsService } from '../services/verbs.service';


@Component({
  selector: 'api-manager',
  templateUrl: './api-manager.component.html',
  styleUrls: ['./api-manager.component.less'],
  providers: [VerbsService]
})
export class ApiManagerComponent implements OnInit {
	verbs: Verb[];
	private examplesArr = [];
	private newVerb;

	private id: number = 0;
	private title: string;
	private meaning: string;
	private srcImg: string;
	private form: string;
	private category: string;
	private examples: [''];


	private categories = [
		{value: 'A', viewValue: 'Category A'},
		{value: 'B', viewValue: 'Category B'},
		{value: 'C', viewValue: 'Category C'},
		{value: 'D', viewValue: 'Category D'},
	];


  constructor(private router:Router, private verbsService: VerbsService) { }

  addExample(data: any): void {
  	this.examplesArr.push(data);
  	//examples.value = '';
  	console.log('data: ', data);
  	console.log('examples: ', this.examplesArr);
  }

  addVerb(data: any): void {
  	data.examples.push(this.examplesArr);
  	console.log('verb added: ', data);
		this.id++;
		this.title = data.title;
		this.meaning = data.meaning,
		this.srcImg =	data.srcImg,
		this.form =	data.form,
		this.category =	data.category,
		this.examples =	data.examples


  	this.verbsService.addVerb(
			this.id,
			this.title,
			this.meaning,
			this.srcImg,
			this.form,
			this.category,
			this.examples
  	)
  	.then(data => {
  		console.log('New verb was added: ', data);
  	});
  }

/*
  addVerb(
  	id: number,
  	title: string,
		meaning: string,
		srcImg: string,
		form: string,
		category: string,
		examples: any
	): void {
		title = title.trim();
		meaning = meaning.trim();
		srcImg = srcImg.trim();
		form = form.trim();
		category = category.trim();
		examples = examples.trim();
		id++;
  	this.verbsService.addVerb(id, title, meaning, srcImg, form, category, examples)
  	.then(verb => {
  		this.verbs.push(verb);
  	});
  }
*/  

  ngOnInit() {
  }

}

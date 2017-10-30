import { Injectable }    from '@angular/core';
//import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Headers, Http } from '@angular/http';
import { Verb } from '../models/verb.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VerbsService {
	private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
	private verbsUrl = 'http://localhost:3000/api/v1/verbs';  // URL to web api

	constructor(private http: Http){}

	getAllVerbs(): Promise<Verb[]> {
		return this.http.get(this.verbsUrl)
			.toPromise()
			.then(response => response.json().data as Verb)
			.catch(this.handleError);
	}

	addVerb(
		id: number,
		title: string,
		meaning: any,
		srcImg: string,
		form: string,
		category: string,
		examples: ['']
		): Promise<Verb[]> {
		return this.http
		.post(this.verbsUrl, JSON.stringify(
			{
				id: id,
				title: title,
				meaning: meaning,
				srcImg: srcImg,
				form: form,
				category: category,
				examples: examples
			}
		))
		.toPromise()
		.then(res => {
			res.json().data as Verb;
			console.log('Verb Added: ', res);
			console.log('Verb: ', Verb);
		})
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Verb } from '../models/verb.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VerbsService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private verbsUrl = 'http://localhost:3000/api/v1/verbs';  // URL to web api

	constructor(private http: Http){}

	getAllVerbs(): Promise<Verb[]> {
		return this.http.get(this.verbsUrl)
			.toPromise()
			.then(response => {response.json().data as Verb[]})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

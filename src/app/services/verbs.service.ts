import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Verb } from '../models/verb.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VerbsService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private verbsUrl = 'http://localhost:3000/api/v1/verbs';  // URL to web api
	//public verbs = [String];

	constructor(private http: Http){}



/*
	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
*/  
}

import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Verb } from '../models/verb.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VerbsService {
	private headers: Headers;
  private options: RequestOptions;
	private verbsUrl = 'http://localhost:3000/api/v1/verbs';  // URL to web api

	constructor(private http: Http){
		this.headers = new Headers(
			{ 'Content-Type': 'application/json',
				'Accept': 'q=0.8;application/json;q=0.9' 
			}
		);

		this.options = new RequestOptions({ headers: this.headers });
	}

	getAllVerbs(): Promise<Verb[]> {
		return this.http.get(this.verbsUrl, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.verbs || {};
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

import { Injectable } from '@angular/core';

// Env config
import { environment } from '../../environments/environment';

// Services
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImagesServiceService {

	private query: string;
	private API_KEY: string = environment.PIXABAY_API_KEY;
	private API_URL: string = environment.PIXABAY_API_URL;
	private URL: string = this.API_URL + this.API_KEY + '&q=';
	private perPage: string = '&per_page=10';

	// Inject service in constructor
	constructor(
		private http: Http
	) { }



	getImage(query){
		return this.http.get(this.URL + query + this.perPage)
			.map(res => res.json());
	}


}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Swim } from './swim'

@Injectable()
export class SwimService {
	
	constructor(private _http:Http) {

	}

	getSwimsFromAPI() {
		return this._http
			.get('app/api/swims.json')
			.do(res => console.log(res))
			.map(swims => swims.json());
	}
}
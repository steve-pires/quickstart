import { Component } from '@angular/core';
import { Swim } from './swim/swim';
import { SwimService } from './swim/swim.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
	swims: Swim[];

	constructor(private _swimService: SwimService) {
	}

	ngOnInit() {
		this._swimService.getSwimsFromAPI()
			.subscribe(
				res => this.swims = res,
				err => console.log(err.status)
			);
		console.log(this.swims);
	}
}

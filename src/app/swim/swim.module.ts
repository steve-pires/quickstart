import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwimListComponent } from './swim-list.component'
import { SwimService } from './swim.service'

@NgModule({
	imports: [CommonModule],
	declarations: [SwimListComponent],
	exports: [],
	providers: [SwimService]	
})

export class SwimModule {

}
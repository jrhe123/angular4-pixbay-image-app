import { Component, OnInit } from '@angular/core';

import { ImagesServiceService } from '../../services/images-service.service';

@Component({
	selector: 'app-images-list',
	templateUrl: './images-list.component.html',
	styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

	images: any[];
	imagesFound: boolean = false;
	searching: boolean = false;
	searchQuery: string;

	constructor(
		private imagesServiceService: ImagesServiceService
	) { }

	ngOnInit() {
	}

	searchImages(query: string){
		this.searching = true;
		return this.imagesServiceService.getImage(query)
			.subscribe(
				data => {
					this.images = data.hits;
					this.imagesFound = true;
				},
				error => {
					console.log('error: ' + error);
				},
				() => {
					console.log('completed');
					this.searching = false;
				}
			);
	}

}

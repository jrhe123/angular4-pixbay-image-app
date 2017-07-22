import { Component, OnInit } from '@angular/core';


// Dialog
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
	selector: 'app-dialog-result-example',
	templateUrl: './dialog-result-example.component.html',
	styleUrls: ['./dialog-result-example.component.css']
})
export class DialogResultExampleComponent implements OnInit {

	selectedOption: string;

	constructor(
		public dialog: MdDialog
	) { }

	ngOnInit() {
	}


	openDialog() {
		let dialogRef = this.dialog.open(DialogResultExampleDialogComponent);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialogComponent>) {}
}
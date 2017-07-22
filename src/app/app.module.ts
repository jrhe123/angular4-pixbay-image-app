// Default Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { ImagesListComponent } from './components/images-list/images-list.component';

// Dialog component
import { DialogResultExampleComponent, DialogResultExampleDialogComponent } from './components/dialog-result-example/dialog-result-example.component';

// Modules
// Masonry
import { MasonryModule } from 'angular2-masonry';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MaterialModule,
	MdAutocompleteModule,
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdCheckboxModule,
	MdChipsModule,
	MdCoreModule,
	MdDatepickerModule,
	MdDialogModule,
	MdExpansionModule,
	MdGridListModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdMenuModule,
	MdNativeDateModule,
	MdPaginatorModule,
	MdProgressBarModule,
	MdProgressSpinnerModule,
	MdRadioModule,
	MdRippleModule,
	MdSelectModule,
	MdSidenavModule,
	MdSliderModule,
	MdSlideToggleModule,
	MdSnackBarModule,
	MdSortModule,
	MdTableModule,
	MdTabsModule,
	MdToolbarModule,
	MdTooltipModule,
} from '@angular/material';


// Services
import { ImagesServiceService } from './services/images-service.service';


// Material
import 'hammerjs';




@NgModule({
	// Components
	declarations: [
		AppComponent,
		MyFormComponent,
		DialogResultExampleComponent,
		DialogResultExampleDialogComponent,
		ImagesListComponent
	],
	// Modules
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,

		// Material Modules
		BrowserAnimationsModule,
		MdInputModule,
		MdButtonModule,
		MdCheckboxModule,
		MdDatepickerModule,
		MdNativeDateModule,
		MdAutocompleteModule,
		MdRadioModule,
		MdSelectModule,
		MdMenuModule,
		MdSlideToggleModule,
		MdListModule,
		MdGridListModule,
		MdCardModule,
		MdTabsModule,
		MdChipsModule,
		MdIconModule,
		MdProgressSpinnerModule,
		MdProgressBarModule,
		MdDialogModule,
		MdTooltipModule,

		// 
		MaterialModule,
		MasonryModule
	],
	// Services
	providers: [
		ImagesServiceService
	],
	bootstrap: [
		AppComponent, 

	],
	// Dialog compoent
	entryComponents: [
		DialogResultExampleDialogComponent
	]
})
export class AppModule { }

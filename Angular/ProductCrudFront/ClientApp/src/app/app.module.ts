import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [ AppComponent, ProductListComponent, ProductFormComponent ],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: '', component: ProductListComponent, pathMatch: 'full' },
			{ path: 'product', component: ProductListComponent },
			{ path: 'product/add', component: ProductFormComponent },
			{ path: 'product/edit', component: ProductFormComponent }
		]),
		BrowserAnimationsModule,
		MatSliderModule,
		MatSidenavModule,
		MatButtonToggleModule,
		MatIconModule,
		MatTableModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatCheckboxModule,
		MatSnackBarModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
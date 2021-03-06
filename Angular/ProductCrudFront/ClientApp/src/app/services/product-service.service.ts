import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const options = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	}),
	body: {
		id: 1,
		name: 'test'
	}
};

@Injectable({
	providedIn: 'root'
})
export class ProductServiceService {
	constructor(private http: HttpClient) {}

	private extractData(res: Response) {
		let body = res;
		return body || {};
	}

	public get(filter: any): Observable<any> {
		return this.http.get(environment.urlApi + 'product/get', { params: filter }).pipe(map(this.extractData));
	}

	public post(product: any): any {
		return this.http.post(environment.urlApi + 'product/create', product);
	}

	public patch(product: any): any {
		return this.http.patch(environment.urlApi + 'product/edit', product);
	}

	public delete(product: any): any {
		options.body = product;
		return this.http.delete(environment.urlApi + 'product/delete', options);
	}

	public updateCategory(productCategory: any): any {
		return this.http.post(environment.urlApi + 'product/updatecategory', productCategory);
	}

	public uploadImage(productImage: any): any {
		return this.http.post(environment.urlApi + 'product/uploadfile', productImage);
	}

	public getProductImages(product: any): any {
		return this.http
			.get(environment.urlApi + 'product/getimages', { params: { productId: product.id } })
			.pipe(map(this.extractData));
	}

	public deleteImage(product: any): any {
		options.body = product;
		return this.http.delete(environment.urlApi + 'product/deleteimage', options);
	}
}

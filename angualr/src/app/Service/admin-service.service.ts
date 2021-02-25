import { Injectable } from '@angular/core';
import { url } from '../config';
// import { trackUrl } from '../config';
// import { chaturl } from '../config';
import { HttpHeaders, HttpClient,HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

    httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(public http: HttpClient) { }

	login(data) {
	    return new Promise((resolve,reject) => {
	       this.http.post(url+'login',data,this.httpOptions).subscribe(postdata => {
	         resolve(postdata);
	       }, err => {
	         console.log(err);
	         reject(err);
	       });
	     });
	}


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackModule } from '../models/feedbackModule';


@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  feed: any;
  constructor(private http: HttpClient) {}
  public saveData(feed: FeedbackModule,id:number): Observable<any> {
    return this.http.post<FeedbackModule>(`http://localhost:8080/add/${id}`, feed, {
      responseType: 'text' as 'json',
    });
  }
}

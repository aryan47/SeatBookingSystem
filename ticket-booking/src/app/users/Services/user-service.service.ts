import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /**
   * Used to send mail to the provide email
   * @param to : email
   */
  public sendConfirmationMail(to: String) {
    return this.http.post(this.baseUrl + '/mail', JSON.stringify({ "to": to }), {
      headers: { 'Content-type': 'application/json' }
    });
  }
}

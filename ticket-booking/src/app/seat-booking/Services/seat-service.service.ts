/*
 * Created on Sat Nov 30 2019
 * Created by - Ritesh Kant
 *
 */
import { Injectable } from '@angular/core';
import { Seats } from '../Models/seats.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeatServiceService {
  private baseUrl: String = environment.baseUrl;
  private _seats: Array<Seats>;

  constructor(private http: HttpClient) {
    this._seats = [];
  }

  public getAllSeats() {
    return this.http.get(this.baseUrl + '/seats');
  }
  /**
   * Used to add seat details
   * @param seatNum 
   * @param isSelected 
   */
  public addSeatsDetail(seatDetails) {
    return this.http.post(this.baseUrl + '/seats', seatDetails);
  }

  /**
   * Check seat status
   * @param seatNum 
   * @param isSelected 
   */


  /**
   * Used to update seat details
   * @param seatNum 
   * @param isSelected 
   */
  public toggleSeatSelect(seatNum: String) {
    this._seats.forEach((value, index) => {
      if (value.seatNum.trim() === seatNum) {
        value.isSelected = !value.isSelected;
      }
    });
  }

  /**
   * Used to confirm seat booking
   * @param seats 
   */
  public bookSeat(seats) {
    console.log(seats);
    return this.http.patch(this.baseUrl + '/seats', seats);


  }
}

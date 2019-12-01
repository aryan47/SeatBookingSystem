/*
 * Created on Sat Nov 30 2019
 * Created by - Ritesh Kant
 *
 */
export class Seats {
    public seatNum: String;
    public isSelected: boolean;

    constructor(seatNum: String, isSelected: boolean) {
        this.seatNum = seatNum;
        this.isSelected = isSelected;
    }
}
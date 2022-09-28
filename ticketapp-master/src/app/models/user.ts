import { Booking } from './booking';

export class User {
  customerid?: number;
  email?: string;
  userName?: string;
  mobileNumber?: string;
  password?: string;
  location?:string;
  booking?: Booking;
  constructor() {
   }
}

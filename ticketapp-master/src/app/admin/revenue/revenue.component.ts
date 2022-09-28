import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TheatreService } from 'src/app/services/theatre.service';
import { Booking } from '../../models/booking';
import { Movie } from '../../models/movie';
import { Theatre } from '../../models/theatre';
import { BookingService } from '../../services/booking.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
})
export class RevenueComponent implements OnInit {
  theatre: Theatre;
  booking: Booking[];
  total: any;
  movie: Movie[];
  startdate: any;
  enddate: any;
  theatreid: number;
  revenue: number = 0.0;
  constructor(
    private bookingservice: BookingService,
    public actRoute: ActivatedRoute,
    public movieService: MovieService,
    public theatreService: TheatreService
  ) {}

  ngOnInit(): void {
    
    this.getById(this.actRoute.snapshot.params['theatreid']);
    this.theatreid = Number(this.actRoute.snapshot.params['theatreid']);

  }

  getById(theatreid: any) {
    this.bookingservice.getBookingsByBookingidtotal(theatreid).subscribe({
      next: (data) => {
         (this.total = data);
      },
    });
  }
  revenueCalculator() {
    let date1 = new Date(this.startdate);
    let date2 = new Date(this.enddate);
    console.log(this.startdate + ' ' + this.enddate);
    console.log(this.theatreid);
    this.theatreService
      .calculateRenterRevenue(this.theatreid, this.startdate, this.enddate)
      .subscribe((revenuegenerated) => (this.revenue = revenuegenerated));
    console.log(this.revenue);
  }
}

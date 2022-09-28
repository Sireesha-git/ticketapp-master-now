import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  customer: User;
  movie: any;
  customerid:number;
  constructor(
    private http: HttpClient,
    public actRoute: ActivatedRoute,
    private registrationService: RegistrationService
  ) {}
  
  ngOnInit(): void {
    let Response = this.http.get('http://localhost:8080/Movies').subscribe((data) => (this.movie = data));
    this.getByUserId(this.actRoute.snapshot.params['customerid']);
    this.customerid=this.actRoute.snapshot.params['customerid']
    console.log(this.customerid)
  }

  getByUserId(customerid: any) {
    this.registrationService.getUserByid(customerid).subscribe((data) => {
    
        (this.customer = data);
        
    });
  }
  
  searchText :string='';
  onSearchTextEntered(SearchValue:string){
    this.searchText=SearchValue ;
    console.log(this.searchText);
  }
}

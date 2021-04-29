import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Benificiary } from 'src/app/model/benificiary.modal';
import { BenificiaryService } from 'src/app/service/benificiary.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  benificiary:Benificiary=new Benificiary();
  submitted=false;

  constructor(private benificiaryService:BenificiaryService,private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(){
  this.submitted=true;
  this.benificiaryService.registerBenificiary(this.benificiary).subscribe(
    data=>console.log(data),error=>console.log(error)
  );
  this.benificiary=new Benificiary();
  this.router.navigate(['/benificiary'])
  }

}

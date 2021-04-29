import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Benificiary } from 'src/app/model/benificiary.modal';
import { BenificiaryService } from 'src/app/service/benificiary.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benificiaries:Benificiary[];

  constructor(private benificiaryService:BenificiaryService,private router:Router) { }

  ngOnInit(): void {
    this.benificiaryService.getBenificiary();
  }

}

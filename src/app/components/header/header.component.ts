import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public percent: number = 60;
  public myData: Data;
  total = 100;
  finished: number;
  formatSubtitle = (percent: number) => {
    return `${this.finished}/${this.total}`;
  }
  constructor(private apiServices: ApiService) { }

  ngOnInit() {

  }

  getData(year) {
    this.apiServices.getData().subscribe(data => {
      data.forEach(value => {
        if (value.year == year) {
          this.myData = value;
        }
      })
      this.finished = this.myData.circle1.value;
    })
  }

  click(year: number) {
    if (year == 2017 || year == 2018) {
      this.getData(year);
    } else {
      this.myData = null;
    }
  }

}

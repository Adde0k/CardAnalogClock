import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-analog-clock',
  templateUrl: './card-analog-clock.component.html',
  styleUrls: ['./card-analog-clock.component.scss']
})
export class CardAnalogClockComponent implements OnInit {
  hour = 0;
  minute = 0;
  second = 0;
  d: Date | undefined;

  ngOnInit(): void {
    setInterval(() => {
      this.d = new Date();
      this.minute = this.d.getMinutes() * 6;
      this.second = this.d.getSeconds() * 6;
      this.hour = this.d.getHours() * 30 + Math.round(this.minute / 12);
    }, 1000)
  }

}

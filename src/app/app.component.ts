import { Component } from '@angular/core';	
import {ApicallService} from './apicall.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  weather:any=[];
  perDayWeather: any = [];
  date: Date;
  days: any = [];
  constructor(private apicall:ApicallService){}

  ngOnInit(){
	  this.tempshow();
	  setInterval(()=>{this.tempshow();},500000)
  }

  sortData(){
	let len = this.weather.list.length;
	let prevdate = "";
	let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
	let d = new Date();
	let daycount=d.getDay();
	  for (let i=1; i<len; i++){
		if (prevdate != this.weather.list[i].dt_txt.split(" ")[0]){
			this.perDayWeather.push(this.weather.list[i]);
			prevdate = this.weather.list[i].dt_txt.split(" ")[0];
			this.days.push(days[daycount]);
			if (daycount == 6){
				daycount=0;
			}
			else{
				daycount++;
			}
		}
	  }
  }

  tempshow(){
	this.apicall.showit().subscribe((data)=>{
		this.weather=data;
		this.date= this.weather.list[0].dt_txt;
		this.sortData();
		console.log(this.perDayWeather);
		//console.log(this.weather.list[0].dt_txt);
		//console.log(this.weather.list[0].weather[0].description);
	},(err)=>{
		console.log(err);
	});
  }

			}
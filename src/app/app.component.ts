import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'drupal7decoupled';
  datum = [];
  // inputClass = "login-blue";
  inputData = "";
  // secondInputData = "";
  username = "";
  password = "";
  submit = "";


  // @ViewChild("thirdInput", {static: true}) otherInput: ElementRef;

  constructor(private httpclient: HttpClient) {
  	console.log("Constructor was called");
  }

  ngOnInit() {
  	console.log("NgOnInit was called");
  	// this.httpclient.get('http://drupal7-decoupled.dd:8083/api/user').subscribe((data:any) => {
  	// 	this.datum = data;
  	// 	console.log(this.datum);
  	// });
  	// 	setTimeout(() => {
		// 		this.inputClass = "login-red";
  	// 	}, 3000);
  }

  // inputClick(event) {
  // 	this.inputData = event.target.value;
  // }

  // secondInputClick(inputData) {
  // 	this.secondInputData = inputData;
  // }

  onSubmit() {
  	this.submit = "Hooray!";
  	// console.log(this.inputData);
  	// console.log(this.secondInputData);
  	// console.log(this.otherInput.nativeElement.value);
  	// this.otherInput.nativeElement.value = "Geia!";
  	// this.username = "PEPS";
  	console.log(this.username);
  	console.log(this.password);
  	const credentials = {
  		username: this.username,
  		password: this.password
  	};
  	this.httpclient.post('http://drupal7-decoupled.dd:8083/api/user/login', credentials).subscribe((data:any) => {
  		console.log(data);
  	});
  }
}

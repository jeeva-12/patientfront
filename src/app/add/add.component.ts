import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  patientName=""
  address=""
  mobile=""
  age=""
  drName=""

  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any={"patientName":this.patientName," address":this.address," mobile":this.mobile,"age":this.age,"drName":this.drName}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)

        if (response.status=="success") {
          alert("Employee Added")
          this.patientName=""
          this.drName=""

          
        } else {
          alert("Something Went Wrong")
        }
      }
    )
  }

}

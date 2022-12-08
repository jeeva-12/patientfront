import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private api:ApiService, private route:Router){}
  
  readValue=()=>
  {
    let data:any={"patientName":this.patientName,"address":this.address,"mobile":this.mobile,"age":this.age,"drName":this.drName}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
      
        console.log(response)
        if (response.status=="success") {
          alert("patient added successfully")
  
          this.patientName=""
          this.address=""
          
          this.age=""
          this.drName=""
         
        
          
        } else {
          alert("something went wrong")
        }
      }
    )
  
  
  }
}

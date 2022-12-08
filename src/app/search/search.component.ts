import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private api:ApiService,private route:Router){}
 patientName=""
  searchPatient:any=[]
  readValues=()=>
  {
    let data:any={"patientName":this.patientName}
    console.log(data)
    this.api.searchPatient(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0){
          alert("Invalid employee code")
        }
        else{
          this.searchPatient=response;

        }
      }
      )
    
    
    }
    deleteBtnClick=(id:any)=>
    {
      let data:any={"id":id}
      this.api.deletePatient(data).subscribe(
        (generated:any)=>{
          console.log(generated)
          if(generated.status=="success"){
          alert("Patient deleted successfully")
          window.location.reload()
          }
          else{
            alert("patient doesn't exist")
  
          }
        }
      )
    
  
  }
  }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string}={id:0,name:"",status:""};

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id:number = +this.route.snapshot.params['id'];
    console.log('id is',id);
    this.server = this.serversService.getServer(id);
   this.route.params.subscribe(
      (params:Params)=>{
      this.server=this.serversService.getServer(+params['id']);
      }
    )
  }

  onEdit(){
  this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:"preserve"})
}

}
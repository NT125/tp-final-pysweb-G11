import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-fb';
import { ApiMethod } from 'ngx-fb/dist/esm/providers/facebook';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  mensaje: string="";

  constructor(private fb: FacebookService) { 
    this.iniciarFb();
  }

  ngOnInit(): void {
  }

  iniciarFb(){
    let initParams: InitParams={
      appId: '329480001960761',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0'
    };
    this.fb.init(initParams);
  }

  postFb(){
    var apiMethod: ApiMethod = "post";
    this.fb.api('/102241695449963/feed', apiMethod, {
      "message": this.mensaje,
      "access_token": "EAAErqQp6OzkBAGODxqnpyz9TdQNr6wery6o9LRuBdDS3HeuIuccFbeild8nN9Y7laJ7KQkpIOrmz7RVZBL3dcy2AnnpsJsKdhmxchZCZCFznX1qt3GF3mntcqW9kBmsEfZCk4697VRBZC4PhPxPZB8zKnZAAvXxQZB27lxtgnOo5e59I8AKNAPwM4StHu2rQkAgZD"
    });
    this.mensaje=null;
  }
}

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
      "access_token": "EAAErqQp6OzkBAHKd3FbAMmEC66KdeBl130gxkasHaKDApTJvq2YWiCvkoAp6eW5UmnUsoKondvvMibNCpSTdZCXbfaU25H4Y4ZAbnuxFSefxvMjfg2BPROfZAmYGsERThsfA4uStPLgvA29DNSo36UZACcf6ZCz9i5ZB1DJWyhcMo0RQZAtWB54wL3nIPmaaMtv8CfsJUIJ3OoydyE9JdWE"
    });
  }
}

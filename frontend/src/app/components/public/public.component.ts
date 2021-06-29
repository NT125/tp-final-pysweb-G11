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
      "access_token": "EAAErqQp6OzkBAFN63MNzbpaAeD14ht0KoRr3ZAyFYF6zCpSArhhY5ogmyO4Xsxts1Ay2cubstBiMKqO8mqtYapUSvjBmHffjVeYxZCeo0IjJ5e0efoENsDyVW9ByAN4RN8sl7pte7IHgSJRrqZBwlZBbHC3gveC7FcUAvUOsyUo5mrpydyraOi7BI1CEPR0ZD"
    });
    this.mensaje=null;
  }
}

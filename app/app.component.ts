import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
	{
		title: 'HOME',
		url:'/tab1',
		icon:'home'
	},
	{
		title: 'LOGIN',
		url:'/tab2',
		icon:'apps'
	},
	{
		title: 'LIST PRODUCT',
		url:'/tab3',
		icon:'add'
	},
	{
		title: 'ADD PRODUCT',
		url:'/home',
		icon:'add'
	},
	{
		title: 'ARTIKEL',
		url:'/artikel',
		icon:'add'
	},
	{
		title: 'KOMENTAR',
		url:'/komentar',
		icon:'add'
	},
	];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

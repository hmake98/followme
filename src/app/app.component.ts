import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { TextZoom } from '@capacitor/text-zoom';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public platform: Platform) { }

  async ngOnInit() {
    SplashScreen.show();

    this.platform.ready().then(async () => {
      SplashScreen.hide();
      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.toggleDarkTheme(prefersDark.matches);
      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addEventListener('change', (mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
      try {
        await StatusBar.setOverlaysWebView({ overlay: false });
        await StatusBar.setStyle({ style: Style.Dark });
      } catch (e) {
        console.log('StatusBar plugin not supported in web');
      }
    }).catch((e) => console.log(e));
  }

  // Add or remove the "dark" class based on if the media query matches
  toggleDarkTheme(shouldAdd): void {
    document.body.classList.toggle('dark', shouldAdd);
  }

  setTextZoom(value: number): void {
    TextZoom.set({ value });
  }
}

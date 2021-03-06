import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {navigation} from '../constants/navigation.constants';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(public authService: AuthService, private navCtrl: NavController, public router: Router) {
    }

    ngOnInit() {
    }

    goToLogin() {
        this.navCtrl.navigateForward(`${navigation.home}`, true);
    }

    logout() {
        this.authService.logout();
    }


}

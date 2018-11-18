import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {navigation} from '../constants/navigation.constants';
import {routerTransition} from '../animation';
import {Router} from '@angular/router';
import {AuthService} from '../services/authentication/auth.service';
import {select, Store} from '@ngrx/store';
import {getDeelnemerScore} from '../store/poules/poules.reducer';
import {Observable} from 'rxjs';
import {IAppState} from '../store/store';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    animations: [routerTransition],
})
export class HomePage implements OnInit {
    showToolbar = true;
    deelnemer$: Observable<any>;
    constructor(private navCtrl: NavController, public router: Router, public authService: AuthService, private store: Store<IAppState>) {
    }

    ngOnInit() {
        this.deelnemer$ = this.store.pipe(select(getDeelnemerScore));
    }

    getState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

    goToVoorspelling() {
        this.navCtrl.navigateForward(`${navigation.home}/${navigation.voorspel}`, false);
    }

    goToDashboard() {
        this.navCtrl.navigateForward(`${navigation.home}/${navigation.dashboard}`, false);
    }
    goToPoule() {
        this.navCtrl.navigateForward(`${navigation.home}/${navigation.poules}`, false);
    }

    goToTest() {
        this.navCtrl.navigateForward(`${navigation.home}/${navigation.poules}`, false);
    }

    goToLogin() {
        this.navCtrl.navigateForward(`${navigation.login}`, false);
    }


}

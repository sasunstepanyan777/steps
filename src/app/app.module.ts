import { SsModule } from '@stepsas/core';
import { HttpModule } from '../http/http.module';

// Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button.component';

// Providers
import { AppService } from './app.service';
import { RouterModule } from '../router/router.module';
import { Routes } from '../router/models/routes';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

@SsModule({
    components: [
        AppComponent,
        ButtonComponent,
        HomeComponent
    ],
    imports: [
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        AppService
    ]
})
export class AppModule {

    public static bootstrap(): void {

    }
}

import { SsModule } from '../core/core';
import { HttpModule } from '../http/http.module';

// Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button.component';

// Providers
import { AppService } from './app.service';

@SsModule({
    components: [
        AppComponent,
        ButtonComponent
    ],
    imports: [
        HttpModule
    ],
    providers: [
        AppService
    ]
})
export class AppModule {

    public static bootstrap(): void {

    }
}

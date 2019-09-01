import { Provider } from '../core/provider';

@Provider()
export class Router {

    public navigate(url: string) {
        history.pushState(null, '', url);
    }
}

import { UserService } from "./src/app/service/user.service";

class PostService {
  public getList() {

  }
}
class ComponentList {
  constructor() { }
}


class Injector {
  public _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => this._container.set(service, new service))
  }

  public get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('RootInjectors, no providen for')
    }
    return serviceInstance
  }
}


const rootInjectors = new Injector([PostService])
const listComponent = new ComponentList(rootInjectors.get(UserService))

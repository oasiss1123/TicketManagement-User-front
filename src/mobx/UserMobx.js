import { computed, observable, action } from 'mobx';
export default class UserMobx {
  @observable isLogin = true;
  @observable name = '';
  @observable count = 0;
  @observable access_token = '';
  @observable role = 'ADMIN';
  @observable menus = ['1'];

  constructor() {
    this.onInitial();
  }

  @action
  onInitial() {
    try {
      this.name = 'xxx';
    } catch (error) {
      console.log(error);
    }
  }

  @action
  onLogin() {
    this.role = 'ADMIN';
  }

  @computed
  get onCheckLogin() {
    return this.isLogin;
  }

  @computed
  get getName() {
    return this.name;
  }

  @computed
  get returnCount() {
    return this.count;
  }

  @action
  increate = () => {
    this.count = this.count + 1;
  };

  @action
  subtract() {
    this.count--;
  }

  @computed
  get returnToken() {
    return this.access_token;
  }
}

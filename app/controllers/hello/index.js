import ApplicationAction from '../application';

export default class Action extends ApplicationAction {
  async handler() {
    return this.view('hello/index', { hello: 'hello', app: 'jtester' });
  }
}

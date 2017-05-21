import ApplicationAction from '../application';

export default class IndexAction extends ApplicationAction {
  async handler() {
    return this.view('hello/index', { world: 'world' });
  }
}

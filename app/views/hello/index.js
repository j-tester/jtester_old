import ApplicationView from '../application';

export default class View extends ApplicationView {
  async handler(data) {
    return this.render('hello/index', data);
  }
}

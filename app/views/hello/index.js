import ApplicationView from '../application';

export default class IndexView extends ApplicationView {
  handler(data) {
    return this.render('hello/index', data);
  }
}

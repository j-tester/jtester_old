import ApplicationView from '../application';

export default class View extends ApplicationView {
  async handler(input) {
    const data = input;
    data.sampleJSON = {
      leftURL: 'https://domain.com/api/v1/test',
      rightURL: 'https://staging.domain.com/api/v1/test',
      sortKey: 'userId',
      ignore: 'dynamicAttribute',
      method: 'POST',
      body: {
        username: 'jtester',
        password: 'is cool',
      },
    };
    return this.render('hello/index', data);
  }
}

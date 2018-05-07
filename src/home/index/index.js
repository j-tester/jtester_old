module.exports = class index {
  async handler() {
    const data = {
      sampleJSON: {
        leftURL: 'https://domain.com/api/v1/test',
        rightURL: 'https://staging.domain.com/api/v1/test',
        sortKey: 'userId',
        ignore: 'dynamicAttribute',
        method: 'POST',
        body: {
          username: 'jtester',
          password: 'is cool',
        },
      },
    };
    return this.render(data);
  }
};

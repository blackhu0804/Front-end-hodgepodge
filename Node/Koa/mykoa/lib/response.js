let response = {
  _body: undefined,

  get body () {
    return this._body;
  },
  
  set body (val) {
    if (val == null) {
      return this.res.statusCode = 204;
    }
    this.res.statusCode = 200;
    this._body = val;
  }
}

module.exports = response;
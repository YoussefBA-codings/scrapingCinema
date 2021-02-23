class BaseService {
  constructor() {
    console.log('BASE SERVICE : Construtor');
  }

  setFormData(json) {
    const fd = new FormData();
    for (var key in json) {
      fd.append(key, json[key]);
    }
    return fd;
  }
}

module.exports = BaseService;

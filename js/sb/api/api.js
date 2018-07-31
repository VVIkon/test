(function () {
  function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
  }

  function User(data) {
    this.id = data.id;
    this.name = data.name;
    this.phone = data.phone
  }

  User.prototype.remove = function removeUser(cb) {
    var x = new XMLHttpRequest();

    x.open('DELETE', window.crudURL + '/' + this.id);
    x.setRequestHeader('Content-Type', 'application/json');
    x.send(JSON.stringify(this));
    x.onreadystatechange = function () {
      if (x.readyState === x.DONE) {
        cb(null);
      }
    }
  };

  User.prototype.save = function removeUser(cb) {
    var me = this;
    if (this.id) {
      var x = new XMLHttpRequest();
      x.open('PUT', window.crudURL + '/' + this.id);
      x.setRequestHeader('Content-Type', 'application/json');
      x.send(JSON.stringify(this));

      x.onreadystatechange = function () {
        if (x.readyState === x.DONE) {
          cb(null);
        }
      };
    } else {
      var x = new XMLHttpRequest();
      x.open('POST', window.crudURL);
      x.setRequestHeader('Content-Type', 'application/json');
      x.send(JSON.stringify(this));

      x.onreadystatechange = function () {
        if (x.readyState === x.DONE) {
          me.id = JSON.parse(x.responseText).id;
          cb(null);
        }
      };
    }
  };

  function Student(data) {
    Student.superclass.constructor.apply(this, arguments);
    this.strikes = data.strikes || 0;
  }
  extend(Student, User);

  Student.prototype.getStrikesCount = function () {
    return this.strikes;
  };


  function Support(data) {
    Support.superclass.constructor.apply(this, arguments);
    this.location = data.location;
  }
  extend(Support, User);

  function Admin(data) {
    Admin.superclass.constructor.apply(this, arguments);
  }
  extend(Admin, User);

  User.load = function (cb) {
    var x = new XMLHttpRequest();
    x.open('GET', window.crudURL);
    x.send();
    x.onreadystatechange = function () {
      if (x.readyState === x.DONE) {
        var list = JSON.parse(x.responseText);
        var data = list.map(function (record) {
          if (record.role === 'Student') {
            return new Student(record);
          } else if (record.role === 'Support') {
            return new Support(record);
          } else if (record.role === 'Administrator') {
            return new Admin(record);
          }
        });
        cb(null, data);
      }
    };
  };

  Admin.prototype.save = function (cb) {
    var me = this;
    if (this.id) {
      Admin.superclass.save.apply(this, arguments);
    } else {
      debugger;
      var x = new XMLHttpRequest();
      x.open('POST', window.crudURL);
      x.setRequestHeader('Content-Type', 'application/json');
      var copy = JSON.parse(JSON.stringify(this));
      copy.role = 'Administrator';
      x.send(JSON.stringify(copy));
      x.onreadystatechange = function () {
        if (x.readyState === x.DONE) {
          me.id = JSON.parse(x.responseText).id;
          cb(null);
        }
      };
    }
  };


  window.User = User;
  window.Student = Student;
  window.Support = Support;
  window.Admin = Admin;
})();
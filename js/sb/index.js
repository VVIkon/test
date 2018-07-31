var userStorage = new UserStorage();

window.addEventListener('load', function() {
  let userList = document.querySelector('#user-list');
  let mainContext = document.querySelector('.main-content');
  let btnPlus = document.querySelector('.add-user');

  new UserList(userList, userStorage);
  new UserRemovePopup(userStorage);
  new UserEdit(mainContext, userStorage);
  new UserAdd(mainContext, userStorage);
  var dispatcher = new Dispatcher();

  btnPlus.addEventListener('click', function() {
    dispatcher.fire('user:add');
  });

  userStorage.load();

});
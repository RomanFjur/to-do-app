class LocalStorage {
  setToDo = (key, todo) => {
    localStorage.setItem(key, JSON.stringify(todo));
  }

  getToDos = () => {
    const localToDos = [];
    for (let index = 0; index < localStorage.length; index++) {
      let key = localStorage.key(index);
      localToDos.push(JSON.parse(localStorage.getItem(key)));
    }
    return localToDos;
  }

  removeToDo = (key) => {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;
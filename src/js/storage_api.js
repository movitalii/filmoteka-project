// сохраняем значение инфы по ключу
function saveInfo(key, value) {
  try {
    let serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log('Saving info error :', error);
  }
}

// достаем инфу из стореджа по ключу
function getInfo(key) {
  try {
    let deserializedState = localStorage.getItem(key);
    return deserializedState === null
      ? undefined
      : JSON.parse(deserializedState);
  } catch (error) {
    console.log('Getting info error :', error);
  }
}

// удаляем инфу в сторедже по ключу (хз - нужна ли она будет, но добавил)
function removeInfo(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Removing info error :', error);
  }
}

export { saveInfo, getInfo, removeInfo };

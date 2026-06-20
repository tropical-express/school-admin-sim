function saveGame() {

  localStorage.setItem(
    "school-admin-save",
    JSON.stringify(state)
  );

}

function loadGame() {

  const save =
    localStorage.getItem(
      "school-admin-save"
    );

  if (save) {

    state = JSON.parse(save);

    return true;

  }

  return false;

}
let state = {

  day: 1,

  maxDays: 30,

  students: [],

  incidents: [],

  names: null,

  personalities: [],

  current: null,

  stats: {

    safety: 100,

    morale: 100,

    trust: 100,

    chaos: 20

  }

};

function rand(arr) {

  return arr[
    Math.floor(
      Math.random() * arr.length
    )
  ];

}

function nextIncident() {

  const student =
    rand(state.students);

  const incident =
    rand(state.incidents);

  state.current = {

    student,

    incident,

    severity:
      getSeverity(student)

  };

}

function choose(action) {

  const s =
    state.current.student;

  switch(action) {

    case "warning":

      s.warnings++;

      state.stats.morale--;

      break;

    case "detention":

      s.detentions++;

      state.stats.trust++;

      break;

    case "suspension":

      s.suspensions++;

      state.stats.chaos += 2;

      break;

  }

  state.day++;

  saveGame();

  nextIncident();

  render();

}
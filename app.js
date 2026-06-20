async function startGame() {

  const incidents =
    await fetch(
      "data/incidents.yaml"
    );

  state.incidents =
    jsyaml.load(
      await incidents.text()
    ).incidents;

  const names =
    await fetch(
      "data/names.yaml"
    );

  state.names =
    jsyaml.load(
      await names.text()
    );

  const personalities =
    await fetch(
      "data/personalities.yaml"
    );

  state.personalities =
    jsyaml.load(
      await personalities.text()
    ).personalities;

  if (!loadGame()) {

    generateStudents();

  }

  nextIncident();

  render();

}

function render() {

  const c = state.current;

  document.getElementById(
    "screen"
  ).innerText =

`DAY ${state.day}/30

Safety: ${state.stats.safety}

Morale: ${state.stats.morale}

Teacher Trust: ${state.stats.trust}

Chaos: ${state.stats.chaos}

--------------------

Student:
${c.student.name}

Personality:
${c.student.personality.name}

Severity:
${c.severity}

Incident:

${c.incident.text.replace(
"{student}",
c.student.name
)}
`;

}

startGame();
function generateStudents() {

  state.students = [];

  for (let i = 0; i < 50; i++) {

    const first = rand(state.names.firstNames);

    const last = rand(state.names.lastNames);

    const personality =
      rand(state.personalities);

    state.students.push({

      id: crypto.randomUUID(),

      name: `${first} ${last}`,

      personality,

      warnings: 0,

      detentions: 0,

      suspensions: 0

    });

  }

}
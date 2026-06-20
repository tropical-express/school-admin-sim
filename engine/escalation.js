function getSeverity(student) {

  const score =
    student.warnings +
    student.detentions +
    student.suspensions * 2;

  if (score >= 6) return "HIGH";

  if (score >= 3) return "MEDIUM";

  return "LOW";

}
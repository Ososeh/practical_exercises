// StudentItem displays one student and sends user actions back to its parent.
export function StudentItem({
  student,
  onToggleAttendance,
  onRemoveStudent,
}) {
  return (
    <li className={`student-item ${student.isPresent ? "present" : ""}`}>
      <div className="student-info">
        <strong>{student.name}</strong>
        <div className="student-meta">
          <span className="student-course">{student.course}</span>
          <span
            className={`attendance-badge ${student.isPresent ? "present" : ""}`}
          >
            {student.isPresent ? "Present" : "Absent"}
          </span>
        </div>
      </div>

      <div className="student-actions">
        <button
          className="secondary-button"
          type="button"
          onClick={() => onToggleAttendance(student.id)}
        >
          Mark {student.isPresent ? "Absent" : "Present"}
        </button>
        <button
          className="danger-button"
          type="button"
          onClick={() => onRemoveStudent(student.id)}
          aria-label={`Remove ${student.name}`}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

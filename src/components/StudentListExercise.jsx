import { useState } from "react";
import { ExerciseHeader } from "./ExerciseHeader";
import { StudentItem } from "./StudentItem";

const initialStudents = [
  { id: 1, name: "Ada Okafor", course: "React Development", isPresent: true },
  { id: 2, name: "David Bello", course: "UI Engineering", isPresent: false },
  { id: 3, name: "Fatima Musa", course: "JavaScript", isPresent: true },
  { id: 4, name: "Samuel Eze", course: "Web Fundamentals", isPresent: false },
];

export function StudentListExercise() {
  // An array of student objects is managed together in one state variable.
  const [students, setStudents] = useState(initialStudents);

  function toggleAttendance(studentId) {
    const selectedStudent = students.find((student) => student.id === studentId);
    console.log("[Student List] Attendance changed:", {
      ...selectedStudent,
      isPresent: !selectedStudent?.isPresent,
    });
    // map() creates a new array and only copies the matching student object.
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === studentId
          ? { ...student, isPresent: !student.isPresent }
          : student,
      ),
    );
  }

  function removeStudent(studentId) {
    const removedStudent = students.find((student) => student.id === studentId);
    console.log("[Student List] Student removed:", removedStudent);
    // filter() creates a new array that excludes the selected student.
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== studentId),
    );
  }

  // This total is derived from students rather than stored in separate state.
  const presentStudents = students.filter((student) => student.isPresent).length;

  return (
    <>
      <ExerciseHeader
        number={5}
        title="Student List"
        description="Work with arrays of objects, list keys, immutable updates, removal, reusable child components, and derived totals."
      />
      <div className="exercise-content">
        <section className="student-demo" aria-label="Student attendance list">
          <div className="student-summary" aria-live="polite">
            <div className="summary-card">
              <strong>{students.length}</strong>
              <span>Total students</span>
            </div>
            <div className="summary-card">
              <strong>{presentStudents}</strong>
              <span>Present students</span>
            </div>
          </div>

          {/* Conditional rendering provides feedback after all students are removed. */}
          {students.length === 0 ? (
            <div className="student-empty">
              <strong>No students available</strong>
              The attendance list is currently empty.
            </div>
          ) : (
            <ul className="student-list">
              {/* Stable IDs are used as keys instead of array indexes. */}
              {students.map((student) => (
                <StudentItem
                  key={student.id}
                  student={student}
                  onToggleAttendance={toggleAttendance}
                  onRemoveStudent={removeStudent}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}

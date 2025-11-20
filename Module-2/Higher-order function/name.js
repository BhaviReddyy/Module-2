function processStudents(students) {
    const filtered = students.filter(student => student.marks > 60);
    const sorted = filtered.sort((a, b) => b.marks - a.marks);
    const names = sorted.map(student => student.name);
    return names;
}
const students = [
    { name: "Bhavya", marks: 58 },
    { name: "Ruchi", marks: 85 },
    { name: "Prathyusha", marks: 92 },
    { name: "Bhavani", marks: 45 },
    { name: "Dhana", marks: 76 },
    { name: "Reethu", marks: 63 },
    { name: "Rishi", marks: 89 },
    { name: "Ayira", marks: 95 },
    { name: "Ayush", marks: 54 },
    { name: "Chandu", marks: 79 },
    { name: "Devi", marks: 67 },
    { name: "Leo", marks: 88 },
    { name: "Likitha", marks: 91 },
    { name: "Nikitha", marks: 72 },
    { name: "varna", marks: 82 }
];

console.log(processStudents(students));
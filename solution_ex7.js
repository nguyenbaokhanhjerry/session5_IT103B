let data = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";
let arr = data.split("-");
let doctor = arr[0];
let department = arr[1];
let time = arr[2];
let room = arr[3];
doctor = doctor.replace("BS.", "");
doctor = doctor.replaceAll("_", " ");
let words = doctor.toLowerCase().split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
doctor = words.join(" ");
department = department.replaceAll("_", " ");
department = department.toLowerCase();
let departmentWords = department.split(" ");
for (let i = 0; i < departmentWords.length; i++) {
  departmentWords[i] =
    departmentWords[i].slice(0, 1).toUpperCase() + departmentWords[i].slice(1);
}
department = departmentWords.join(" ");
room = room.replace("PHONG_", "Phòng ");
console.log(`
========================================
       PHÂN CÔNG CA KHÁM
========================================
Bác sĩ      : ${doctor}
Chuyên khoa : ${department}
Giờ khám    : ${time}
Phòng khám  : ${room}
========================================
`);

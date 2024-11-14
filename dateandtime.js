const now = new Date();
console.log(now); // 2023-03-26T11:45:59.096Z
console.log(+now); // 1679832116638 - number of milliseconds since epoch

const epoch = new Date(0); // 0 milliseconds since Jan 1 1970
const jan2_1970 = new Date(1000 * 60 * 60 * 24); // a full day in milliseconds after Jan 1
console.log(epoch); // 1970-01-01T00:00:00.000Z
console.log(jan2_1970); // 1970-01-02T00:00:00.000Z

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas); // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
console.log(nyeLocal); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

const christmas1 = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas1.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log(christmas1.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
// 2023. 12. 25. 오전 9:00:00 - both timezone and language are converted to Korean
const nyeLocal1 = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
console.log(nyeLocal1.toLocaleString()); // 31/12/2023, 11:59:59 pm - default to local TZ

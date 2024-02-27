// Fungsi untuk menghitung jumlah hari dari tanggal tertentu hingga sekarang
function countDays(startDate) {
  let now = new Date(); // Waktu saat ini
  let start = new Date(startDate); // Waktu mulai
  let timeDiff = Math.abs(now.getTime() - start.getTime()); // Selisih waktu dalam milidetik
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Konversi ke jumlah hari
  
  return diffDays;
}

// Fungsi untuk menambahkan nama dan waktu ke dalam list
function addWorkout(name, startDate) {
  let list = document.getElementById("workout-list");
  let listItem = document.createElement("li");
  let days = countDays(startDate);
  listItem.innerHTML = "<strong>" + name + "</strong>, mulai workout sejak <strong>" + days + " hari yang lalu</strong>";
  list.appendChild(listItem);
}

// Contoh penggunaan fungsi addWorkout
let lexiiStartDate = "July 18, 2022";
addWorkout("Lexiiz3417", lexiiStartDate);
// Contoh waktu mulai Lexiiz3417

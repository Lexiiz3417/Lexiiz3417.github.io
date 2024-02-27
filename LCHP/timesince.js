// Fungsi untuk mengonversi waktu dalam detik menjadi format jam:menit:detik
function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);
  
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  secs = (secs < 10) ? "0" + secs : secs;
  
  return hours + ":" + minutes + ":" + secs;
}

// Fungsi untuk menghitung waktu dari tanggal tertentu hingga sekarang
function countTime(startDate) {
  let now = new Date().getTime(); // Waktu saat ini dalam milidetik
  
  let diff = now - startDate; // Selisih waktu dalam milidetik
  let seconds = Math.floor(diff / 1000); // Konversi ke detik
  
  return formatTime(seconds);
}

// Fungsi untuk menambahkan nama dan waktu ke dalam list
function addWorkout(name, startDate) {
  let list = document.getElementById("workout-list");
  let listItem = document.createElement("li");
  listItem.textContent = name + ", mulai workout sejak " + countTime(startDate) + " hari yang lalu";
  list.appendChild(listItem);
}

// Contoh penggunaan fungsi addWorkout
let lexiiStartDate = new Date("July 18, 2022 00:00:00").getTime(); // Contoh waktu mulai Lexiiz3417
addWorkout("Lexiiz3417", lexiiStartDate); // nambah list

// let orangStartDate = new Date("July 20, 2022 00:00:00").getTime(); 
// add workout("orang", orangStartDate);



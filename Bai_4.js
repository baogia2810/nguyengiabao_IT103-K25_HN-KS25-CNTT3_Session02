let bookName = prompt("Nhap ten sach:");
let borrowerName = prompt("Nhap ten nguoi muon:");
let favoriteLevel = parseInt(prompt("Nhap muc do yeu thich (1-5):"));

if (favoriteLevel === 5 || favoriteLevel === 4) {
  console.log("Day la cuon sach yeu thich cua ban, hay doc ngay!");
} else if (favoriteLevel === 3) {
  console.log("Sach nay kha on, co the muon.");
} else if (favoriteLevel === 2 || favoriteLevel === 1) {
  console.log("Sach nay ban co the can nhac muon lai sau.");
} else {
  console.log("Muc do yeu thich khong hop le.");
}

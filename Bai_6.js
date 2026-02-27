let title = prompt("Nhap ten sach:");
let user = prompt("Nhap ten nguoi muon:");
let condition = prompt(
  "Nhap tinh trang (co san / da muon / khong co san):",
).toLowerCase();
let loanDays = parseInt(prompt("Nhap so ngay muon:"));
let hasCard =
  prompt("Ban co the thu vien khong? (co / khong):").toLowerCase() === "co";

if (condition === "co san") {
  if (hasCard) {
    console.log("Chuc mung, ban co the muon sach nay.");
  } else {
    console.log("Ban khong the muon sach neu khong co the thu vien.");
  }
} else if (condition === "da muon") {
  if (loanDays < 30) {
    if (hasCard) {
      console.log("Sach dang duoc muon, vui long doi den khi tra lai.");
    } else {
      console.log("Ban khong the muon sach neu khong co the thu vien.");
    }
  } else {
    console.log("Thoi gian muon qua lau.");
  }
} else if (condition === "khong co san") {
  console.log("Sach nay hien tai khong co san, ban co the dang ky muon sau.");
} else {
  console.log("Thong tin khong hop le, vui long nhap lai.");
}

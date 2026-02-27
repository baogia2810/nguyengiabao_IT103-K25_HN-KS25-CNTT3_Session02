let bookTitle = prompt("Nhap ten sach:");
let status = prompt("Nhap trang thai (co san / da muon):").toLowerCase();
let publishYear = parseInt(prompt("Nhap nam xuat ban:"));
let currentYear = 2026;
let bookAge = currentYear - publishYear;

if (status === "co san" && bookAge <= 5) {
  console.log("Sach nay moi va co san de muon.");
} else if (status === "da muon" && bookAge <= 10) {
  console.log("Sach nay da muon nhung kha moi, co the muon lai sau.");
} else if (status === "da muon" && bookAge > 10) {
  console.log("Sach nay da muon va kha cu.");
} else if (status === "co san" && bookAge > 5) {
  console.log("Sach nay co san nhung da lau nam.");
} else {
  console.log("Trang thai khong hop le.");
}

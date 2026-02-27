const bookName = prompt("Nhập tên sách:");
const category = prompt(
  "Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):",
);
const isAvailable = prompt("Tình trạng sách (1: Có sẵn, 2: Đã mượn):");

if (category === "Khoa học" || category === "Lịch sử") {
  if (isAvailable === "1") {
    console.log("Sách này có sẵn trong thư viện");
  } else {
    console.log("Sách đã được mượn");
  }
} else if (category === "Văn học" || category === "Truyện") {
  console.log("Sách này có thể đọc giải trí");
} else {
  console.log("Thể loại không xác định");
}

let bookCount = +prompt("Mời bạn nhập số lượng sách trong thư viện:");

if (isNaN(bookCount) || bookCount < 0) {
  console.log("Dữ liệu không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else if (bookCount < 10) {
  console.log("Thư viện có ít sách");
} else if (bookCount >= 10 && bookCount <= 20) {
  console.log("Thư viện có số lượng sách vừa đủ");
} else {
  console.log("Thư viện có nhiều sách");
}

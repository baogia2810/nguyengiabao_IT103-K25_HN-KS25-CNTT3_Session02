let nameBook = prompt(`Moi nhap vao ten sach:`);
let author = prompt(`Moi nhap vao ten tac gia:`);
let publishYear = +prompt(`Moi nhap vao nam xuat ban:`);
let currentYear = +prompt(`Moi nhap vao nam hien tai:`);
if (publishYear === currentYear) {
  console.log(`Day la sach con moi`);
} else if (currentYear - publishYear <= 5) {
  console.log(`Sach con kha moi`);
} else {
  console.log(`Sach da cu`);
}

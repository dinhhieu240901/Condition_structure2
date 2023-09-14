// Khai báo các biến toàn cục
let images = ["image1", "image2", "image3"]; // Mảng chứa các id của các thẻ img
//   let arrays = [
//     ["img/1-1.png", "img/2-1.png", "img/3-1.png"],
//     ["img/1-2.png", "img/2-2.png", "img/3-2.png"],
//     ["img/1-3.png", "img/2-3.png", "img/3-3.png"],
//   ]; // Mảng chứa các đường dẫn ảnh
let array1 = ["img/1-1.png", "img/2-1.png", "img/3-1.png"];
let array2 = ["img/1-2.png", "img/2-2.png", "img/3-2.png"];
let array3 = ["img/1-3.png", "img/2-3.png", "img/3-3.png"];
let picture1 = document.getElementById("image1");
let picture2 = document.getElementById("image2");
let picture3 = document.getElementById("image3");
// Hàm trả về một số nguyên ngẫu nhiên trong khoảng [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm gán ngẫu nhiên một đường dẫn ảnh cho mỗi thẻ img khi tải trang
function randomImage() {
  for (let i = 0; i < images.length; i++) {
    //   let image = document.getElementById(images[i]); // Lấy thẻ img theo id
    //   let array = arrays[getRandomInt(0, 2)]; // Lấy một mảng ngẫu nhiên từ arrays
    //   image.src = array[i]; // Gán đường dẫn ảnh cho thẻ img
    picture1.src = array1[getRandomInt(0, 2)];
    picture2.src = array2[getRandomInt(0, 2)];
    picture3.src = array3[getRandomInt(0, 2)];
  }
}

// Hàm thay đổi đường dẫn ảnh của một thẻ img khi nhấn vào nó
function changeImage(id, src) {
  //   let image = document.getElementById(id); // Lấy thẻ img theo id
  //   let src = image.src; // Lấy đường dẫn ảnh hiện tại của thẻ img
  //   let imageName = src.substring(src.length - 11); // Lấy tên ảnh từ đường dẫn
  //   let currentPos; // Biến lưu vị trí hiện tại của tên ảnh trong một mảng
  //   for (let i = 0; i < arrays.length; i++) {
  //     currentPos = arrays[i].indexOf(imageName); // Tìm vị trí của tên ảnh trong mỗi mảng
  //     if (currentPos !== -1) {
  //       // Nếu tìm thấy vị trí
  //       currentPos = (currentPos + 1) % 3; // Tăng vị trí lên một đơn vị và lấy phần dư khi chia cho 3
  //       image.src = arrays[i][currentPos]; // Gán đường dẫn ảnh mới cho thẻ img
  //       break; // Thoát khỏi vòng lặp
  //     }
  //   }

  // check(); // Gọi hàm kiểm tra kết quả
  let source = "";
  source = src.substring(src.length - 11);
  let currentPos1, currentPos2, currentPos3;

  if (id == "image1") {
    currentPos1 = array1.indexOf(source);
    if (currentPos1 != -1) {
      if (currentPos1 == 2) {
        currentPos1 = 0;
      } else {
        currentPos1 += 1;
      }
    }
    picture1.src = array1[currentPos1];
  } else if (id == "image2") {
    currentPos2 = array2.indexOf(source);
    if (currentPos2 != -1) {
      if (currentPos2 == 2) {
        currentPos2 = 0;
      } else {
        currentPos2 += 1;
      }
    }
    picture2.src = array2[currentPos2];
  } else if (id == "image3") {
    currentPos3 = array3.indexOf(source);
    if (currentPos3 != -1) {
      if (currentPos3 == 2) {
        currentPos3 = 0;
      } else {
        currentPos3 += 1;
      }
    }
    picture3.src = array3[currentPos3];
  }
  check();
}

// Hàm kiểm tra xem ba thẻ img có cùng đường dẫn ảnh hay không
function check() {
  let img1 = document.getElementById("image1");
  let img2 = document.getElementById("image2");
  let img3 = document.getElementById("image3");
  let index1 = img1.src;
  let index2 = img2.src;
  let index3 = img3.src;
  index1 = index1.substring(index1.length - 11);
  index2 = index2.substring(index2.length - 11);
  index3 = index3.substring(index3.length - 11);

  if (
    array1.indexOf(index1) == array2.indexOf(index2) &&
    array2.indexOf(index2) == array3.indexOf(index3)
  ) {
    alert("You are correct");
  }
}

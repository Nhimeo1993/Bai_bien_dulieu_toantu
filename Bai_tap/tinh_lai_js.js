let inputTien_gui = prompt("Nhập số tiền gửi:");
let inputLai_suat = prompt("Nhập lãi suất gửi:");
let inputSo_nam_gui = prompt("Nhập số năm gửi:");
let Tien_gui = parseFloat(inputTien_gui);
let Lai_suat = parseFloat(inputLai_suat);
let So_nam_gui = parseFloat(inputSo_nam_gui);
let tien_lai = Tien_gui + So_nam_gui*(Tien_gui*(Lai_suat/100));
document.write("Tổng cả gốc và lãi là: "+ tien_lai);
const Pi=3.14;
let banKinh=prompt("Nhập bán kình zô đi bạn: ");
let R=parseFloat(banKinh);
let C=(R*2)*Pi;
let S=Math.pow(R,2)*Pi;
document.write("Bán kính đường tròn là: "+C);
document.write("<br>");
document.write("Diện tích đường tròn là: "+S);

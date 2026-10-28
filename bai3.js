const basePriceSizeS = 35000;
const basePriceSizeM = 42000;
const basePriceSizeL = 48000;
const toppingPrice = 10000;

const tables = ["MLT", "SSX", "LLTT"];

let totalRevenue = 0;

for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {
    let tableBill = 0;
    const order = tables[tableIndex];

    for (let orderIndex = 0; orderIndex < order.length; orderIndex++) {
        const currentItem = order[orderIndex];

        if (currentItem === "X") {
            continue;
        }

        if (currentItem === "S") {
            tableBill += basePriceSizeS;
        } else if (currentItem === "M") {
            tableBill += basePriceSizeM;
        } else if (currentItem === "L") {
            tableBill += basePriceSizeL;
        } else if (currentItem === "T") {
            tableBill += toppingPrice;
        }
    }

    let discount = 0;

    if (tableBill > 100000) {
        discount = tableBill * 0.1;
    }

    const finalBill = tableBill - discount;
    totalRevenue += finalBill;

    console.log("Bàn", tableIndex + 1);
    console.log("Món đã gọi:", order);
    console.log("Tiền trước giảm:", tableBill, "VNĐ");
    console.log("Tiền giảm:", discount, "VNĐ");
    console.log("Thành tiền:", finalBill, "VNĐ");
}

console.log("Tổng doanh thu ca:", totalRevenue, "VNĐ");
// Loi 1: Chua co vong lap long nhau de tinh tien tung mon cua moi ban
// Loi 2: Gap mon X phai dung continue de bo qua mon huy
// Loi 3: Chua ap dung giam 10% cho ban co hoa don tren 100000 VNĐ
// Loi 4: Chua cong doanh thu sau giam gia cua tat ca cac ban
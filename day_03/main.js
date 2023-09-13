let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
console.log(products);
let newProduct = {
    name: "Iphone 12",
    price: 18000000,
    brand:"Apple",
    count:3,
};
products.push(newProduct);
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(product => product.brand !== "Samsung");
console.log(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count - a.count);
console.log(products);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let selectedProducts = products.slice(0, 2);
console.log(selectedProducts);
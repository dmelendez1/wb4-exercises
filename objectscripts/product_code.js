function parsePartCode(partCode) {
    let colonMarker = partCode.indexOf(":");
    let dashMarker = partCode.lastIndexOf("-");

    let supplierCode = partCode.substring(0, colonMarker).trim();
    let prodctNumber = partCode.substring(colonMarker + 1, dashMarker).trim();
    let size = partCode.substring(dashMarker + 1).trim();

    return {
supplierCode: supplierCode,
productNumber: prodctNumber,
size: size
    };

}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);

let partCode2 = "SUP123:4567-L";
let part2 = parsePartCode(partCode1);
console.log("Supplier: " + part2.supplierCode + " Product Number: " + part2.productNumber + " Size: " + part2.size);
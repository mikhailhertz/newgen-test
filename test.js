let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let ranges = [requiredRange1, requiredRange2, requiredRange3];

for (const range of ranges) {
    let result = courses.filter(course => {
        // для удобства сравнений, если null справа значит, что курсы могут быть любой цены ОТ той, что слева
        let rr = range[1] || Infinity;
        let cr = course.prices[1] || Infinity;
        // null при сравнениях больше/меньше считается за 0, преобразований не нужно
        return !(course.prices[0] > rr || cr < range[0])
    });
    console.log("Range:", range);
    console.log(result);
}

let sortingOrder = 1 // 1 - asc, -1 - desc

let sorted = courses.sort((l, r) => {
    let tl = l.prices[1] || Infinity;
    let tr = r.prices[1] || Infinity;
    // если начальная цена одинакова, сравниваем верхние пределы
    if (l.prices[0] === r.prices[0]) {
        return (tl < tr) ? -sortingOrder : sortingOrder;
    }
    return (l.prices[0] < r.prices[0]) ? -sortingOrder : sortingOrder;
});

console.log("Sorted prices:")
console.log(sorted)

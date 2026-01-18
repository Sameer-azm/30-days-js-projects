let input = document.getElementById("date")
console.log(input.value);

input.max = new Date().toISOString().split("T")[0];

function calcualtor() {
    if(!input.value){
        alert("Enter your date of birth")
        return
    }
    let birthdate = new Date(input.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) { //4 3
        m3 = m2 - m1
    }
    else {
        y3--;// 4 6
        m3 = m2 + 12 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1
    }
    else {
        m3--;
        d3 = getnoofdaysinmonth(y1, m1) + d2 - d1;
        if (m3 > 0) {
            y3--;
            m3 = 11
        }
    }
    let result = document.getElementById("result")
    result.innerHTML = (`You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old`);

}
function getnoofdaysinmonth(year, month) {
    return new Date(year, month, 0).getDate();
}
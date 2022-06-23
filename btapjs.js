/**
 * 1. alert: in ra thong bao
 * 2. console: in ra thong bao trong console devtool cu phap console.log()
 * 3. confirm: in ra thong bao co xac nhan ok/cancel
 */

// Bài 1
console.log('Bài 1:')
var massMarks = 78;
var heightMarks = 1.69;
var massJohn = 92;
var heightJohn = 1.95;
var bmiMarks = massMarks/heightMarks**2;
var bmiJohn = massJohn/heightJohn**2;

console.log('BMI của Marks là:' + bmiMarks);
console.log('BMI của John là: ' + bmiJohn);

if (bmiMarks >= bmiJohn) {
    console.log(`Marks BMI ${bmiMarks} is higher than John BMI ${bmiJohn}`)
} else {
    console.log(`Marks BMI ${bmiMarks} is lower than John BMI ${bmiJohn}`)
}


var massMarry = 95;
var heightMarry = 1.98;
var massHarry = 85;
var heightHarry = 1.76;
var bmiMarry = massMarry/(heightMarry*heightMarry);
var bmiHarry = massHarry/(heightJohn*heightHarry);

console.log('BMI của Marry là:' + bmiMarry);
console.log('BMI của John là: ' + bmiHarry);

if (bmiMarry >= bmiHarry) {
    console.log(`Marry BMI ${bmiMarry} is higher than Harry BMI ${bmiHarry}`)
} else {
    console.log(`Marks BMI ${bmiMarry} is lower than John BMI ${bmiHarry}`)
}



// Bai2
console.log('Bài 2:');
    var button = document.getElementById('giaiPtbacnhat');
    giaiPtbacnhat.onclick = function () {
            let a = document.getElementById('a').value;
            let b = document.getElementById('b').value;
            let c = document.getElementById('c').value;

            if (a == "" || b == "") {
                alert("Vui lòng nhập dữ liệu");
            } else {
                a = Number(a);
                b = Number(b);
                c = Number(c);
                giai_pt_bac_nhat(a, b, c);
            }

            function giai_pt_bac_nhat(a, b, c)
            {
                if (a == 0 && b == 0) {
                    document.getElementById("result").innerHTML = "Phương trình vô số nghiệm";
                    console.log('Phương trình vô số nghiệm');
                } else if (a != 0 && b == 0) {
                    document.getElementById("result").innerHTML = "Phương trình có nghiệm x = 0";
                    console.log('Phương trình có nghiệm x = 0');
                } else if (a == 0 && b != 0) {
                    document.getElementById("result").innerHTML = "Phương trình vô nghiệm";
                    console.log("Phương trình vô nghiệm");
                } else {
                    let x = ((c-b)/a);
                    document.getElementById("result").innerHTML = x;
                    console.log('Phương trình có nghiệm x = ' + x);
                }
            }
            };

           




// Bai 3
console.log('Bài 3:');
    var buttonOne = document.getElementById('tbDol');
    var buttonTwo = document.getElementById('tbKoa');
    var buttonThree = document.getElementById('sosanh');
    var dtbKoa = document.getElementById('dtbKoa');
    var dtbDol = document.getElementById('dtbDol');
    
    
    tbDol.onclick = function() {
        let a1 = document.getElementById('a1').value;
        let a2 = document.getElementById('a2').value;
        let a3 = document.getElementById('a3').value;
        a1 = Number(a1);
        a2 = Number(a2);
        a3 = Number(a3);
        var dtbDol = (a1 + a2 + a3)/3;
        console.log(dtbDol)
        document.getElementById("dtbDol").innerHTML=dtbDol;
        // ket_qua(dtbDol);    
    };
    
    tbKoa.onclick = function() {
        let b1 = document.getElementById('b1').value;
        let b2 = document.getElementById('b2').value;
        let b3 = document.getElementById('b3').value;
        b1 = Number(b1);
        b2 = Number(b2);
        b3 = Number(b3);
        var dtbKoa = (b1 + b2 + b3)/3;
        console.log(dtbKoa)
        document.getElementById("dtbKoa").innerHTML=dtbKoa;
        // ket_qua(dtbKoa);
    };
    
    buttonThree.onclick = function () {
          var x = dtbDol.textContent;
          var y = dtbKoa.textContent;
         
          if (+x > +y) {
            console.log(
              `Đội Dolphins có kêt quả là ${+dtbDol.textContent} đã thắng đội Koalas có kết quả là ${+dtbKoa.textContent}`
            );
          } else {
            console.log(
                `Đội Dolphins có kêt quả là ${+dtbDol.textContent} đã thua đội Koalas có kết quả là ${+dtbKoa.textContent}`
              );
          }
        };


//Bài 4
console.log('Bài 4:');
    var button = document.getElementById('sosanh2so');
    sosanh2so.onclick = function() {
        let m = document.getElementById('numberOne').value;
        let n = document.getElementById('numberTwo').value;

        if (m == "" || n == "") {
            alert("Vui lòng nhập dữ liệu");
        } else {
            m = Number(m);
            n = Number(n);
            so_sanh(m, n);
        }

        function so_sanh(m, n) {
            let k = m - n;
            if (k == 0) {
                console.log('Hai số bằng nhau');
                document.getElementById("result1").innerHTML = "Hai số bằng nhau";
            } else if (k > 0) {
                console.log('Số thứ nhất')
                document.getElementById("result1").innerHTML = "Số thứ nhất";
            } else  {
                console.log('Số thứ hai')
                document.getElementById("result1").innerHTML = "Số thứ hai";
            }

        }
    }

    
// Bài 5
console.log('Bài 5:');
    var button = document.getElementById('add');
    var button = document.getElementById('sub');
    var button = document.getElementById('mul');
    var button = document.getElementById('div');
    var button = document.getElementById('mud');

    add.onclick = function () {
        let m = document.getElementById('one').value;
        let n = document.getElementById('two').value;

        if (m == "" || n == "") {
            alert("Vui lòng nhập dữ liệu");
        } else {
            m = Number(m);
            n = Number(n);
            add(m, n);
        }

        function add(m, n) {
            let a = m + n;
            console.log(a);
            document.getElementById("result2").innerHTML = a;
        }
    }

    sub.onclick = function () {
        let m = document.getElementById('one').value;
        let n = document.getElementById('two').value;

        if (m == "" || n == "") {
            alert("Vui lòng nhập dữ liệu");
        } else {
            m = Number(m);
            n = Number(n);
            add(m, n);
        }

        function add(m, n) {
            let b = m - n;
            console.log(b);
            document.getElementById("result2").innerHTML = b;
        }
    }

    mul.onclick = function () {
        let m = document.getElementById('one').value;
        let n = document.getElementById('two').value;

        if (m == "" || n == "") {
            alert("Vui lòng nhập dữ liệu");
        } else {
            m = Number(m);
            n = Number(n);
            add(m, n);
        }

        function add(m, n) {
            let c = m * n;
            console.log(c);
            document.getElementById("result2").innerHTML = c;
        }
    }

    div.onclick = function () {
        let m = document.getElementById('one').value;
        let n = document.getElementById('two').value;

        if (m == "" || n == "") {
            alert("Vui lòng nhập dữ liệu");
        } else {
            m = Number(m);
            n = Number(n);
            add(m, n);
        }

        function add(m, n) {
            if (n == 0) {
                document.getElementById("result2").innerHTML = "Không thể thực hiện phép tính";
                alert ('Không thể thực hiện phép tính');
            } else {
                let d = m / n;
                console.log(d);
                document.getElementById("result2").innerHTML = d;
            }
        }
    }

    mud.onclick = function () {
        let m = document.getElementById('one').value;
        let n = document.getElementById('two').value;

        if (m == "" || n == "") {
            alert("Vui lòng nhập dữ liệu");
        } else {
            m = Number(m);
            n = Number(n);
            add(m, n);
        }

        function add(m, n) {
            if (n == 0) {
                document.getElementById("result2").innerHTML = "Không thể thực hiện phép tính";
                alert ('Không thể thực hiện phép tính');
            } else {
            let e = (m % n);
            console.log(e);
            document.getElementById("result2").innerHTML = e;
            }
        }
    }

    
// Bài 6
console.log('Bài 6');
    var button = document.getElementById('getResult');
    getResult.onclick = function() {
        let name = document.getElementById('name').value;
        let scores = document.getElementById('scores').value;

        if (name == "" || scores == "") {
            alert("Vui lòng nhập dữ liệu");
        } else if (scores < 0 || scores > 100) {
            document.getElementById("getRanked").style.backgroundColor = "white";
            document.getElementById("getRanked").innerHTML = "Nhập sai";
            alert("Trường dữ liệu sai, vui lòng nhập lại");
        } else {
            name = String(name);
            scores = Number(scores);
            result(name, scores);
        }

        function result(name, scores) {
            document.getElementById("getName").innerHTML = name;
            document.getElementById("getScores").innerHTML = scores;
            if (scores >= 0 && scores < 40) {
                document.getElementById("getRanked").style.backgroundColor = "red";
                document.getElementById("getRanked").innerHTML = "F";
            } else if (scores >=40 && scores < 60) {
                document.getElementById("getRanked").style.backgroundColor = "orange";
                document.getElementById("getRanked").innerHTML = "D";
            } else if (scores >=60 && scores < 70) {
                document.getElementById("getRanked").style.backgroundColor = "yellow";
                document.getElementById("getRanked").innerHTML = "C";
            } else if (scores >=70 && scores < 80) {
                document.getElementById("getRanked").style.backgroundColor = "green";
                document.getElementById("getRanked").innerHTML = "B";
            } else if (scores >=80 && scores < 90) {
                document.getElementById("getRanked").style.backgroundColor = "blue";
                document.getElementById("getRanked").innerHTML = "A";
            } else {
                document.getElementById("getRanked").style.backgroundColor = "green";
                document.getElementById("getRanked").innerHTML = "A+";
            }
        }
    }


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
                console.log("Vui lòng nhập dữ liệu");
            } else {
                a = Number(a);
                b = Number(b);
                c = Number(c);
                giai_pt_bac_nhat(a, b, c);
            }
            };

        function giai_pt_bac_nhat(a, b, c)
            {
                if (a == 0 && b == 0) {
                    console.log('Phương trình vô số nghiệm');
                } else if (a != 0 && b == 0) {
                    console.log('Phương trình có nghiệm x = 0');
                } else if (a == 0 && b != 0) {
                    console.log("Phương trình vô nghiệm");
                } else {
                    console.log('Phương trình có nghiệm x = ' + ((c-b) / a));
                }
            }




// Bai 3
console.log('Bài 3:');
    var button = document.getElementById('tbDol');
    var button = document.getElementById('tbKoa');
    var button = document.getElementById('sosanh');
    // var dtbDol = 0;
    tbDol.onclick = function() {
        var a1 = document.getElementById('a1').value;
        var a2 = document.getElementById('a2').value;
        var a3 = document.getElementById('a3').value;
        a1 = Number(a1);
        a2 = Number(a2);
        a3 = Number(a3);
       var dtbDol = (a1 + a2 + a3)/3;
        console.log(dtbDol)
        document.getElementById("dtbDol").innerHTML=dtbDol;
        return(dtbDol);
    };

    tbKoa.onclick = function() {
        var b1 = document.getElementById('b1').value;
        var b2 = document.getElementById('b2').value;
        var b3 = document.getElementById('b3').value;
        b1 = Number(b1);
        b2 = Number(b2);
        b3 = Number(b3);
       var dtbKoa = (b1 + b2 + b3)/3;
        console.log(dtbKoa)
        document.getElementById("dtbKoa").innerHTML=dtbKoa;
        return(dtbKoa);
    };

    

        if (dtbDol > dtbKoa) {
            console.log(`Đội Dolphins có kêt quả là ${dtbDol} đã thắng đội Koalas có kết quả là ${dtbKoa}`)
        }
            
    

       

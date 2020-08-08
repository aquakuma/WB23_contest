var school = "";


var info = new Object();
info.classselect = "";
info.classes = [];
info.people = [];
info.date = "";
info.company = "";
info.Applicant_family = "";
info.Applicant_first = "";
info.Applicant_family_katakana = "";
info.Applicant_first_katakana = "";
info.department = "";
info.phone = "";
info.email = "";
info.fax = "";
info.school = "";
info.counter = "";


function tokyo(){
    school = "tokyo";
    var pages1 = document.getElementById('page1');
    var pages2 = document.getElementById('page2_tokyo');
    pages1.style.display = "none";
    pages2.style.display = "block";
}

function osaka(){
    school = "osaka";
    var pages1 = document.getElementById('page1');
    var pages2 = document.getElementById('page2_osaka');
    pages1.style.display = "none";
    pages2.style.display = "block";
    
}

function nagoya(){
    school = "nagoya";
    var pages1 = document.getElementById('page1');
    var pages2 = document.getElementById('page2_nagoya');
    pages1.style.display = "none";
    pages2.style.display = "block";
    
}


function next3() {
    var src = "images/" + school + "_logo.svg";
    var school_page = "page2_" + school;
    var pages1 = document.getElementById('page1');
    var pages2 = document.getElementById(school_page);
    var pages3 = document.getElementById('page3');
    var logo = document.getElementById('select3_logo');
    pages1.style.display = "none";
    pages2.style.display = "none";
    pages3.style.display = "block";
    logo.src = src;

    if (school == "osaka") {
        info.date = "２月２日（金）";
    }
    if (school == "nagoya") {
        info.date = "２月９日（金）";
    }

    var page_info = "page2_" + school + "_info";

    info.classselect = document[page_info].classselect;
    //console.log(info.classselect.length);
    for (let i = 0; i < info.classselect.length; i++) {
        
        if (info.classselect[i].checked ==true) { 
            info.classes.push(info.classselect[i].value);
            //console.log(classselect[i].value);
        }
    }

    console.log("game = " + info.classes);
    for (let i = 0; i < info.classes.length; i++) {

        var temp = info.classes[i] + "_people";

        //console.log(temp);
        info.people[info.classes[i]] = document[page_info][temp].value + "人";
       //console.log(info.people[info.classes[i]]);
    }

    /*tokyo people count */
    if (school == "tokyo") {
        for (let i = 0; i < info.classselect.length; i++) {       
            if (info.classselect[i].checked ==true) { 
                if (info.classselect[i].value == "game" || info.classselect[i].value == "digital" || info.classselect[i].value == "sound") {
                    var flag = 1;
                }

                if (info.classselect[i].value == "graphic" || info.classselect[i].value == "it" || info.classselect[i].value == "web" || info.classselect[i].value == "control" || info.classselect[i].value == "car") {
                    var flag2 = 1;
                }                   
            }
        }
        if (flag == 1) {
            info.date = "２月１５日（木）";
            if (flag2 == 1) {
                info.date += "／２月１６日（金）";
            }
        }
        else {
            if (flag2 == 1) {
                info.date += "２月１６日（金）";
            }
        }
        

        console.log(info.date);
    }

    console.log("pagggggg333");
}

   

function gohome() {
    var school_page = "page2_" + school;
    var pages1 = document.getElementById('page1');
    var pages2 = document.getElementById(school_page);
    var pages3 = document.getElementById('page3');

    pages1.style.display = "block";
    pages2.style.display = "none";
    pages3.style.display = "none";
    school = "";

    info.classselect = "";
    info.classes = [];
    info.people = [];
    info.date = "";
    info.company = "";
    info.Applicant_family = "";
    info.Applicant_first = "";
    info.Applicant_family_katakana = "";
    info.Applicant_first_katakana = "";
    info.department = "";
    info.phone = "";
    info.email = "";
    info.fax = "";
    info.school = "";

}

	
function back_page2() {
    var school_page = "page2_" + school;
    var pages2 = document.getElementById(school_page);
    var pages3 = document.getElementById('page3');

    pages2.style.display = "block";
    pages3.style.display = "none";

    info.classselect = "";
    info.classes = [];
    info.people = [];
    info.date = "";
    info.company = "";
    info.Applicant_family = "";
    info.Applicant_first = "";
    info.Applicant_family_katakana = "";
    info.Applicant_first_katakana = "";
    info.department = "";
    info.phone = "";
    info.email = "";
    info.fax = "";
    info.school = "";
}



function next4() {
    var src = "images/" + school + "_logo.svg";
    var pages3 = document.getElementById('page3');
    var pages4 = document.getElementById('page4');
    var logo = document.getElementById('select4_logo');
    pages3.style.display = "none";
    pages4.style.display = "block";
    logo.src = src;

    console.log("pagggggg");

    info.company = document.page3_info.company.value;
    info.Applicant_family = document.page3_info.Applicant_family.value;
    info.Applicant_first = document.page3_info.Applicant_first.value;
    info.Applicant_family_katakana = document.page3_info.Applicant_family_katakana.value;
    info.Applicant_first_katakana = document.page3_info.Applicant_first_katakana.value;
    info.department = document.page3_info.department.value;
    info.email = document.page3_info.email.value;

    var temp = document.page3_info.phone;
    console.log("phone len :" + temp.length);
    for (let i = 0; i < temp.length; i++){
        info.phone += temp[i].value;
        console.log("phone :" + temp[i].value);
        if (i < temp.length - 1) {
            info.phone += "　－　";
        }
    }
    var temp = document.page3_info.fax;
    console.log("fax len :" + temp.length);
    for (let i = 0; i < temp.length; i++){
        if (temp[i].value != "") {
            info.fax += temp[i].value;
            if (i < temp.length - 1) {
                info.fax += "　－　";
            }
        }

    }

    document.getElementById('col1').textContent = info.company;

    var name_output = "";
    var name_span = '<span style = "display : inline-block; width : 6em;">'

    name_output = name_span+info.Applicant_family+"</span>"+info.Applicant_first  +"<br>"+name_span + info.Applicant_family_katakana+"</span>"+ info.Applicant_first_katakana;
    document.getElementById('col2').innerHTML = name_output;
    
    document.getElementById('col3').textContent = info.department;
    document.getElementById('col4').textContent = info.phone;
    document.getElementById('col5').textContent = info.email;
    document.getElementById('col6').textContent = info.fax;

    if (school == "tokyo") {
        info.school = "ＨＡＬ東京";
    }
    if (school == "osaka") {
        info.school = "ＨＡＬ大阪";

    }
    if (school == "nagoya") {
        info.school = "ＨＡＬ名古屋";
    }
    console.log(info.school);
    document.getElementById('col7').textContent = info.school;

    for (let i = 0; i < info.classes.length; i++) {

        var temp = "";
        var span = '<span style = "float : right ; margin-right : 300px;">';
        if (info.classes[i] == "game") {
            temp = "ゲーム分野";
        }
        if (info.classes[i] == "digital") {
            temp = "デジタル映像分野";
        }
        if (info.classes[i] == "sound") {
            temp = "サウンド分野";
        }
        if (info.classes[i] == "graphic") {
            temp = "グラフィックデザイン分野";
        }
        if (info.classes[i] == "it") {
            temp = "情報処理システム分野";
        }
        if (info.classes[i] == "web") {
            temp = "WEB開発分野";
        }
        if (info.classes[i] == "control") {
            temp = "制御系システム分野";
        }
        if (info.classes[i] == "car") {
            temp = "カーデザイン分野";
        }
        
        temp += span + info.people[info.classes[i]] + "</span>";
        if (i < info.classes.length - 1) {
            temp += "<br>";
        }
        info.counter += temp;       
    }

    document.getElementById('col8').innerHTML = info.counter ;
    
    document.getElementById('col9').textContent = info.date;

    //console.log(info.company);
    //console.log(info.email);

}


function back_page3() {
    var pages3 = document.getElementById('page3');
    var pages4 = document.getElementById('page4');

    pages3.style.display = "block";
    pages4.style.display = "none";


    info.company = "";
    info.Applicant_family = "";
    info.Applicant_first = "";
    info.Applicant_family_katakana = "";
    info.Applicant_first_katakana = "";
    info.department = "";
    info.phone = "";
    info.email = "";
    info.fax = "";
    info.school = "";
    info.counter = "";
}

function next5() {
    var src = "images/" + school + "_logo.svg";
    var pages4 = document.getElementById('page4');
    var pages5 = document.getElementById('page5');
    var logo = document.getElementById('select5_logo');
    pages4.style.display = "none";
    pages5.style.display = "block";
    logo.src = src;
}

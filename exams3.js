var exams = {name: [], categories: [], questions: [], correctanswer: []};
var users = {
    admin : {
        name: ["sam", "happiness",],
        pin: [1234, 5678,],
    },
    student : {
        name: [""],
        pin: [],
    },
    tutor : {
        name: [""],
        pin: [],
    }
};

var studentscores = {
    "waec" :  {
        "english": {
            studname: ["emma", "esther", "blessing", "victor", "sandra", "divine"],
            score: [56, 80, 56, 77, 19, 80],
        },
        "maths": {
            studname: ["emma", "esther", "blessing", "victor", "sandra", "divine"],
            scores: [62, 37, 52, 43, 49, 94],
        },
    },
    "jamb": {
        "biology": {
            studname: ["emma", "esther", "blessing", "victor", "sandra", "divine"],
            score: [82, 54, 36, 64, 36, 82],
        },
        "economics": {
            studname: ["emma", "esther", "blessing", "victor", "sandra", "divine"],
            scores: [75, 60, 44, 75, 44, 100],
        },
    },
};
var obj={}


function openmessage() {
    alert("Welcome to the annual Oracode exams")
}

openmessage()

// while (true){
    var password = parseInt(prompt('Enter password'))
    var passwordIndex = users.admin.pin.indexOf(password)
        

        if (passwordIndex !== -1 ) {
            alert("Welcome " + users.admin.name[passwordIndex])
            options();
        } else{
            alert("Wrong password")
            openmessage();            
        }
// }

function options() {
    var message = prompt("1. Exams" + "\n2. Categories" + "\n3. Question Bank" + "\n4. Users")
    
    if (message == 1) {
        var examsoptions = prompt("1. Create exam" + "\n2. List all exams" + "\n3. Edit exam")
        if (examsoptions == 1) {
            var examtitleamount = parseInt(prompt("How many exam title(s) would you like to add?"))
            for (i = 0; i < examtitleamount; i++) {
                var examtitle = prompt("Please enter the exam title")
                var exti = exams.name.indexOf(examtitle)
                if (exti !== -1) {
                    alert("exam already exists")
                    options()
                } else {
                    exams.name.push(examtitle);
                    var n = []
                    exams.questions.push(n)
                    var r = []
                    exams.correctanswer.push(r)
                    alert("Exam title has been created successfully")
                    console.log(exams.name)                    
                } 
            } options();
        } else if (examsoptions == 2) {            
            alert(proen())                    
            function proen() {
                var exna=exams.name;
                var b3="";
                var s=1
                for (i = 0; i < exna.length; i++ ){
                b3=b3+`${s++}. ${exna[i]}\n`
                }
                return b3;                                               
                }
            options();
        } else if (examsoptions == 3) {
            var edittitleoptions = prompt("1. Edit Title" + "\n2. Delete Title")
            if (edittitleoptions == 1) {
                var editexamtitle = prompt("What exam title would you like to edit?")
                var eet = exams.name.indexOf(editexamtitle)
                if (eet !== -1) {
                    var newexamtitle = prompt("What would you like as the new title?")
                    exams.name = newexamtitle
                    alert("Exam title has been changed successfully")
                    options();
                } else {
                    alert("Exam Title doesn't exist")
                    options();
                }
            } else if (edittitleoptions == 2) {
                var deletetitle = prompt("What exam title would you like to delete?")
                var deltitle = exams.name.indexOf(deletetitle)
                if (deltitle !== -1) {
                    exams.name.splice(deltitle, 1)
                    options();
                } else {
                    alert("Exam Title doesn't exist")
                    options();
                }
            } else {
                alert("Invalid option selected")
                options();
            }
        } else {
            alert("Invalid option selected")
            options();
        }
            
    } else if (message == 2) {
        var categoriesoptions = prompt("1. Create categories" + "\n2. List all categories" + "\n3. Edit category")
        if (categoriesoptions == 1) {
            var categoriesname = prompt("Please enter the exam title from which you'd want to create a subject")
            var catn = exams.name.indexOf(categoriesname)
           
            console.log(catn)
            
             if(catn ==-1){
                alert("Exam does not exist")    
                 options();
             }else{
                var catn2=exams.categories[catn]
                if(typeof(catn2) =="undefined"){
                    var subject = prompt("What is the name of the subject?")
                    var x = []
                    x.push(subject)
                    exams.categories.push(x)
                    var p = []
                    exams.questions[catn].push(p)
                    var s = []
                    exams.correctanswer[catn].push(s)
                    console.log(exams.categories)
                    alert("Subject successfully created")

                    options();
                }else{
                    var subject = prompt("What is the name of the subject?")
                    exams.categories[catn].push(subject)
                    var p = []
                    exams.questions[catn].push(p)
                    alert("Subject successfully created")
                    console.log(exams.questions)
                    options()
                }
               
             }
        } else if (categoriesoptions == 2) {
            var y = prompt("From which exam title would you like to view subjects?")
            var v = exams.name.indexOf(y)
            if (v !== -1) {
                alert(prona())                    
                function prona() {
                    var exc=exams.categories[v];
                    var a="";
                    var q=1
                    for (i = 0; i < exc.length; i++ ){
                    a=a+`${q++} ${exc[i]}.\n`
                    }
                    return a;                                               
                }
            } else {
                alert("Exam Title doesn't exist")
                options();
            }
            options();

        } else if (categoriesoptions == 3) {
            var editcatoptions = prompt("1. Edit Category" + "\n2. Delete Category")
            if (editcatoptions == 1) {
                var spcana = prompt("From what exam title would you like to edit a subject?")
                var scn = exams.name.indexOf(spcana)
                if (scn !== -1) {
                    var speccat = prompt("What subject would you like to edit?")
                    var spcat = exams.categories[scn].indexOf(speccat)
                    if (spcat !== -1) {
                        var newsubjectname = prompt("What would you like as the new name of the subject?")
                        exams.categories[scn][spcat] = newsubjectname
                        options();
                    } else {
                        alert("Exam Subject doesn't exist")
                        options();
                    }
                } else {
                    alert("Exam Title doesn't exist")
                    options();
                }
            } if (editcatoptions == 2) {
                var titledelete = prompt("From what exam title would you like to delete a subject?")
                var etd = exams.name.indexOf(titledelete)
                if (etd !== -1) {
                    var subjectdelete = prompt("What subject would you like to delete?")
                    var subdel = exams.categories[etd].indexOf(subjectdelete)
                    if (subdel !== -1) {
                        exams.categories[etd].splice(subdel, 1)
                        options();
                    } else {
                        alert("Exam Subject doesn't exist")
                        options();
                    }
                } else {
                    alert("Exam Title doesn't exist")
                    options();
                }
            } 
        } else {
            alert("Invalid option selected")
            options();
        }

    } else if (message == 3) {
        var questionsoptions = prompt("1. Add questions" + "\n2. List all questions")
        if (questionsoptions == 1) {
            var questionstitle = prompt("Please enter the exam title from which you'd want to add a question")
            var quti = exams.name.indexOf(questionstitle)
            if (quti !== -1) {
                var questionssubject = prompt("Please enter the subject you'd like to add questions to")
                var qusu = exams.categories[quti].indexOf(questionssubject)
                if (qusu == -1) {
                    alert ("Subject does not exist")
                    options();
                } else {                   
                        var questionsamount = parseInt(prompt("How many questions will you like to set?"))
                       
                        for (i = 0; i < questionsamount; i++) {
                            var addquestions = prompt("Enter the question")
                            exams.questions[quti][qusu].push(addquestions)                            
                            console.log(exams.questions)
                            alert("Exam questions successfully added")
                            var coransques = prompt("Would you like to enter the correct answer? If yes press 0 to continue")
                            if (coransques == 0) {
                                var answer = prompt("What is the correct option?")
                                exams.correctanswer[quti][qusu].push(answer)  
                            }                           
                            console.log(exams.correctanswer)            
                        } options();                 
                }
            } else {
                alert("Exam Title doesn't exist")
                options();
            }
        } else if (questionsoptions == 2) {
            var a = prompt("Which exam categories would you like to access?")
            var d = exams.name.indexOf(a)
            if (d !== -1) {
                var b = prompt("Which subject questions would you like to see")
                var b2 = exams.categories[d].indexOf(b)                
                if(b2 !== -1) {
                    alert(pro())                    
                    function pro() {
                        var ex=exams.questions[d][b2];
                        var z="";
                        var p=1
                        for (i = 0; i < ex.length; i++ ){
                            z=z+`${p++} ${ex[i]}.\n`
                        }
                        return z;                                               
                    } options();
                } else {
                    alert("Exam Subject doesn't exist")
                    options();
                }
            } else {
                alert("Exam Title doesn't exist")
                options();
            }         
        } 
        
    } else if (message == 4) {
        var usersoptions = prompt("1. Add user" + "\n2. List users" + "\n3. Edit users")
        if (usersoptions == 1) {
            var adduseroptions = prompt("1. Add admin" + "\n2. Add student" + "\n3. Add tutor")
            if (adduseroptions == 1) {
                addadminname = prompt("Enter new admin's username")
                users.admin.name.push(addadminname)
                addadminpin = parseInt(prompt("Enter new admin's password"))
                users.admin.pin.push(addadminpin)
                alert("New admin account created")
                options();
            } else if (adduseroptions == 2) {
                addstudentname = prompt("Enter new student's username")
                users.student.name.push(addstudentname)
                addstudentpin = parseInt(prompt("Enter new student's password"))
                users.student.pin.push(addstudentpin)
                alert("New student account created")
                options();
            } else if (adduseroptions == 3) {
                addtutorname = prompt("Enter new tutor's username")
                users.tutor.name.push(addtutorname)
                addtutorpin = parseInt(prompt("Enter new tutor's password"))
                users.tutor.pin.push(addtutorpin)
                alert("New tutor account created")
                options();
            } else {
                alert("Invalid option selected")
                options();
            }       
        } else if (usersoptions == 2) {
            var listusers = prompt("1. View admin users" + "\n2. View student users" + "\n3. View tutor users")
            if (listusers == 1) {
                alert(users.admin.name)
                options();
            } else if (listusers == 2) {
                alert(users.student.name)
                options();
            } else if (listusers == 3) {
                alert(users.tutor.name)
                options();
            } else {
                alert("Invalid option selected")
                options();
            }
        } else if (usersoptions == 3) {            
            var editusers = prompt("1. Edit admin users" + "\n2. Edit student users" + "\n3. Edit tutor users")
            if (editusers == 1) {
                var editadminuser = prompt("Enter the admin username you'd like to edit")
                var eau = users.admin.name.indexOf(editadminuser)
                if (eau !== -1) {
                    newadminuser = prompt("Enter the new admin username")
                    users.admin.name = newadminuser
                    var adminpasschange = prompt("Press 0 if you would like to change the admin user's password")
                    if (adminpasschange == 0) {
                        var previousadminpin = parseInt(prompt("Enter previous passowrd"))
                        if (previousadminpin == users.admin.pin[eau]) {
                            var newadminpin = parseInt(prompt("Enter the new pin"))
                            users.admin.pin[eau] = newadminpin
                            alert("Admin account details changed succesfully")
                            options();
                        }
                    }
                    options();
                }
            } else if (editusers == 2) {
                var editstudentuser = prompt("Enter the student username you'd like to edit")
                var esu = users.student.name.indexOf(editstudentuser)
                if (esu !== -1) {
                    newstudentuser = prompt("Enter the new student username")
                    users.student.name = newstudentuser
                    var studentpasschange = prompt("Press 0 if you would like to change the student's password")
                    if (studentpasschange == 0) {
                        var previousstudpin = parseInt(prompt("Enter previous password"))
                        if (previousstudpin == users.student.pin[esu]) {
                            var newstudpin = parseInt(prompt("Enter the new pin"))
                            users.student.pin[esu] = newstudpin
                            alert("Student account details changed succesfully")
                            options();
                        }
                    }
                    options();
                }
            } else if (editusers == 3) {
                var edittutoruser = prompt("Enter the tutor username you'd like to edit")
                var etu = users.tutor.name.indexOf(edittutoruser)
                if (etu !== -1) {
                    newtutoruser = prompt("Enter the new tutor username")
                    users.tutor.name = newtutoruser
                    var tutorpasschange = prompt("Press 0 if you would like to change the admin user's password")
                    if (tutorpasschange == 0) {
                        var previoustutorpin = parseInt(prompt("Enter previous passowrd"))
                        if (previoustutorpin == users.tutor.pin[etu]) {
                            var newtutorpin = parseInt(prompt("Enter the new pin"))
                            users.tutor.pin[etu] = newtutorpin
                            alert("Tutor account details changed succesfully")
                            options();
                        }
                    }
                    options();
                }
            }  else {
                alert("Invalid option selected")
                options();
            }          
        }
    } else if (message == 5) {
        var ranktitle = prompt("What title would you like to access")        
        var stusco = studentscores[ranktitle]
        console.log(stusco)
        if (typeof(stusco) == "undefined") {
            alert("exam does not exist")
        } else {
            var ranksubject = prompt("What category would you like to access")
            var rasu = studentscores[ranktitle][ranksubject]
            console.log(rasu)
            if (typeof(rasu) == "undefined") {
                alert("wrong")
            } else {
                alert("you got it")
            }
            // for (var i = 0; i < studname.length; i++) {
            //     obj[score[i]] = studname[i];
            // }
            // alert()
        }
        console.log(obj)
        // if (rati !== -1) {
            
        //     var rasu = studentscores[rati].indexOf(ranksubject)
        //     if (rasu !== -1) {
        //         alert(studentscores[rati][rasu].scores)
        //     }
        // }
    }
}
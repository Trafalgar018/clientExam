
function showData() {
    var obj, dbParam, xmlhttp, myObj, x,y, txt = "";
    obj = { "table":herramientas, "limit":20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 1){
            document.getElementById("state").innerHTML = "conexion establecida";
        }else if (this.readyState == 2){
            document.getElementById("state").innerHTML = "solicitud recibida";
        }else if (this.readyState == 3){
            document.getElementById("state").innerHTML = "procesando solicitud";
        }else if (this.readyState == 4 && this.status == 200) {
            document.getElementById("state").innerHTML = "peticion finalizada con exito";
            myObj = JSON.parse(this.responseText);
            txt += "<table border='1'>"
            for (x in myObj) {
                for(y in myObj[x]) {
                    for(let i = 0;i<myObj[x][y].length;i++) {

                            txt += "<tr><td>" + myObj[x][y][i].nombre + "</td></tr>";
                            console.log(myObj[x][y][i])

                    }
                }
            }
            txt += "</table>"
            document.getElementById("list").innerHTML = txt;

        } else {
            document.getElementById("state").innerHTML = "error en la peticion";
        }
    };
    xmlhttp.open("GET", "list.json", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
}

function showData2() {
    spinner();
    var obj, dbParam, xmlhttp, myObj, x,y, txt = "";
    obj = { "table":herramientas, "limit":20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 1){
            $("#stateJquery").html("Peticion iniciada");
        }
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<table border='1'>"
            for (x in myObj) {
                for(y in myObj[x]) {
                    for(let i = 0;i<myObj[x][y].length;i++) {
                        if(myObj[x][y][i].reparaciones == 0) {

                            txt += "<tr><td>" + myObj[x][y][i].nombre + "</td></tr>";
                            console.log(myObj[x][y][i])
                            $("#stateJquery").html("Peticion terminada");
                        }
                    }
                }
            }
            $('#spinner').html("");
            txt += "</table>"
            $("#herramientas").html(txt);

        }
    };
    xmlhttp.open("GET", "list.json", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
}

        function showData3() {
            spinner();
            var obj, dbParam, xmlhttp, myObj, x, y, txt = "";
            obj = {"table": herramientas, "limit": 20};
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function () {

                if (this.readyState == 1) {

                    $("#stateJquery").html("Peticion iniciada");

                }
                if (this.readyState == 4 && this.status == 200) {

                    myObj = JSON.parse(this.responseText);
                    txt += "<table border='1'>"

                    for (x in myObj) {
                        for (y in myObj[x]) {
                            for (let i = 0; i < myObj[x][y].length; i++) {
                                if (myObj[x][y][i].reparaciones > 0) {

                                    txt += "<tr><td>" + myObj[x][y][i].nombre + "</td></tr>";
                                    console.log(myObj[x][y][i])
                                    $("#stateJquery").html("Peticion terminada");
                                }
                            }
                        }
                    }
                    $('#spinner').html("");
                    txt += "</table>"
                    $("#herramientas").html(txt);

                }
            };
            xmlhttp.open("GET", "list.json", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send("x=" + dbParam);
        }

function spinner(){
    $('#spinner').html('<span> <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> spinner</span>');
}

function sleep(milisegundos) {
    var comienzo = new Date().getTime();
    while (true) {
        if ((new Date().getTime() - comienzo) > milisegundos)
            break;
    }
}

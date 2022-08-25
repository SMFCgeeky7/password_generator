let listInfo = [];

var input = document.getElementById("inpWebsite");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function saveBtn() {
    

    let website = document.getElementById("inpWebsite").value;
    document.getElementById("inpWebsite").value = "";

    let info_json = {
        "website": website,
    }
    
    listInfo.push(info_json);

    //window.localStorage.setItem("website", JSON.stringify(info));
    //JSON.parse(window.localStorage.getItem("website"));

    let contador = 0;
    let html = "";
    while (contador < listInfo.length) {

        console.log(listInfo[contador]);

        html = html +
            `<div class="col-6" id="div-lista">
            <label id="personas">${listInfo[contador].website}</label>
        </div>`;

        contador++;
    }
    
    for (info_json[website]) {
        if ( info_json[website] == undefined ) {
            delete info_json[website]
        }
    }
    
    if(website.includes(".com")){
        document.getElementById("website").innerHTML = html;
    }
    
    
    
    /*
    for (let website in info_json) {
        if (info_json[website] === undefined) {
            
        }
    }
*/
    console.log(info_json);

}
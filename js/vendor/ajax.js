var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp; //Creating xmlHttp Object

    if(window.ActiveXObject) { // only true if IE
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){
            xmlHttp = false;
        }


    } else { // Non-IE
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
        }
    }

    if(!xmlHttp)
        alert("There was an error creating this function");
    else
        return xmlHttp;
}


function process() {  //Is it ready to connect, if so connect
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4) { //0 and 4 are states where it's ready to communcate with server

        food = encodeURIComponent(document.getElementById("userInput").value);
        xmlHttp.open("GET", "../ajax-php.php?food=" + food, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null); // sending null always unless it's a POST

    } else {
        setTimeout('process()', 1000);
    }
}

// https://www.youtube.com/watch?v=0YyTrxAMC34&index=9&list=PL6gx4Cwl9DGDiJSXfsJTASx9eMq_HlenQ

function handleServerResponse() {
    if(xmlHttp.readyState == 4) {  // 4 means it's complete
        if(xmlHttp.status ==200) {  //200 means communication was ok
            xmlResponse = xmlHttp.responseXML;
            xmlDocumentElement = xmlResponse.documentElement;
            message = xml.DocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
            setTimeout('process()', 1000);
        } else {
            alert('Something went wrong');
        }
    }
}

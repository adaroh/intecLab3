/**
 * Created by adar-ohana on 30/03/14.
 */

function validateURL(uri)
{
    var patt = /(http|https)/i;

    return patt.test(uri);
}

function load(uri, callback)
{
    console.log(uri);
    var newScript = document.createElement("script");
    newScript.src = uri;
    newScript.onload = callback;
    document.body.appendChild(newScript);
}

function buttonOnClick()
{
    var button = document.createElement("input");
    button.onclick = function() {loadImage("http://a.adroll.com/a/Q3H/HH2/Q3HHH27UGNEKNONTX2CG37.jpg")};
    button.setAttribute("type",'button');
    button.setAttribute("value",'show image');
    document.getElementById("mainDiv").appendChild(button);
}


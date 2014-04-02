/**
 * Created by adar-ohana on 30/03/14.
 */

function loadImage(uri)
{
    var newSc = document.createElement("img");
    newSc.setAttribute('src',uri);
    document.getElementById("mainDiv").appendChild(newSc);
}
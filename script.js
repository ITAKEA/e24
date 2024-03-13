
$().ready(function() {
	$("h1:first").hide()

	$(".markdown-body").prepend("<div style='text-align:center; margin:40px 0 40px 0; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024</small></div>");

	$(".markdown-body").append("<div style='text-align:center; margin-top:60px; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024 - clbo@kea.dk - licence: MIT</small></div>");
});


$(document).ready(function() {

    // Opretter en ny container med flex layout
    const flexContainer = document.createElement("div");
    flexContainer.style.display = "flex";
    flexContainer.style.justifyContent = "space-start"; // Fordeler pladsen omkring elementerne
    flexContainer.style.alignItems = "flex-start"; // Starter elementerne øverst
    flexContainer.style.flexWrap = "wrap"; // Sørger for, at elementerne kan ombrydes ved behov

    // Finder de eksisterende elementer for Softwarearkitektur og Cloud
    const softwareHeader = document.getElementById("softwarearkitektur");
    const softwareList = softwareHeader.nextElementSibling;

    const cloudHeader = document.getElementById("cloud");
    const cloudList = cloudHeader.nextElementSibling;

    // Opretter nye <div>s for at indeholde hver sektions indhold
    const softwareDiv = document.createElement("div");
    softwareDiv.appendChild(softwareHeader.cloneNode(true)); // Kloner og tilføjer h2
    softwareDiv.appendChild(softwareList.cloneNode(true)); // Kloner og tilføjer ol

    const cloudDiv = document.createElement("div");
    cloudDiv.appendChild(cloudHeader.cloneNode(true)); // Kloner og tilføjer h2
    cloudDiv.appendChild(cloudList.cloneNode(true)); // Kloner og tilføjer ol

    // Tilføjer de to nye <div> elementer til flex containeren
    flexContainer.appendChild(softwareDiv);
    flexContainer.appendChild(cloudDiv);

    // Fjerner de originale elementer
    softwareHeader.remove();
    softwareList.remove();
    cloudHeader.remove();
    cloudList.remove();

    // Finder <div> med id 'content' og tilføjer den nye container til det
    $('#content').append(flexContainer);
});

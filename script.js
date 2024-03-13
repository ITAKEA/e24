/*

$().ready(function() {
	$("h1:first").hide()

	$(".markdown-body").prepend("<div style='text-align:center; margin:40px 0 40px 0; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024</small></div>");

	$(".markdown-body").append("<div style='text-align:center; margin-top:60px; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024 - clbo@kea.dk - licence: MIT</small></div>");
});
*/

$(document).ready(function() {
    // Gemmer det første h1 element på siden
    $("h1:first").hide();

    // Tilføjer en div med tekst øverst i .markdown-body
    $(".markdown-body").prepend("<div style='text-align:center; margin:40px 0 40px 0; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024</small></div>");

    // Tilføjer en div med tekst nederst i .markdown-body
    $(".markdown-body").append("<div style='text-align:center; margin-top:60px; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024 - clbo@kea.dk - licence: MIT</small></div>");

    // JavaScript for at arrangere "Softwarearkitektur" og "Cloud" side om side
    // Opretter en ny container med flex layout
    const flexContainer = document.createElement("div");
    flexContainer.style.display = "flex";
    flexContainer.style.justifyContent = "space-around"; // Fordeler pladsen omkring elementerne
    flexContainer.style.alignItems = "flex-start"; // Starter elementerne øverst
    flexContainer.style.flexWrap = "wrap"; // Sørger for, at elementerne kan ombrydes ved behov

    // Finder de eksisterende elementer for Softwarearkitektur og Cloud
    const softwareHeader = document.getElementById("softwarearkitektur");
    const softwareList = softwareHeader.nextElementSibling; // Antager at <ol> er det næste element

    const cloudHeader = document.getElementById("cloud");
    const cloudList = cloudHeader.nextElementSibling; // Antager at <ol> er det næste element

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

    // Tilføjer den nye container til .markdown-body elementet
    $(".markdown-body").prepend(flexContainer);
});



/*
document.addEventListener("DOMContentLoaded", function() {
  // Opret en ny container med flex layout
  const flexContainer = document.createElement("div");
  flexContainer.style.display = "flex";
  flexContainer.style.justifyContent = "space-around"; // Fordeler pladsen omkring elementerne
  flexContainer.style.alignItems = "flex-start"; // Starter elementerne øverst
  flexContainer.style.flexWrap = "wrap"; // Sørger for, at elementerne kan ombrydes ved behov

  // Find de eksisterende elementer for Softwarearkitektur og Cloud
  const softwareHeader = document.getElementById("softwarearkitektur");
  const softwareList = softwareHeader.nextElementSibling; // Antager at <ol> er det næste element

  const cloudHeader = document.getElementById("cloud");
  const cloudList = cloudHeader.nextElementSibling; // Antager at <ol> er det næste element

  // Opret en ny <div> for hver sektion og tilføj overskriften og listen til den
  const softwareDiv = document.createElement("div");
  softwareDiv.appendChild(softwareHeader);
  softwareDiv.appendChild(softwareList);

  const cloudDiv = document.createElement("div");
  cloudDiv.appendChild(cloudHeader);
  cloudDiv.appendChild(cloudList);

  // Tilføj de to nye <div> elementer til flex containeren
  flexContainer.appendChild(softwareDiv);
  flexContainer.appendChild(cloudDiv);

  // Tilføj den nye container til body (eller et specifikt element, hvis du foretrækker)
  document.body.insertBefore(flexContainer, document.body.firstChild);
});
*/

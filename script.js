
$().ready(function() {
	$("h1:first").hide()

	$(".markdown-body").prepend("<div style='text-align:center; margin:40px 0 40px 0; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024</small></div>");

	$(".markdown-body").append("<div style='text-align:center; margin-top:60px; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024 - clbo@kea.dk - licence: MIT</small></div>");
});

$(document).ready(function() {

    // Opretter en ny container med flex layout
    const flexContainer = document.createElement("div");
    flexContainer.style.display = "flex";
    flexContainer.style.width = "100%";

    // Opretter to indre containere for at opdele layoutet
    const leftContainer = document.createElement("div");
    leftContainer.style.flex = "1";

    const rightContainer = document.createElement("div");
    rightContainer.style.flex = "1";
    rightContainer.style.display = "flex";
    rightContainer.style.justifyContent = "center";
    rightContainer.style.alignItems = "flex-start";

    // Finder de eksisterende elementer for Softwarearkitektur og Cloud
    const softwareHeader = document.getElementById("softwarearkitektur");
    const softwareList = softwareHeader.nextElementSibling;

    const cloudHeader = document.getElementById("cloud");
    const cloudList = cloudHeader.nextElementSibling;

    // Tilføjer Softwarearkitektur til venstre container
    leftContainer.appendChild(softwareHeader);
    leftContainer.appendChild(softwareList);

    // Opretter en ny <div> for Cloud-indholdet for at centrere det inden i højre container
    const cloudContent = document.createElement("div");
    cloudContent.appendChild(cloudHeader);
    cloudContent.appendChild(cloudList);

    rightContainer.appendChild(cloudContent);

    // Tilføjer begge containere til den ydre flex container
    flexContainer.appendChild(leftContainer);
    flexContainer.appendChild(rightContainer);

    // Tilføjer den ydre container til <div> med id 'content'
    document.getElementById('content').appendChild(flexContainer);
});


$().ready(function() {
	$("h1:first").hide()

	$(".markdown-body").prepend("<div style='text-align:center; margin:40px 0 40px 0; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024</small></div>");

	$(".markdown-body").append("<div style='text-align:center; margin-top:60px; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024 - clbo@kea.dk - licence: MIT</small></div>");
});

// Dette er en kommentar


document.addEventListener("DOMContentLoaded", function() {
  // Opret en ny container til layout
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "space-around";
  container.style.alignItems = "flex-start";

  // Find de oprindelige lister og deres overskrifter
  const softwareHeader = document.getElementById("softwarearkitektur");
  const softwareList = softwareHeader.nextElementSibling;

  const cloudHeader = document.getElementById("cloud");
  const cloudList = cloudHeader.nextElementSibling;

  // Opret nye divs for at holde hvert sæt af h2 + liste
  const softwareDiv = document.createElement("div");
  softwareDiv.appendChild(softwareHeader.cloneNode(true)); // Klon og tilføj h2
  softwareDiv.appendChild(softwareList.cloneNode(true)); // Klon og tilføj liste

  const cloudDiv = document.createElement("div");
  cloudDiv.appendChild(cloudHeader.cloneNode(true)); // Klon og tilføj h2
  cloudDiv.appendChild(cloudList.cloneNode(true)); // Klon og tilføj liste

  // Tilføj de nye divs til containeren
  container.appendChild(softwareDiv);
  container.appendChild(cloudDiv);

  // Erstat de oprindelige elementer med den nye container
  document.body.insertBefore(container, softwareHeader);
  document.body.removeChild(softwareHeader);
  document.body.removeChild(softwareList);
  document.body.removeChild(cloudHeader);
  document.body.removeChild(cloudList);
});

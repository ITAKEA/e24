$().ready(function() {
	$("h1:first").hide()

	$(".markdown-body").prepend("<div style='text-align:center; margin:40px 0 40px 0; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024</small></div>");

	$(".markdown-body").append("<div style='text-align:center; margin-top:60px; color:#888888'><small>Kompendie - Software Arkitektur & Cloud efterår 2024 - clbo@kea.dk - licence: MIT</small></div>");
});


document.addEventListener("DOMContentLoaded", function() {
  // Opret en ny container til layout
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "space-around";
  container.style.alignItems = "flex-start";

  // Find de oprindelige sektioner ved hjælp af deres h2 id'er
  const softwareHeader = document.getElementById("softwarearkitektur");
  const cloudHeader = document.getElementById("cloud");

  // Antag, at indholdet, der skal arrangeres, er det næste element (eller en bestemt gruppe af elementer) efter disse h2's
  // For dette eksempel, lad os bare klone h2 elementerne som en demonstration
  const softwareClone = softwareHeader.cloneNode(true);
  const cloudClone = cloudHeader.cloneNode(true);

  // Opret divs for at indeholde hver sektion's indhold
  const softwareDiv = document.createElement("div");
  softwareDiv.appendChild(softwareClone);

  const cloudDiv = document.createElement("div");
  cloudDiv.appendChild(cloudClone);

  // Tilføj sektionerne til den nye container
  container.appendChild(softwareDiv);
  container.appendChild(cloudDiv);

  // Tilføj den nye container til et specifikt punkt i dokumentet
  // Dette er et eksempel, tilpas til din faktiske brug
  document.body.appendChild(container);
});

import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { computeStats } from "../lib/dataFunctions.js";
import  data from "../data/dataset.js";

export const GroupalChat = () => {
  const container = document.createElement("div");
  const main = document.createElement("main");
  main.innerHTML = `
    <h2>Chat Grupal</h2>
    <div class="chartContainer"></div>
    <div class="chartContainer2"></div>
    <div class="chartContainer3"></div>
  `;

  window.addEventListener("DOMContentLoaded", renderChart);

  container.append(Header(), main, Footer());

  return container;
};
const renderChart = () => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const stats = computeStats(data);

    const googleData = google.visualization.arrayToDataTable([
      ["Element", "Value"],
      ["Masculino", stats.Masculino],
      ["Femenino", stats.Femenino],
    ]);

    const options = {
      title: "Genero de los vecinos",
      width: 600,
      height: 500,
      backgroundColor: "#f7f3e7",
      colors: ["#3f51b5", "#e91e63"],
    };

    const chart = new google.visualization.PieChart(document.querySelector(".chartContainer"));
    chart.draw(googleData, options);
    const chart2 = new google.visualization.PieChart(document.querySelector(".chartContainer2"));
    chart2.draw(googleData, options);
    const chart3 = new google.visualization.PieChart(document.querySelector(".chartContainer3"));
    chart3.draw(googleData, options);
  }
};

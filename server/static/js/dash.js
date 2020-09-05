Chart.defaults.global.animation.duration = 2000; // Animation duration
Chart.defaults.global.title.display = false; // Remove title
Chart.defaults.global.title.text = "Chart"; // Title
Chart.defaults.global.title.position = "bottom"; // Title position
Chart.defaults.global.defaultFontColor = "#999"; // Font color
Chart.defaults.global.defaultFontSize = 10; // Font size for every label

Chart.defaults.global.tooltips.backgroundColor = "#FFF"; // Tooltips background color
Chart.defaults.global.tooltips.borderColor = "white"; // Tooltips border color
Chart.defaults.global.legend.labels.padding = 0;
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.gridLines.zeroLineColor = "rgba(255, 255, 255, 0.1)";
Chart.defaults.scale.gridLines.color = "rgba(255, 255, 255, 0.02)";

Chart.defaults.global.legend.display = false;

function createChart(data) {
  let number = [];
  let date = [];
  data.forEach((record) => {
    number.push(record["number"]);
    date.push(record["date"]);
  });

  new Chart(document.getElementById("line"), {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          data: number,
          label: "Number",
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Random Numbers Through Time",
        fontSize: 15,
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          padding: 10,
          fontSize: 15,
          fontColor: "#ffffff",
        },
      },
    },
  });

  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: date,
      datasets: [
        {
          data: number,
          label: "Number",
          borderColor: "#3e95cd",
          fill: true,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Random Numbers Through Time",
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          padding: 10,
          fontSize: 15,
          fontColor: "#ffffff",
        },
      },
    },
  });

  var x = document.getElementById("hidden_div");
  x.style.display = "block";
}

document.forms["formid"].addEventListener("submit", async (event) => {
  event.preventDefault();
  let response = await fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
  });
  response = await response.json();
  createChart(response["data"]);
});

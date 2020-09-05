var chart = document.getElementById("myChart");
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
  let happy = [];
  let sad = [];
  let angry = [];
  let date = [];
  let emotion = [];
  console.log(data);
  data.forEach((stuff) => {
    if (stuff["emotion"] == "happy") {
      happy.push(10);
    } else {
      happy.push(3);
    }
    if (stuff["emotion"] == "sad") {
      sad.push(8);
    } else {
      sad.push(3);
    }
    if (stuff["emotion"] == "angry") {
      angry.push(6);
    } else {
      angry.push(3);
    }
    emotion.push(stuff["emotion"]);
    date.push(stuff["time"]);
  });
  var count = {};
  emotion.forEach((inst) => (count[inst] = (count[inst] || 0) + 1));

  new Chart(document.getElementById("line"), {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          data: happy,
          label: "Happy",
          borderColor: "#3e95cd",
          fill: false,
        },
        {
          data: sad,
          label: "Sad",
          borderColor: "#8e5ea2",
          fill: false,
        },
        {
          data: angry,
          label: "Angry",
          borderColor: "#3cba9f",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Emotion Analysis",
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
      labels: Object.keys(count),
      datasets: [
        {
          label: "Emotion",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
          data: Object.values(count),
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Perecentage emotion this week",
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
  console.log(response);
  //createChart(response["name"]);
});

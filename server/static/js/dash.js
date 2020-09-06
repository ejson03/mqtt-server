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
          backgroundColor: "rgba(151,249,190,0.5)",
          borderColor: "rgba(151,249,190,0.5)",
          borderWidth: 0.5,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Random Numbers Through Time",
        fontSize: 15,
      },
      legend: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Date",
            },
            type: "time",
            distribution: "linear",
            time: {
              displayFormats: {
                minute: "HH:mm:ss",
              },
              unit: "hour",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            display: true,
            scaleLabel: {
              display: true,
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            },
          },
        ],
      },
    },
  });

  // new Chart(document.getElementById("bar-chart"), {
  //   type: "bar",
  //   data: {
  //     labels: date,
  //     datasets: [
  //       {
  //         data: number,
  //         label: "Number",
  //         borderColor: "#3e95cd",
  //         fillColor: "rgba(151,249,190,0.5)",
  //         strokeColor: "rgba(255,255,255,1)",
  //         fill: true,
  //       },
  //     ],
  //   },
  //   options: {
  //     title: {
  //       display: true,
  //       text: "Random Numbers Through Time",
  //       fontSize: 15,
  //     },
  //     // legend: {
  //     //   display: true,
  //     //   position: "top",
  //     //   labels: {
  //     //     padding: 10,
  //     //     fontSize: 15,
  //     //     fontColor: "#ffffff",
  //     //   },
  //     // },
  //     axisY: {
  //       lineThickness: 1,
  //     },
  //     zoomEnabled: true,
  //     animationEnabled: true,
  //   },
  // });

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

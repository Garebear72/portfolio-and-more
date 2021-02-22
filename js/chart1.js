// Hello potential employer! If for some reason you found yourself looking at my source code,
// let me walk you through on what's going on in here.

// The graph materializes starting from the top, and going clockwise until it reaches the top again. 
// So when we create a chart and add data, add it in the order you want it to appear on the canvas.

// This is where the magic happens! Creating a variable that connects to a canvas on my page.
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    // There are lots of different types of graphs to choose from. I went with doughnut.
  type: 'doughnut',
  data: {
      // This is where you can add the labels to your graph.
    labels: ['HTML/CSS/JS', 'C# / .NET Core / Ang', 'Python' ,'Libraries'],
    datasets: [{
        // This is the percentage (in order with the labels up above).
      data: [55, 15, 10, 20],
      backgroundColor: [
        // Same thing here, but with colors, in order with above.
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(0, 206, 86, 0.4)'
      ],
      // Same thing again, but with the color of the borders around each slice.
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(0, 206, 86, 0.4)'
      ],
      borderWidth: 3
    }]
  },
  options: {
   	cutoutPercentage: 40,
    weight: 1,
    responsive: false,
  }
});
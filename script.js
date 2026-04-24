// typing effect
const text = ["Monitoring...", "Optimizing...", "All systems operational ✔"];
let i = 0, j = 0;

function typing() {
  let el = document.querySelector('.typing');
  el.textContent = text[i].substring(0, j++);
  
  if (j > text[i].length) {
    setTimeout(() => {
      j = 0;
      i = (i + 1) % text.length;
    }, 1500);
  }

  setTimeout(typing, 80);
}

typing();

// chart
const ctx = document.getElementById('chart1');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5','6'],
    datasets: [{
      label: 'Performance',
      data: [10,20,15,30,25,40],
      borderColor: '#00ff9c',
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: {
      x: { display: false },
      y: { display: false }
    }
  }
});

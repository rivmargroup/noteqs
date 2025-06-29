// Asegúrate de que este script se ejecute después de que Chart.js esté cargado.
// Puedes añadir Chart.js en tu HTML si no lo has hecho:
const loadChart = () => {
  const ctx = document.getElementById('overviewChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          label: 'Session Notes',
          data: [0, 1, 0, 0, 0, 0, 0],
          backgroundColor: 'rgba(186, 85, 211, 0.6)',
        },
        {
          label: 'Active clients',
          data: [1, 1, 1, 1, 1, 1, 1],
          backgroundColor: 'rgba(85, 239, 196, 0.6)',
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });
};

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', loadChart);

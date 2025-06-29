// Load and render the chart
const loadChart = () => {
  const ctx = document.getElementById('overviewChart').getContext('2d');

  new Chart(ctx, {
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

// Add a new client row
function addClient() {
  const table = document.getElementById('clientList');
  const row = table.insertRow();
  row.innerHTML = `
    <td>New Client</td>
    <td>Unknown</td>
    <td><button>👁️</button></td>
    <td><button onclick="this.parentElement.parentElement.remove()">🗑️</button></td>
  `;
}

// Add a new session note
function addNote() {
  const list = document.getElementById('notesList');
  const empty = document.getElementById('notesEmpty');
  empty.style.display = 'none';
  const li = document.createElement('li');
  li.textContent = 'New session note created at ' + new Date().toLocaleString();
  list.appendChild(li);
}

document.addEventListener('DOMContentLoaded', loadChart);

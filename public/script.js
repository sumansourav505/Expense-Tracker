document.getElementById('addExpense').addEventListener('click', async () => {
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
  
    const response = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, description, category })
    });
  
    const data = await response.json();
    alert('Expense Added');
    location.reload();
  });
  
  // Fetch and display expenses
  async function fetchExpenses() {
    const res = await fetch('/api/expenses');
    const expenses = await res.json();
    // Render expenses dynamically
  }
  fetchExpenses();
  
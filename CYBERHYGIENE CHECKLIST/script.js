
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function updateCount() {
  const total = checkboxes.length;
  let checked = 0;
  checkboxes.forEach(box => {
    if (box.checked) checked++;
  });

  const result = document.getElementById('result');
  result.textContent = `✅ ${checked} of ${total} items completed`;
}

// Run the function when a checkbox is clicked
checkboxes.forEach(box => {
  box.addEventListener('change', updateCount);
});

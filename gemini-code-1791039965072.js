const pad = document.getElementById('scratchpad');

// Load saved note on launch
pad.value = localStorage.getItem('scratch_note') || '';

// Save text as you type
pad.addEventListener('input', () => {
  localStorage.setItem('scratch_note', pad.value);
});
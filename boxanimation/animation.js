

// Modal popup behavior
document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = "block";
  };

  document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = "none";
  };

  // Notification behavior
  setTimeout(() => {
    document.getElementById('notification').classList.add('show');
  }, 1000);

  setTimeout(() => {
    document.getElementById('notification').classList.remove('show');
  }, 4000);
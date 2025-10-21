const timeElement = document.querySelector('[data-testid="test-user-time"]');

if (timeElement) {
  const updateTime = () => {
    timeElement.textContent = Date.now();
  };

  updateTime();
  setInterval(updateTime, 1000);
}

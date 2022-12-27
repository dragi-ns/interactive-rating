document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  const ratings = document.querySelectorAll('.btn-rating');
  const submitBtn = document.querySelector('.btn-submit');
  submitBtn.disabled = true;
  const selectedRating = document.querySelector('.selected-rating');

  ratings.forEach((rating) => {
    rating.addEventListener('click', (event) => {
      const targetRating = event.currentTarget;
      const activeRating = document.querySelector('.btn-rating.active');
      activeRating?.classList.remove('active');
      if (activeRating !== targetRating) {
        event.currentTarget.classList.add('active');
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });
  });

  submitBtn.addEventListener('click', () => {
    const activeRating = document.querySelector('.btn-rating.active');
    if (!activeRating) {
      return;
    }

    const rating = +activeRating.dataset.rating;
    if (Number.isNaN(rating) || rating < 1 || rating > 5) {
      return;
    }

    selectedRating.textContent = rating;
    card.classList.add('rotate');
  });
});

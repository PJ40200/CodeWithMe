document.querySelectorAll('.course').forEach((course) => {
  course.addEventListener('click', async () => {
    const courseName = course.querySelector('h3').textContent;
    const price = parseInt(course.querySelector('strong').textContent.replace('₹', '').replace(',', ''));

    try {
      const response = await fetch('http://localhost:5000/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseName, price }),
      });
      
      const data = await response.json();
      if (data.id) {
        window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  });
});

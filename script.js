// 1. Button Click
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // 2. Hover Effects
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = 'coral';
  });
  hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = 'lightblue';
  });
  
  // 3. Keypress Detection
  document.addEventListener('keydown', (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // 4. Secret Double Click
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert('🎉 Secret unlocked!');
  });
  
  // 5. Change Color/Text Button
  document.getElementById('colorBtn').addEventListener('click', function () {
    this.style.backgroundColor =
      this.style.backgroundColor === 'green' ? 'purple' : 'green';
    this.textContent =
      this.textContent === 'Change My Color'
        ? 'Color Changed!'
        : 'Change My Color';
  });
  
  // 6. Image Gallery
  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
  ];
  let index = 0;
  document.getElementById('nextImg').addEventListener('click', () => {
    index = (index + 1) % images.length;
    document.getElementById('galleryImage').src = images[index];
  });
  
  // 7. Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.content').forEach((c) => (c.style.display = 'none'));
      document.getElementById(tab.dataset.target).style.display = 'block';
    });
  });
  
  // 8. Form Validation
  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
  
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passValid = password.length >= 8;
  
    if (!emailValid) return (feedback.textContent = '❌ Invalid email format');
    if (!passValid) return (feedback.textContent = '❌ Password must be at least 8 characters');
  
    feedback.textContent = '✅ Form submitted successfully!';
  });
  
  // 9. Real-time Password Feedback
  document.getElementById('password').addEventListener('input', function () {
    const feedback = document.getElementById('feedback');
    feedback.textContent =
      this.value.length < 8 ? '⏳ Password too short' : '✅ Looks good!';
  });
  
  
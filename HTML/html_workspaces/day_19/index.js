
     const button1 = document.getElementById('button1');
     const section1 = document.getElementById('section1');
 
     button1.addEventListener('click', () => {
         window.scrollBy({top: section1.getBoundingClientRect().top, behavior: 'smooth'});
     });

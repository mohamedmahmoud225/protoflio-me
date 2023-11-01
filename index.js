document.querySelector(".toggle-btn").addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
    document.querySelector(".icon").classList.remove('fa-sun');
    document.querySelector(".icon").classList.add('fa-moon');
    } else {
    document.querySelector(".icon").classList.remove('fa-moon');
    document.querySelector(".icon").classList.add('fa-sun');
    }
    });

const darkMode = () => {
    const sunToggleBtns = document.querySelectorAll('#sun-toggle');

    sunToggleBtns.forEach(btn =>{
        btn.addEventListener('click', () =>{
            document.body.classList.toggle('light-mode');
        });
    });
};


export default darkMode;
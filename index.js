
window.addEventListener('load', getAdvice)
document.getElementById('getAdvice').addEventListener('click', getAdvice)


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then(data => {
            document.getElementById('advice').innerHTML = data.slip.advice;
            document.getElementById('id').innerHTML = data.slip.id;
        })
};


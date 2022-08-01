const dice = document.getElementById('button');
const container = document.querySelector('.container');
let url = "https://api.adviceslip.com/advice";
let adviceData;

async function getAdvice(url){
    const dataPromise = await fetch(url);
    const data = await dataPromise.json();
    adviceData = data;
    console.log(data);
    console.log(data.slip.id);
    let html = `<p># ${data.slip.id}</p>`;
    html += `<p>${data.slip.advice}</p>`;
    html += ` <img src="images/pattern-divider-desktop.svg">`
    container.innerHTML = html;
    if(data.status === 200){
        setTimeout(function (){
            dice.removeAttribute('animation');
        });
    }
}

dice.addEventListener('click',function (){
    getAdvice(url);
});

/* function adviceContent(data){
  let html = `<p># ${data.slip.id}</p>`;
  html += `<p>${data.slip.advice}</p>`;
  html += ` <img src="images/pattern-divider-desktop.svg">`
  return html;
} */

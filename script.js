// add

function colorChar(color, char){
  return `<span class="${color}">${char}</span>`
}
const colorable = ['<', '>', '/']
async function machineWriting(element, text, time = 300){
  let i = 0;
  for (const char of text){
    
    await new Promise(resolve =>{
      setTimeout(()=>{
        resolve()
      }, time)
    })
    element.innerHTML += colorChar(colorable.includes(char) ? 'red' : 'white', char);
  };
}

async function machineDeleting(element, time = 200){
  let list = []

  for (let char of element.textContent){
    // el += '>'
    // if (!el.includes('<span')){
    //   el += '<' + el;
    // }
    // console.log(el); 
    list.push(colorChar(colorable.includes(char) ? 'red' : 'white', char));
  }
  for (let i = list.length; i >= 0; i--){
    list = list.slice(0, i)
    await new Promise(resolve => {
      setTimeout(()=>{
        resolve();
      }, time);
    })
    element.innerHTML = list.join('')
  // console.log(list);

  }
}

const h2 = document.querySelector('h2');
const dash = document.querySelector('#dash');
const arrows = document.querySelector('#triangle');
function loopDash(foo, time = 1000){
  setTimeout(()=>{
    dash.textContent = foo % 2 ? '_' : ' ';
    loopDash(!foo);
  }, time)
}
loopDash('', 700)
await machineWriting(h2, '</Welcome>', 100);
let scrollableUp = true;
let scrollableDown = true;

arrows.style.rotate = '0deg';
console.log(arrows.style.rotate)
window.addEventListener('wheel', (event)=>{
  if(scrollableDown && event.deltaY > 0){
    scrollableDown = false;
    scrollableUp = false;
    machineDeleting(h2, 100)
      .then(response => {
        scrollableUp = true;
        arrows.style.rotate = parseInt(arrows.style.rotate.replace('deg', '')) + 180 + 'deg';
        console.log(arrows.style.rotate)
      })
  } else if (scrollableUp && event.deltaY < 0) {
    scrollableUp = false;
    scrollableDown = false;
    machineWriting(h2, '</Welcome>', 100)
      .then(response => {
        scrollableDown = true;
        arrows.style.rotate = parseInt(arrows.style.rotate.replace('deg', '')) + 180 + 'deg';
        }) 
  }
}) 

// add

function colorChar(color, char){
  return `<span class="${color}">${char}</span>`
}
const colorable = ['<', '>', '/']
function machineWriting(element, text, time = 300){
  let i = 0;
  let l = 0;
  for (const char of text){
    setTimeout(()=>{
      element.innerHTML += colorChar(colorable.includes(char) ?'red' : 'white', char);
      l++;
      if (l === text.length){
        console.log(h2.textContent, l, text.length)
      }
    }, time*i)
    i++;

  };
}

const h2 = document.querySelector('h2');
const dash = document.querySelector('#dash');

function loopDash(foo, time = 1000){
  setTimeout(()=>{
    dash.textContent = foo % 2 ? '_' : ' ';
    loopDash(!foo);
  }, time)
}

loopDash('', 700)
machineWriting(h2, '</Welcome>', 100)

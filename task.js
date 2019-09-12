1. 
let el = document.querySelector('a')
el.addEventListener('click', addFunction)

function addFunction() {
  let div_el = document.querySelector("#container")
  let new_div = document.createElement("div")
  new_div.setAttribute('id', 'item')
  div_el.appendChild(new_div)
  new_div.innerHTML = '<h3>Заголовок</h3>' + '<p>текст текст текст</p>'
}

2. 
let div = document.querySelector(".play")
let a = document.querySelector("a")
a.addEventListener("click", changeColor)

function changeColor() {
  div.classList.add("clear")
}

3.
let input = document.querySelector("input")
let a = document.querySelectorAll("a")[1]
a.addEventListener("click", addValue)
function addValue(){
  input.setAttribute('value', 'HTMLLab')
}

4. 
let a = document.querySelectorAll("a")[1]
a.addEventListener("click", getText)
function getText(){
  let textarea = document.querySelector("textarea").value
  let words = textarea.split(" ")
  for (let x = 0; x < words.length; x++){ 
    document.write(`${words[x]}<br \/>`)
  }
}

5.
let a = document.querySelectorAll("a")[1]
a.addEventListener("click", someFunction)
function someFunction(){
  let text = document.querySelector("textarea").value
  let word = document.querySelector("input").value
  let regex = new RegExp(word, "gi");
  let new_text = text.replace(regex, `<mark>${word}</mark>`)
  let p = document.querySelector("p")
  p.innerHTML = new_text
}

6. 
  let table = document.createDocumentFragment()
  let arr = []
  for (let i = 0; i < 20; i++) {
    let tr = document.createElement('tr')
    arr[i] = [];
    for (let j = 0; j < 20; j++) {
      let td = document.createElement('td');
      td.innerHTML = arr[i][j] = getRandom();
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById('numbers').appendChild(table);

  function getRandom() {
    var min = 100;
    var max = 999;
    return Math.floor(Math.random() * (max - min)) + min;
  }

7.
let arr = document.querySelectorAll("img")
for(let i = 0; i < arr.length; i++){
  document.body.innerHTML += `${arr[i].getAttribute('src')}<br \/>`
}

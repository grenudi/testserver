let pidr;
let result;

function replace(input, reg = / /gm , rep = ""){
  return input.replace(reg,rep);
}
function doTheThing(){
  result = [];
  pidr = document.getElementsByTagName("tr");
  for(i in pidr){
    try{
      let row = pidr[i].getElementsByTagName("td");
      if(row[7].innerHTML.toLowerCase() === "да"){
        let str = row[2].innerHTML + " | пн-пт: "+ replace(row[4].innerHTML) + " сб: "+ replace(row[5].innerHTML) + " вс: "+ replace(row[6].innerHTML)
        result.push(str);
      }
    }catch{}
  }
  console.log(result.join("=").replace(/=/gm,"\n\r"));
  printList();
}
function copyFromEvent (e){
  console.log(e.target);
  e.target.select();
  document.execCommand('copy');
}


let printList = function (list=result,smsSize=500){
  let anchor = document.getElementsByTagName("body")[0];
  let node = document.getElementById("stbable-output-list");
  if(!node){
    node = document.createElement("tr");
    node.setAttribute("id", "stbable-output-list");
  }

  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }

  let symbCounter = 0;
  let txtAreas = [];

  for(let i = 0; i < list.length; i++){
    const data = list[i].replace(/<[a-z,A-Z,а-я,А-Я,\/,\\, ,0-9,",',:,;,\-,_,=б\.,\r,\n]*>/gm, "");
    symbCounter += data.length;
    const smsPack = Math.floor(symbCounter/smsSize);
    // console.log("COUNTER: " + data + " length: " + symbCounter);

    console.log("smsPack & txtareas: " , smsPack , " | " , txtAreas.length-1);
    if(smsPack !== txtAreas.length-1){
      console.log("new textarea: " + smsPack);
      const init = document.createElement("textarea");
      init.cols = "60";
      init.rows = "7";
      init.wrap = "off";
      init.setAttribute("class", "sms-pack-"+smsPack);
      init.setAttribute("class", "copy-on-click");
      txtAreas.push(init);
      console.log(txtAreas);
    }
    txtAreas[smsPack].value += data + "\r\n";
  }
  txtAreas.forEach((x)=>node.appendChild(x));
  anchor.insertBefore(node, document.getElementById("example_wrapper"));

  let fields = document.getElementsByClassName("copy-on-click");
  for(i in fields){
    fields[i].onclick = copyFromEvent;
  }
}

function listenToChange(){
  const dropDown = document.getElementById("my_select");
  dropDown.onchange = ()=>{
    doTheThing();
    console.log("Shit HAPPENS");
  };
}

listenToChange();

const ElementsFinder = function(){
  const monitor = function(getter , timeout = 1000 , tries=999999){
    return new Promise((ok,notok)=>{
      let count = 0;
      let picker = setInterval(()=>{
        let el = getter();
        if(el){
          clearInterval(picker);
          ok(el);
        }else if(count >= tries){
          clearInterval(picker);
          console.error(new Error("NO such element as you queried: " + JSON.stringify(getter)));
        }
      }, timeout);
    })
  }
  
  this.add = function(name, getter, timeout, tries){
    if(!name) throw new Error("no name given!");
    if(typeof(getter) !== "function") throw new Error("your getter isn't a function: " + JSON.stringify(getter));
    this[name] = function(){
      return new Promise((ok)=>{
        monitor(getter, timeout, tries).then(ok);
      });
    }
  }
}
const elFinder = new ElementsFinder();

elFinder.add("headRow", ()=> document.getElementsByTagName("thead").getElementsByTagName("tr")[0] , 500, 120);

elFinder.headRow().then((el)=>console.log("yepekae: " + el));
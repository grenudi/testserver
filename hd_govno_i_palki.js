function addbr (){
    let bttn = document.getElementById("submit_ticket_form")
    let area = document.getElementById("comment_text")
    let abbr = function(){
        area.value = area.value.replace(/<br>/gm,"");
        area.value = area.value.replace(/\n/gm,"<br>\n");
    }
    bttn.onmouseover = abbr
};

const tmp_area = document.getElementById("submit_ticket_form");
if(tmp_area){
    addbr();
}

function riddOf7 ( ...list ){
  const inputs = document.querySelectorAll(".ng-pristine.ng-untouched.ng-valid.ng-scope.input-text.ng-empty");

  if(inputs.length <= 0 && !list)
    return console.error("NO INPUTS on the page");

  list.push(inputs[0]);
  list.push(inputs[1]);
  list.push(inputs[3]);
  list.push(inputs[4]);

  const sbmt = document.getElementsByTagName("button")[0];
  const eRidOf7 = function(e){
      e.preventDefault();
      let input = (e.clipboardData || window.clipboardData).getData('text');
      //alert(JSON.stringify(input));
      e.target.value = input.replace(/\D/gm,"").replace(/^(?:7|8)/,"");
      e.target.select();
      document.execCommand("copy");
      sbmt.click();
  }
  // inputs[4].onpaste = eRidOf7;
  list.forEach(x=>x.onpaste = eRidOf7);
};

function guidMacSn (){
  const inputs = document.querySelectorAll(".ng-pristine.ng-untouched.ng-valid.ng-scope.input-text.ng-empty");

  if(inputs.length <= 0 && !list)
    return console.error("NO INPUTS on the page");

  list.push(inputs[0]);

  const sbmt = document.getElementsByTagName("button")[0];
  const eHandler = function(e){
      e.preventDefault();
      let input = (e.clipboardData || window.clipboardData).getData('text');
      //alert(JSON.stringify(input));

      e.target.value = input.replace(/\D/gm,"").replace(/^(?:7|8)/,"");
      e.target.select();
      document.execCommand("copy");
      sbmt.click();
  }
  const wtfIsThis = function(str){
    return cutToMatchMac || cutToMatchGuid || cutToMatchSn;
  }
  const cutToMatchMac = function(str){
    str = str.replace(/\W/gm,"");
    if(str.length !== 12)
      return undefined;
    str = str.split("").map((x,i)=> (i+1)%2===0 && (i+1)!== 12? x+"-" : x).join("");
    return str;
  }
  const cutToMatchGuid = function(str){
    return str;
  }
  const cutToMatchSn = function(str){
    return str;
  }
  // inputs[4].onpaste = eRidOf7;
  list.forEach(x=>x.onpaste = eRidOf7);
}

switch(location.href){
  case "https://fttb.bee.vimpelcom.ru/ptn/ng_ptn#/queues": riddOf7(); break;
  case "https://fttb.bee.vimpelcom.ru/ptn/ng_ptn#/search-tv-equipment": guidMacSn(); break;
}

function addbr (){
    const tmp_area = document.getElementById("submit_ticket_form");
    if(!tmp_area){
        return console.log("No textarea on the page!");
    }
    let bttn = document.getElementById("submit_ticket_form")
    let area = document.getElementById("comment_text")
    let abbr = function(){
        area.value = area.value.replace(/<br>/gm,"");
        area.value = area.value.replace(/\n/gm,"<br>\n");
    }
    bttn.onmouseover = abbr
};

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

function notification(anchor, msg){
  
};
function guidMacSn ()
{
  const sbmt = document.getElementsByTagName("button")[0];
  const input = document.getElementsByClassName("input-text")[0];
  if(input.length <= 0 && !list)
    return console.error("NO INPUTS on the page");

  const eHandler = function(e){
      e.preventDefault();
      let input = (e.clipboardData || window.clipboardData).getData('text');
      input = wtfIsThis(input);
      if(!input){
        notification(e.target, "Это не МАК, не ГУИД и не Серийный номер! тогда зачем ты мне даешь это ?");
        return;
      }
      alert(JSON.stringify(input));
      e.target.value = input;
      e.target.select();
      document.execCommand("copy");
      sbmt.click();
  }
  const wtfIsThis = function(str){
    return cutToMatchMac(str) || cutToMatchGuid(str) || cutToMatchSn(str);
  }
  const cutToMatchMac = function(str){
    str = str.replace(/\W/gm,"");
    if(str.length !== 12)
      return undefined;
    str = str.split("").map((x,i)=> (i+1)%2===0 && (i+1)!== 12? x+"-" : x).join("");
    return str;
  }
  const cutToMatchGuid = function(str){
    str = str.replace(/\W/gm,"");
    if(str.length !== 32)
      return undefined;
    return str;
  }
  const cutToMatchSn = function(str){
    str = str.replace(/[\W,_]/gm,"");
    if(str.length !== 16)
      return undefined;
    return str;
  }

  input.onpaste = eHandler;
}
function listenToMacPaste (){
	try{
	    const tmp_area = document.getElementById("comment_text");
	    if(!tmp_area){
	        return console.log("No textarea on the page!");
	    }
	    const cutToMatchMac = function(str){
		    str = str.replace(/\W/gm,"");
		    if(str.length !== 12)
		      return undefined;
		    str = str.split("").map((x,i)=> (i+1)%2===0 && (i+1)!== 12? x+"-" : x).join("");
		    return str;
	  	}
	    const ePaste = function (e){
	    	let input = (e.clipboardData || window.clipboardData).getData('text');
	    	e.clipboardData.setData = window.clipboardData = cutToMatchMac(input) + "" + "HOLY SHIT";/*determinVendor(input);*/
	    	alert("HOLY SHIT");
	    }
	    tmp_area.onpaste = ePaste;
	}catch(e){
		alert(e);
	}
}



switch(location.href){
  case "https://fttb.bee.vimpelcom.ru/ptn/ng_ptn#/queues": riddOf7(); break;
  case "https://fttb.bee.vimpelcom.ru/ptn/ng_ptn#/search-tv-equipment": guidMacSn(); break;
  default: addbr(); listenToMacPaste(); break;
}

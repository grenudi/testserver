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
    const sbmt = document.getElementsByTagName("button")[0];
    const eRidOf7 = function(e){
        e.preventDefault();
        let input = (e.clipboardData || window.clipboardData).getData('text');
        e.target.value = input.replace(/\D/gm,"").replace(/^7|8/,"");
        e.target.select();
        document.execCommand("copy");
        sbmt.click();
    }
    
    let inputs = document.querySelectorAll("."+"ng-pristine ng-untouched ng-valid ng-scope input-text ng-empty".replace(/ /gm,"."));
    
    // inputs[4].onpaste = eRidOf7;
    list.forEach(x=>x.onpaste = eRidOf7);
    document.getElementsByTagName("button")[0].click();
};
const inputs = document.querySelectorAll(".ng-pristine.ng-untouched.ng-valid.ng-scope.input-text.ng-empty");
if(inputs.length > 0){
    riddOf7(inputs[4],inputs[3]);
}

function doCopyable(...elems){
<td style="width: 220px"><a href="unsafe:telnet://194.186.92.56" class="ng-binding">194.186.92.56</a> <button class="btnCopy" data-clipboard-text="194.186.92.56"><i class="fa fa-clipboard" aria-hidden="true"></i></button> <button class="btnCopy" style="width:32px" data-clipboard-text="hotkey://tsterm?switch=194.186.92.56&amp;echelon=0">SSH</button></td>   
}

const ipses = document.getElementById("tableOnline").firstChild.getElementsByTagName("tr");
if(ipses){
    doCopyable(ip[1].lastChild)
}

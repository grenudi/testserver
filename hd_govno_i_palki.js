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
        //alert(JSON.stringify(input));
        e.target.value = input.replace(/\D/gm,"").replace(/^(?:7|8)/,"");
        e.target.select();
        document.execCommand("copy");
        sbmt.click();
    }
    // inputs[4].onpaste = eRidOf7;
    list.forEach(x=>x.onpaste = eRidOf7);
};
const inputs = document.querySelectorAll(".ng-pristine.ng-untouched.ng-valid.ng-scope.input-text.ng-empty");
if(inputs.length > 0){
    riddOf7(inputs[0], inputs[1],inputs[4],inputs[3]);
}else{
    console.error("no inputs on this page");
}

function riddOf7 ( field ){
    const sbmt = document.getElementById("btnSearch_btn");
    const eRidOf7 = function(e){
        e.preventDefault();
        let input = (e.clipboardData || window.clipboardData).getData('text');
        //alert(JSON.stringify(input));
        e.target.value = input
                            .replace(/\W/gm,"")
                            .split("")
                            .reduce((acc,x,i)=>{
                                acc+=x;
                                if((i+1)%2===0){
                                    acc+="-"   
                                }
                            });
        e.target.select();
        document.execCommand("copy");
        // sbmt.click();
    }
    field.onpaste = eRidOf7;
};
const input = document.getElementById("tbDeviceID");
if(input){
    riddOf7(input);
}else{
    console.error("no inputs on this page");
}

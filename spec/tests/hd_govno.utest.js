describe("Filtors should:",()=>{
    const Filtors = require("../../hd_govno_i_palki.js").Filtors;
    const filtors = new Filtors();
    // const macCollection = require("../../hd_govno_i_palki.js").macCollection;

    filtors.add("one", (input)=>{
                if(input === "one"){            
                    return "two";
                }else{
                    return undefined;
                }
            })
            .add("two", (input)=>{
                if(input === "two"){            
                    return "three";
                }else{
                    return undefined;
                }
            });
    beforeEach(()=>{
        filtors.result();
    })
        
    it("exist", ()=>{
        expect(filtors).not.toBe(undefined);
    })
    it("have printf", ()=>{
        expect(filtors.printf).not.toBe(undefined);
    })
    describe("be robust", ()=>{
        filtors
                .add("cleanMac", (input)=>{
                    input = input.replace(/[\.,\-,:, ]/gm, "");
                    if(input.length !== 12 || input.replace(/([a-f,A-F,0-9])/g,"").length !== 0)
                    return undefined;
                    return input;
                })
                .add("dlinkMac", (input)=>{
                    return input.split("").map((x,i)=> ((i+1)%2 === 0 && (i+1)!== 12 )? x.toUpperCase()+"-" : x.toUpperCase() ).join("");
                })
                .add("addMacVendor", (input)=>{
                    return input + " - " + macCollection[consolas.and(input).cleanMac().result().slice(0,6).toUpperCase()];
                });
        it("[result] return undefined when filter is returning it", ()=>{
            expect(filtors.and("00-50-BA-12-34-ok").cleanMac().dlinkMac().addMacVendor().result()).toBe(undefined);
        });
    })
    it("filter should clear all states after result() invocation", ()=>{
        filtors.and("one").one();
        expect(filtors.printf("$s$c")).toBe("twotwo");
        filtors.result();
        expect(filtors.printf("$s$c")).toBe("");
    });
    it("if no input given to [xor] or [and] state should be the same - either previous state or unefined", ()=>{
        expect(filtors.printf("$s")).toBe("");
        filtors.and();
        expect(filtors.printf("$s")).toBe("");
        filtors.xor();
        expect(filtors.printf("$s")).toBe("");
        filtors.and("one").one().xor();
        expect(filtors.printf("$s")).toBe("two"); filtors.result();
        filtors.xor("one").one().and();
        expect(filtors.printf("$s")).toBe("two");
    })
    it("if [xor] === true , state will not be changed if [nextState] is undefined, and only feeds start input to a filter", ()=>{
        filtors.xor("one").one();
        expect(filtors.printf("$s")).toBe("two");
        filtors.two();
        expect(filtors.printf("$s")).toBe("two");
    })
    it("if [and] called after [xor] , state can be changed ether [nextState] is unefined or not", ()=>{
        expect(filtors.and().one().result()).toBe(undefined);
    })
    it("should be able to store states", ()=>{
        filtors.and("one").store();
        expect(filtors.printf("$s$s1")).toBe("oneone");
        filtors.one().store();
        expect(filtors.printf("$s$s1$s2")).toBe("twoonetwo");
    })

    describe("printf() should:", ()=>{
        beforeEach(()=>{  
            filtors.result();       
        });

        it("not break if one par given", ()=>{
            expect(filtors.printf("one string")).toBe("one string");
        })
        it("not break if non existing pars given", ()=>{
            expect(filtors.printf("one string $123$0$s$c$b$a")).toBe("one string $b$a");
        })
        it("should return the current result if $c given", ()=>{
            expect(filtors.and("one").one().result()).toBe("two");
        })
        it("should return the state if $s given", ()=>{
            filtors.and("one").one();
            expect(filtors.printf("$s")).toBe("two");
        })
        it("should return next state if $c given", ()=>{
            filtors.and("one").one();
            expect(filtors.printf("$c")).toBe("two");
        })
        it("should be able to change state from a filter param", ()=>{
            expect(filtors.and("one").one("testing").result()).toBe("testing");
        })
        it("should be able to concat as defined in a filter param", ()=>{
            expect(  filtors.and("one")
                            .one("testing filter ONE, with given $s , expecting $c , and add list of: $1 , $2 , $3", "one" , "two" , "three")
                            .result())
                            .toBe("testing filter ONE, with given one , expecting two , and add list of: one , two , three");
        })
        it("should be able to concat as defined in a static function itself param", ()=>{
            expect(  filtors.printf("testing filter ONE, with given , expecting , and add list of: $1 , $2 , $3", "one" , "two" , "three")
                ).toBe("testing filter ONE, with given , expecting , and add list of: one , two , three");
        })
    })
})
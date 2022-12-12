import React, { useState } from 'react';

export function List(){
    const [prods, setProds] = useState(Array);
        // [{"name":"prod 1", "value": 100, "quant": 2}, {"name":"prod 2", "value": 200, "quant": 1}]
    const [parcs, setParcs] = useState(Array);
        // [{"value": 50, "quant": 8}]
    const [prodsTotal, setProdsTotal] = useState(0);
    let [parcsTotal, setParcsTotal] = useState(0);
    const [parcOk, setParcOk] = useState('false');
    let totalProd = 0;
    let totalParc = 0;

    function getProds(e){
        try {
            setProds(JSON.parse(e.target.value));
            calcTotal(prods, parcs);
        } catch (error) {
            console.log(error);
        }
    }

    function getParcs(e) {
        try{
            setParcs(JSON.parse(e.target.value));
            calcTotal(prods, parcs);
        } catch (error) {
            console.log(error);
        }
    }

    function calcTotal(prods, parcs){
        for (let index = 0; index < prods.length; index++) {
            totalProd += (prods[index].value * prods[index].quant);
        }
        for (let index = 0; index < parcs.length; index++) {
            totalParc += (parcs[index].value * parcs[index].quant);
        }
        setProdsTotal(totalProd);
        setParcsTotal(totalParc);
        isOk();
    }

    function isOk() {
        if (prodsTotal === parcsTotal) {
            setParcOk('true');
        }else{
            setParcOk('false');
        }
    }

    return(
        <div id='main'>
            <div className='input'>
                <label htmlFor='input-prods'>Prods:</label>
                <input onChange={getProds} id='input-prods' type="text" placeholder='Model: [{name: "prod 1", value: 100, quant: 2}, ...]'/>
            </div>
            <div className='input'>
                <label htmlFor='input-parcs'>Parcs:</label>
                <input onChange={getParcs} id='input-parcs' type="text" placeholder='Model: [{"value": 50, "quant": 8}, ...]'/>
            </div>
            <div>
                <p>Valor das venda: {prodsTotal}</p>
                <p>Valor das parcelas: {parcsTotal}</p>
                <p>Venda ok : {parcOk}</p>
            </div>
        </div>
    )
}
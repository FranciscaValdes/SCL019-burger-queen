import React, { useState, useEffect } from "react";
// import {Desayuno} from "./menu-desayuno";
import { dataMenu } from "../firebase/firebase-functions";


export const DataDesayuno = () => {
    const [desayuno, setDesayuno] = useState([]);
    useEffect(() => {
        dataMenu().then(res => {
            setDesayuno(res.breakfast);
        })
    }, []);
    return (
        <div className="botones-desayuno">
            {
                desayuno.map((product) => {
                    return (
                        <button key={product.id}
                            className="product-item"
                            // onClick={() => {setDesayuno(product)}}
                            value={product.item}
                        >
                            <h2>{product.item}</h2>
                            <h1>{`${product.price} $`}</h1>
                        </button>
                    )
                })
            }
        </div>
    )

}
export default DataDesayuno;





// export const ContainerDesayuno = () => {
// const [desayuno, setDesayuno] = useState([]);
// useEffect(()=> {
// db.collection("menusbq")
// .onSnapshot( snap => {
//     const documents = [];
//     snap.array.forEach(doc => {
//         documents.push({
//             id: doc.id,
//             ...doc.data()
//         });
//         setDesayuno(documents);
//     });
// }

// )
// }, [desayuno]

// )
// return (
//     <div>
//         {
//             desayuno.map((menu) => (
// <Desayuno key={menu.id} menu={menu}/>
//             ))
//         }
//     </div>
// )
// }
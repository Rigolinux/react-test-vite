/* eslint-disable react-hooks/rules-of-hooks */
import { Card } from "primereact/card"

/* import { decrement,increment } from "../../../reducers/counter"
import { useAppDispatch, useAppSelector } from "../../../hooks/counterHook" */




const productType= () => {
  
/*   const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch() */
  return (
    <Card title="Tipo de Producto" >
    <p className="m-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
      numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
   {/*  <div className="d-flex justify-content-between">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div> */}
 
  </Card>
  )
}

export default productType
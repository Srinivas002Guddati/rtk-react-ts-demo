import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import type { RootState, AppDispatch } from '../../app/store';


export default function Counter(){
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>()

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
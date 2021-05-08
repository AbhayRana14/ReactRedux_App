export const incNumber = (num) => { 
    return{
        type: "INCREMENT" ,
        val: num
    }
    }
export const decNumber = () => { 
    return{
        type: "DECREMENT" 
    }
}
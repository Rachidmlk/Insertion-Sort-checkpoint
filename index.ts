function sortCards (arr: number[]): number[] {
    arr.forEach((el, index)=> {
        let i:number = index
        if(arr[i] > arr[i+1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
           while(arr[i]< arr[i-1] && i>=1){
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
            i--
           }
        }
    })


 return arr
}
sortCards([0, 5, -2, 14, 9, 10])

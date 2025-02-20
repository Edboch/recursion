function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.splice(0,mid);
    let right = arr;

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft,sortedRight);
}

function merge(left,right) {
    let i = 0;
    let j = 0;

    let res = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }

    for (let x = i; i < left.length; i++){
        res.push(left[i]);
    }
    for (let y = j; j < right.length; j++){
        res.push(right[j]);
    }

    return res;

}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
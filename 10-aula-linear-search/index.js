function linearSearch(array, target){
    let index = 0;
    let found = false;

    while(index < array.length) {
        if(array[index] === target){
            found = true;
            break;
        }

        index++;
    }

    if(found){
        console.log(`Element found at index: ${index}`);
    } else {
        console.log('Element not found');
    }
}

const array = [5, 3, 7, 1, 9, 8];
const target = 7;

linearSearch(array, target);
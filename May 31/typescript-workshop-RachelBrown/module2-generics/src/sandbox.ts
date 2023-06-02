function filterString(arr: string[], testFn: (item: string) => boolean) {
    const result = [];

    for (const item of arr) {
        if (testFn(item)) {
            result.push(item);
        }
    }
    return result;
}

function filterNumber(arr:  number[], testFn: (item: number) => boolean) {
    const result = [];

    for (const item of arr) {
        if (testFn(item)) {
            result.push(item);
        }
    }
    return result;
}

function filterUntyped(arr: any[], testFn: (item: any) => boolean) {
    const result = [];

    for (const item of arr) {
        if (testFn(item)) {
            result.push(item);
        }
    }
    return result;
}

function filter<T>(arr: T[], testFn: (item: T) => boolean) {  //generic function
    const result: T[] = [];

    for (const item of arr) {
        if (testFn(item)) {
            result.push(item);
        }
    }
    return result;
}


const strArr = ['a','b'];
const numArr = [ 1,3,4];

const stringFiltered = filter<string>(strArr, (a) => a === 'a'); // you can also take the "<string>" out and it's implied
const stringFiltered2 = filter(strArr, (a) => a === a);

const mixedArr = ["a", 12, "b"];
const fff = filter(mixedArr, x => x == 12);

const result = filterString(strArr, ch => ch == "a");



class Foo<T1, T2> {   //generic class
    property1?: T1;
    property2?: T2;

    constructor( t1: T1, t2: T2){
        this.property1 = t1;
        this.property2 = t2;
    }
}

let f = new Foo("Hello", 12);




export default null;

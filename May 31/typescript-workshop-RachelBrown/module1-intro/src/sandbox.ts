

let s = "";

let b: boolean = true;
let n: number = 12;

let a:any;
a =() => {};
a.b.c.d =12;

let u1: unknown;
let u2: unknown;

if (u1 == u2) {}

let nev: never;

function declaration() {
    return 12;
}

const expression = () => {
    return 12;
}

function foo(): void {}

const getNum2 = (): number => {
    return 2;
};

const plus2 =(val: number): number => {
    return val + 1;
}

function logAll(...args: string[]) {
    console.log(...args)
}

logAll('A', 'B', 'C');

function logAll2(...args: (string | number)[]) {
    console.log(...args);
}

logAll2 ("A", 12, "B", "C");

type BoolForSomeReason = boolean;
type TwoStringsReturnNum = (val1: string, val2: string) => number;

const fun: TwoStringsReturnNum = (val1, val2) => { //This is a function expression
    return val1.length + val2.length;
}

type BoolOrString = boolean | string;

let bOrS: BoolOrString = "";
bOrS = true;

type Yes = "yes";
let y: Yes;

y ="yes";

type SomeObject = {
    name: string;
    age: number;
    active: boolean;
}

let obj: SomeObject={
    name: "jack",
    active: true,
    age: 24
}

let defaultState = {
    title: "",
    active: true,
    count: 0
};

type DefaultState = typeof defaultState; //you can make a type AFTER you use it lines 76-82

type DefaultStateTitle = DefaultState["title"] //pulls the "title" TYPE in defaultState

type KeyOfDefaultState = keyof DefaultState; //list of the keys, only works on objects

let k: KeyOfDefaultState; //so k can be a title, active or count

type TypeOfDefaultStateProperty<T extends keyof DefaultState> = DefaultState[T];

type CountType = TypeOfDefaultStateProperty<"count">;

type StringArray = string[];
type StringAndNumber = [string, number];

let sa: StringArray = [];
sa.push("");
sa.concat("hey");

let san: StringAndNumber = [ "string", 12];
type FirstMember = StringAndNumber[0];



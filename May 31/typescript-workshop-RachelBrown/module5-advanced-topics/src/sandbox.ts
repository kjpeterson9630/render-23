class Shape {
    name: string = "";
}

class Circle extends Shape {
    radius: number = 0;
}

let circle: Circle = new Circle();
let shape: Shape = new Shape();

let shape2: Shape;
shape2 = circle

//circle = shape; DOESN'T WORK

type DrawShapeFn= (item: Shape) => void;
type DrawCircleFn = (item: Circle) => void;

let drawShape: DrawShapeFn = (_: Shape) => {}
let drawCircle: DrawCircleFn = (_: Circle) => {}

//drawShape = drawCircle; //DOESN'T WORK 

drawCircle = drawShape;

type Useless = Array<number> extends object ? {val: true} : never; //conditional type

type IsArray<T> = T extends Array<unknown> ? true : false;

type A = IsArray<number>

type ArrayOfWhat<T> = T extends Array<infer U> ? U : never; // "Ungoldy powerful" - instructor 🤔

type GetReturnType<T extends (...args: any) => any> = T extends (...args: any[]) => infer U ? U: never;

const fn = () => 12;

// type x = GetReturnType<typeof fn>;


type CorrectLifeChoices = {
    conferece: 'RenderATL',
    city: "Atlanta",
    language: string
};

type ABC = {
    [S in keyof CorrectLifeChoices as `get${Capitalize<S>}`]:() => CorrectLifeChoices[S];
};

type ThingsThatMatter = {
    [S in keyof CorrectLifeChoices]: CorrectLifeChoices[S]
}[keyof CorrectLifeChoices]

export default null;
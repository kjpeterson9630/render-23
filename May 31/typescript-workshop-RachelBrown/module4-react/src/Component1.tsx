import { FC } from "react" //FC = function component

type Props = {
  str: string;
  num: number
}


export const Component1: FC<Props> = (props) => {
  return (
    <div>
      <div>{props.str}</div>
      <div>{props.num}</div>
      <button onClick={props.handler}>Click me</button>
    </div>
  );
};


import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman"
import img0 from "./0.png";

it("smoke", function(){
  render(<Snowman />);
});

it("snowman start snapshot", function(){
  const { container } = render(<Snowman />);

  expect(container).toMatchSnapshot();
});

it("stops allowing guesses after max wrong guess", function(){
  const { container } = render(<Snowman />);

  const buttons ={
    z: container.querySelector("btn[key='z']"),
    y: container.querySelector("btn[key='y']"),
    x: container.querySelector("btn[key='x']"),
    w: container.querySelector("btn[key='w']"),
    v: container.querySelector("btn[key='v']"),
    u: container.querySelector("btn[key='u']"),
  }

  for(let button in buttons){
    fireEvent.click(buttons[button]);
  }

});
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
  const { container } = render(<Snowman words = {['apple']}/>);

  const buttons =[
    container.querySelector('button[value="z"]'),
    container.querySelector('button[value="y"]'),
    container.querySelector('button[value="x"]'),
    container.querySelector('button[value="w"]'),
    container.querySelector('button[value="v"]'),
    container.querySelector('button[value="u"]')
  ];

  for(let button of buttons){
    fireEvent.click(button);
  }

  expect(container.querySelector("button")).toEqual(null);

});

// it("gets random words other than apple", function(){
//   const { container } = render(<Snowman />);

//   expect({container})
// })
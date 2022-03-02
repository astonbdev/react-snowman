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

  const buttons = container.querySelectorAll("button");
});
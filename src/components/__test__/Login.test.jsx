import { render,screen } from "@testing-library/react"
import Login from "../pageComponents/Login"


test('checking component loaded', () => {
    render(<Login />);
    const header = screen.queryByText(/Login/);
    expect(header).toBeTruthy(); 
  });

test("checking email and password are empty", () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");

  expect(emailInput.value).toBe("");
  expect(passwordInput.value).toBe("");
});


// test("checking email and password are empty", () => {
//   render(<Login />);
//   const emailInput = screen.getByPlaceholderText("Email");
//   const passwordInput = screen.getByPlaceholderText("Password");

//   expect(emailInput.value).toBe("");
//   expect(passwordInput.value).toBe("");
// });


// test("checking email and password are empty",()=>{
//     render(<Login/>)
//     expect(screen.queryAllByPlaceholderText("Email")).toHaveValue("");
//     expect(screen.queryAllByPlaceholderText("Password")).toHaveValue("");
// })

// import { render, screen } from "@testing-library/react";
// // import '@testing-library/jest-dom/extend-expect';


// import Login from "../pageComponents/Login";

// test('checking component loaded', () => {
//   render(<Login />);
//   expect(screen.queryByText(/Login/)).toBeInThe;
// });

// test("checking email and password are empty", () => {
//   render(<Login />);
//   const emailInput = screen.getByPlaceholderText("Email");
//   const passwordInput = screen.getByPlaceholderText("Password");

//   expect(emailInput.value).toBe("");
//   expect(passwordInput.value).toBe("");
// });

import { render, screen } from "@testing-library/react"
import Todo from "../todo"
import userEvent from "@testing-library/user-event"
test('Check state of todo-input', () => {
    //arrange
    render(<Todo/>)
    const todoInput = screen.getByLabelText('todo-input')
    const button = screen.getByRole('button')
    //act
    userEvent.type(todoInput, 'html')
    userEvent.click(button)
    //assert
    expect(todoInput).toHaveValue('')
})
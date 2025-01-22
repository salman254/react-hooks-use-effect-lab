import React from "react";
import { render, act } from "@testing-library/react";
import Question from "../components/Question";

// Mock question data
const question = {
  id: 1,
  prompt: "What is your name?",
  answers: ["Alice", "Bob", "Charlie", "David"],
  correctIndex: 0,
};

test("calls onAnswered after 10 seconds", () => {
  jest.useFakeTimers(); // Use fake timers
  const onAnswered = jest.fn(); // Mock the onAnswered callback

  // Render the Question component
  render(<Question question={question} onAnswered={onAnswered} />);

  // Fast-forward time by 10 seconds
  act(() => {
    jest.advanceTimersByTime(10000);
  });

  // Expect onAnswered to have been called with false
  expect(onAnswered).toHaveBeenCalledWith(false);
});
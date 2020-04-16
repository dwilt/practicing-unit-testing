import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Person from "./Person";

describe(`Person`, () => {
  const name = "Daniel Andrew Wilt";
  const age = 33;
  const friends = [
    {
      name: "Jake Simon Repash",
      age: 34,
    },
    {
      name: "Joseph Anthony Yuhas Jr",
      age: 32,
    },
  ];

  beforeEach(() => {
    render(<Person {...{ name, age, friends }} />);
  });

  it(`should render the person's name`, () => {
    expect(screen.queryByText(`Name: ${name}`)).toBeInTheDocument();
  });

  describe(`age`, () => {
    it(`should not be visible by default`, () => {
      expect(screen.queryByText("Age:")).not.toBeInTheDocument();
    });

    describe(`toggle age button`, () => {
      it(`should say "show my age" by default`, () => {
        expect(screen.queryByText("Show my age")).toBeInTheDocument();
      });

      it(`should toggle showing the age`, () => {
        fireEvent.click(screen.queryByText("Show my age"));

        expect(screen.queryByText("Show my age")).not.toBeInTheDocument();
        expect(screen.queryByText("Hide my age")).toBeInTheDocument();
        expect(screen.queryByText(`Age: ${age}`)).toBeInTheDocument();

        fireEvent.click(screen.queryByText("Hide my age"));

        expect(screen.queryByText("Hide my age")).not.toBeInTheDocument();
        expect(screen.queryByText("Show my age")).toBeInTheDocument();

        expect(screen.queryByText("Age:")).not.toBeInTheDocument();
      });
    });
  });

  describe(`friends`, () => {
    it(`shows a list of the person's friends`, () => {
      expect(
        screen.queryByText(`${friends[0].name}, ${friends[0].age}`)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(`${friends[1].name}, ${friends[1].age}`)
      ).toBeInTheDocument();
    });
  });

  describe(`interesting info`, () => {
    it(`should show the total age of the person and all their friends`, () => {
      expect(screen.queryByText(/Total age of/).textContent).toBe(
        `Total age of ${name}'s and friends' combined: 99`
      );
    });

    it(`should show the shared letters of the person's and all their friends' names`, () => {
      expect(screen.queryByText(/Shared letters between/).textContent).toBe(
        `Shared letters between ${name} and their friends' names: aner`
      );
    });
  });
});

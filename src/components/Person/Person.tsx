import React, { useState } from "react";
import { addNumbers } from "../../utilities/math";
import { getMatchingLetters } from "../../utilities/strings";

interface Person {
  name: string;
  age: number;
}

interface PersonProps extends Person {
  friends: Person[];
}

const Person: React.FC<PersonProps> = ({ name, age, friends }) => {
  const [showingAge, toggleShowingAge] = useState(false);
  const totalAge = addNumbers(age, ...friends.map(({ age }) => age));
  const sharedLetters = getMatchingLetters(
    name,
    ...friends.map(({ name }) => name)
  );

  return (
    <div>
      <div data-testid="name">Name: {name}</div>
      {showingAge && <div data-testid="age">Age: {age}</div>}
      <button
        data-testid="toggle-age-button"
        onClick={() => toggleShowingAge(!showingAge)}
      >
        {showingAge ? "Hide my age" : "Show my age"}
      </button>
      <ol>
        {friends.map((friend, i) => (
          <li key={i}>
            {friend.name}, {friend.age}
          </li>
        ))}
      </ol>
      <section>
        <h1>Interesting Info</h1>
        <p>
          Total age of {name}'s and friends' combined: {totalAge}
        </p>
        <p>
          Shared letters between {name} and their friends' names:{" "}
          {...sharedLetters}
        </p>
      </section>
    </div>
  );
};

export default Person;

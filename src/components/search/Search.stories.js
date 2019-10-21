import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Search from "./Search";

storiesOf("Search", module)
  .add("default", () => {
    const [value, setValue] = useState("");
    return (
      <Search
        value={value}
        previousSearchValue=""
        onChange={e => setValue(e.target.value)}
        onClose={() => setValue("")}
      />
    );
  })
  .add("previous search value", () => {
    const [value, setValue] = useState("Ergo, the search persists...");
    return (
      <Search
        value={value}
        previousSearchValue="Ergo, the search persists..."
        onChange={e => setValue(e.target.value)}
        onBack={() => setValue("")}
        onClose={() => setValue("")}
      />
    );
  });

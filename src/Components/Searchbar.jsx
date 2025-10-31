import React, { useState } from "react";
import { Form, FormControl, InputGroup, Dropdown, Button } from "react-bootstrap";
//import SearchBar from "../Component/SearchBar";

const Searchbar = () => {
  const [category, setCategory] = useState("TV SHOW");

  return (
    <Form className="d-flex justify-content-center mt-5">
      <InputGroup style={{ width: "80%", backgroundColor: "#1b3148", borderRadius: "5px", marginTop:"100px  " }}>
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            style={{
              backgroundColor: "#1b3148",
              border: "none",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {category}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCategory("TV SHOW")}>TV SHOW</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("MOVIE")}>MOVIE</Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("CELEBRITY")}>CELEBRITY</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <FormControl
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
          style={{
            backgroundColor: "#1b3148",
            color: "white",
            border: "none",
          }}
        />

        <Button
          variant="dark"
          style={{
            backgroundColor: "#1b3148",
            border: "none",
          }}
        >
          🔍
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
import * as style from "./styles";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [searchCards, setSearchCards] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      searchCards,
    };

    setSearchCards("");

    console.log(data);
  };

  return (
    <style.Container>
      <style.Header>
        <style.Form onSubmit={handleSubmit}>
          <style.Input
            className="search-box"
            type="search"
            name={searchCards}
            value={searchCards}
            placeholder="Pesquisar. Ex: Cachorro d'água pegajoso"
            onChange={(e) => setSearchCards(e.target.value)}
          />
          {/* <style.Input type="submit" value="IR" /> */}
        </style.Form>
      </style.Header>

      <style.Body>
        <style.ul>
          <style.li
            onClick={() => navigate("/discover")}
            className="li-style"
          />
          <style.h2>Discover</style.h2>
        </style.ul>
        <style.ul>
          <style.li
            onClick={() => navigate("/listcards")}
            className="li-style"
          />
          <style.h2>All Cards</style.h2>
        </style.ul>
        <style.ul>
          <style.li
            onClick={() => navigate("/developers")}
            className="li-style"
          />
          <style.h2>Developers</style.h2>
        </style.ul>
      </style.Body>
    </style.Container>
  );
};

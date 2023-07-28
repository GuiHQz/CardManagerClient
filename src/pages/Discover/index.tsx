import { useState } from "react";
import * as style from "./styles";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

export const Discover = () => {
  const [cardId] = useState<string>("123");
  const [cardName, setCardName] = useState<string>("");
  const [cardPower, setCardPower] = useState<string>("");
  const [cardResistence, setCardResistence] = useState<string>("");

  return (
    <style.Container>
      <h1 className="page-title">Descubra novas cartas</h1>
      <style.StatsForm>
        <div className="box-form">
          <label>
            <h2>
              <span>ID:</span> #{cardId}
            </h2>
          </label>

          <Input
            type="text"
            name="cardName"
            value={cardName}
            title="Nome da carta"
            placeholder="Águia dourada brilhante"
            onChange={(e) => setCardName(e.target.value)}
          />
          <div className="twin-box">
            <Input
              type="number"
              name="cardPower"
              value={cardPower}
              title="Poder"
              placeholder="Ex: 3"
              onChange={(e) => setCardPower(e.target.value)}
            />

            <Input
              type="number"
              name="cardResistence"
              value={cardResistence}
              title="Resistência"
              placeholder="Ex: 2"
              onChange={(e) => setCardResistence(e.target.value)}
            />
          </div>
          <div className="twin-box">
            <input type="submit" value="DELETE" />
            <input type="submit" value="UPDATE" />
          </div>
        </div>
      </style.StatsForm>
      <style.CardRender>
        <Card />
      </style.CardRender>
    </style.Container>
  );
};

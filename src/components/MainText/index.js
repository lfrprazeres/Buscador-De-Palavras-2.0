import React from "react";
import { TextArea } from "./style";

export default function MainText(props) {
  const { text, setText } = props;
  return (
    <TextArea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Digite o Texto a ser analisado aqui"
    />
  );
}

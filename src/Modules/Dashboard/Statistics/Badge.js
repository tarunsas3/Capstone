import React from "react";
import "./Badge.css";

function Badge({
  content,
  clean = false,
  glow = false,
  paid = false,
  late = false,
}) {
  return (
    <div className="Div" clean={clean} glow={glow} paid={paid} late={late}>
      {content}
    </div>
  );
}

export default Badge;

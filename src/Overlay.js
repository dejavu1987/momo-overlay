import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Overlay({ data: { topic, chapter, section } }) {
  const [switching, setSwitching] = useState(true);
  useEffect(() => {
    setSwitching(true);
    setTimeout(() => {
      setSwitching(false);
    }, 5000);
  }, [topic, chapter, section]);
  return (
    <div className={classNames("overlay", switching && "switching")}>
      <h1>{topic}</h1>
      <h2>{chapter}</h2>
      <h3>{section}</h3>
    </div>
  );
}

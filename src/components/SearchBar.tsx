import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../config/context";

function SearchBar() {
  const [value, setValue] = useState<string>("");
  const { ws } = useContext(Context);
  const [result, setResult] = useState<any[]>([]);

  const callback = useCallback((event: MessageEvent<any>) => {
    setResult((result) => [...result, JSON.parse(event.data)]);
  }, []);

  useEffect(() => {
    if (ws) {
      ws.addEventListener("message", callback);
    }

    return () => {
      ws?.removeEventListener("message", callback);
    };
  }, [callback]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setResult([]);
          ws?.send(e.target.value);
        }}
      />
      {result.length !== 0 &&
        result.map((item, index) => <div key={index}>{item.title}</div>)}
    </div>
  );
}

export default SearchBar;

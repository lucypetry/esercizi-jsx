import React, { useEffect, useRef } from "react";
export default function FocusableInput() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} type="text" placeholder="automatic focus" />;
}
export function FirstMountEffect() {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      console.log("Componente montato per la prima volta");
      mountedRef.current = true;
    }
  }, []);
  return <div>Controlla la console per il messaggio</div>;
}

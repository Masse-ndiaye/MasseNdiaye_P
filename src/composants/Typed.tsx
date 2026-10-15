import { useEffect } from "react";
import Typed from "typed.js";

export default function MyComponent() {
  useEffect(() => {
    const typed4 = new Typed("#typed4", {
      strings: ["Developpeur Backend", "Design API", "Developpeur Mobile", "Devops" ,"Developpeur Full-Stack"],
      typeSpeed: 20,
      backSpeed: 100,
      attr: "",
      bindInputFocusEvents: true,
      loop: true,
    });

    return () => {
      typed4.destroy();
    };
  }, []);

  return <span id="typed4"  className="  " />;
}

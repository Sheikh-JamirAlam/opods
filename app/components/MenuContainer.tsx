"use client";

import { useAnimate, stagger, Segment } from "motion/react";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: Segment[] = isOpen
      ? [
          ["nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }],
          ["li", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05), at: "-0.1" }],
        ]
      : [
          ["li", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }), at: "<" }],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      ["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      ["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
      ...menuAnimations,
    ]);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return scope;
}

export default function MenuContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <Menu setIsOpen={setIsOpen} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}

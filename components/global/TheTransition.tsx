import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TheTransition = ({ children }: { children: any }) => {
  return (
    <TransitionGroup>
      <CSSTransition appear={true} timeout={500} classNames="message">
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TheTransition;

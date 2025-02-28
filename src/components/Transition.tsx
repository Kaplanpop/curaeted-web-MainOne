
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface TransitionProps {
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <TransitionGroup>
      <CSSTransition 
        key={location.pathname}
        timeout={400}
        classNames="page"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;

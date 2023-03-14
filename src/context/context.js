import React, {useContext } from 'react'



const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

  const buttonMouseLeave = (e) => {
    e.target.style.background = "var(--clr-bg-button)";
    e.target.style.setProperty("--border-color", "none");
  };

  const buttonAnimation = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(233, 231, 220, 0.7) 1px, rgba(48, 48, 48, 0.7))`;
    e.target.style.setProperty("--border-color", `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(48, 48, 48, 0.7),rgba(48, 48, 48, 0) )`);
  };

  return (
    <GlobalContext.Provider value={{
      buttonAnimation,
      buttonMouseLeave
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

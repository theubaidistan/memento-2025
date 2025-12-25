import { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
  // Update page title with win count
  useEffect(() => {
    document.title = `Progress: ${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type Player = {
    name: string;
    image: string;
    jerseyNumber: number;
    position: string;
    height: number;
    weight: number;
    nationality: string;
    flagImage: string;
    starter: string;
    appearances: number;
    minutesPlayed: number;
    goals: number;
    assists: number;
    cleanSheets: number;
    saves: number;
};

type PlayerContextType = {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  addPlayer: (player: Player) => void;
  editPlayer: (index: number, updatedPlayer: Player) => void;
  deletePlayer: (index: number) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

type PlayerContextProviderProps = {
  children: ReactNode;
};

export const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const editPlayer = (index: number, updatedPlayer: Player) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers[index] = updatedPlayer;
      return newPlayers;
    });
  };

  const deletePlayer = (index: number) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers.splice(index, 1);
      return newPlayers;
    });
  };

  return (
    <PlayerContext.Provider value={{ players, setPlayers, addPlayer, editPlayer, deletePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayerContext must be used within a PlayerContextProvider');
  }
  return context;
};
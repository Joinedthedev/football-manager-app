import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

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
  Id: string;
};

type PlayerContextType = {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  isRosterImported: boolean;
  setIsRosterImported: Dispatch<SetStateAction<boolean>>;
  isEditPlayerModalIsOpen: boolean;
  setIsEditPlayerModalIsOpen: Dispatch<SetStateAction<boolean>>;
  isEditPlayerDetailsModalOpen: boolean;
  setIsEditPlayerDetailsModalOpen: Dispatch<SetStateAction<boolean>>;

  isDeletePlayerModalIsOpen: boolean;
  setIsDeletePlayerModalIsOpen: Dispatch<SetStateAction<boolean>>;
  teamName: string;
  setTeamName: Dispatch<SetStateAction<string>>;
  editTeamNameMode: boolean;
  setEditTeamNameMode: Dispatch<SetStateAction<boolean>>;
  isHovering: boolean;
  setIsHovering: Dispatch<SetStateAction<boolean>>;
  teamNameHasBeenEdited: boolean;
  setTeamNameHasBeenEdited: Dispatch<SetStateAction<boolean>>;
  isFile: File | null;
  setIsFile: Dispatch<SetStateAction<File | null>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  editPlayer: (playerId: string, updatedPlayer: Player) => void;
  deletePlayer: (playerId: string) =>void;
  playerToEditOrDelete: string;
  setPlayerToEditOrDelete: React.Dispatch<React.SetStateAction<string>>;

};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

type PlayerContextProviderProps = {
  children: ReactNode;
};

export const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({
  children,
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isRosterImported, setIsRosterImported] = useState<boolean>(false);
  const [isEditPlayerModalIsOpen, setIsEditPlayerModalIsOpen] =
    useState<boolean>(false);
    const [isEditPlayerDetailsModalOpen, setIsEditPlayerDetailsModalOpen] =
    useState<boolean>(false);
  const [isDeletePlayerModalIsOpen, setIsDeletePlayerModalIsOpen] =
    useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("My Team");
  const [editTeamNameMode, setEditTeamNameMode] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [teamNameHasBeenEdited, setTeamNameHasBeenEdited] =
    useState<boolean>(false);
  const [isFile, setIsFile] = useState<File | null>(null);
  const [playerToEditOrDelete, setPlayerToEditOrDelete] = useState<string>("");

 

  const editPlayer = (playerId: string, updatedPlayer: Player) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => (player.Id === playerId ? { ...player, ...updatedPlayer } : player))
    );
  };

  const deletePlayer = (playerId: string) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.Id !== playerId));
  };

  return (
    <PlayerContext.Provider
      value={{
        players,
        setPlayers,
        isRosterImported,
        setIsRosterImported,
        isEditPlayerModalIsOpen,
        setIsEditPlayerModalIsOpen,
        isDeletePlayerModalIsOpen,
        setIsDeletePlayerModalIsOpen,
        search,
        setSearch,
        editPlayer,
        deletePlayer,
        teamName,
        setTeamName,
        editTeamNameMode,
        setEditTeamNameMode,
        teamNameHasBeenEdited,
        setTeamNameHasBeenEdited,
        isHovering,
        setIsHovering,
        isFile,
        setIsFile,
        playerToEditOrDelete,
        setPlayerToEditOrDelete,
        isEditPlayerDetailsModalOpen,
        setIsEditPlayerDetailsModalOpen,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider"
    );
  }
  return context;
};

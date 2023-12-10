import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
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
  deletePlayer: (playerId: string) => void;
  playerToEditOrDelete: string;
  setPlayerToEditOrDelete: React.Dispatch<React.SetStateAction<string>>;
  numberOfGoalkeepers: number | undefined;
  setNumberOfGoalKeepers: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;

  numberOfMidfielders: number | undefined;
  setNumberOfMidfielders: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;

  numberOfFowards: number | undefined;
  setNumberOfFowards: React.Dispatch<React.SetStateAction<number | undefined>>;

  numberOfDefenders: number | undefined;
  setNumberOfDefenders: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;

  numberOfStarters: number | undefined;
  setNumberOfStarters: React.Dispatch<React.SetStateAction<number | undefined>>;
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
  const [numberOfGoalkeepers, setNumberOfGoalKeepers] = useState<
    number | undefined
  >();
  const [numberOfMidfielders, setNumberOfMidfielders] = useState<
    number | undefined
  >();
  const [numberOfDefenders, setNumberOfDefenders] = useState<
    number | undefined
  >();
  const [numberOfFowards, setNumberOfFowards] = useState<number | undefined>();
  const [numberOfStarters, setNumberOfStarters] = useState<
    number | undefined
  >();

  const editPlayer = (playerId: string, updatedPlayer: Player) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.Id === playerId ? { ...player, ...updatedPlayer } : player
      )
    );
  };

  const deletePlayer = (playerId: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.Id !== playerId)
    );
  };


  const getContextStarters = (players: Player[]): Player[] => {
    return players.filter((player) => player.starter === "Yes");
  };

 
  const getContextStarterDefenders = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Defender" && player.starter ==="Yes");
  };

  const getContextStarterFowards = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Forward" && player.starter ==="Yes");
  };

  const getContextStarterMidfielders = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Midfielder" && player.starter ==="Yes");
  };

  const getContextStarterGoalkeepers = (players: Player[]): Player[] => {
    return players.filter((player) => player.position === "Goalkeeper" && player.starter ==="Yes");
  };

  
  useEffect(() => {
    const totalContextGoalKeepers = getContextStarterGoalkeepers(players).length;
    const totalContextMidfielders = getContextStarterMidfielders(players).length;
    const totalContextDefenders = getContextStarterDefenders(players).length;
    const totalContextFowards = getContextStarterFowards(players).length;
    const totalContextStarters = getContextStarters(players).length;
    setNumberOfGoalKeepers(totalContextGoalKeepers);
    setNumberOfDefenders(totalContextDefenders);
    setNumberOfMidfielders(totalContextMidfielders);
    setNumberOfStarters(totalContextStarters);
    setNumberOfFowards(totalContextFowards);

    console.log(totalContextDefenders)
  }, [players]);

 
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
        numberOfGoalkeepers,
        setNumberOfGoalKeepers,
        numberOfMidfielders,
        setNumberOfMidfielders,
        numberOfDefenders,
        setNumberOfDefenders,
        numberOfFowards,
        setNumberOfFowards,
        numberOfStarters,
        setNumberOfStarters,
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

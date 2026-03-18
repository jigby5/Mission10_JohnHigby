export type Team = {
    teamId: number;
    teamName: string;
  };
  
  export type Bowler = {
    bowlerId: number;
    bowlerFirstName: string;
    bowlerMiddleInit?: string | null; // Optional/Null because of the middle initial
    bowlerLastName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamId: number;
    team: Team; // This matches the nested object structure
  };
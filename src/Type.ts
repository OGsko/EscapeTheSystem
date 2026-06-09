export interface Rooms {
    id: number;
    roomName: string;
    roomPath: string;
    unsolvedInstruction: string;
    solvedInstruction:string;
    hint:string;
    unsolvedImage:string;
    solvedImage: string;
    itemToSolve: number;
    itemToadd: number | null
}

export interface Items {
    id: number;
    item: string;
    description: string;
    image: string;
}
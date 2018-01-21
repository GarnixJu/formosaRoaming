export interface User {
    id: string;
    name: string;
    email: string;
    pwd?: string;
    tripList: Trip[];
    visited: Place[];
}

export interface Trip {
    userList: User[];
    chart: any;
    days: number;
    startdate: Date;
    enddate: Date;
    commentList: Comment[];
}

export interface Comment {
    userId: string;
    userName?: string;
    message: string;
    time: Date;
}

export interface Place {
    name: string;
    lat?: number;
    long?: number;
}




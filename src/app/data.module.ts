export interface User {
    id: string;
    name: string;
    email: string;
    pwd?: string;
    tripList: Trip[];
    visited: Place[];
}

export interface Trip {
    id: string;
    title: string;
    userList: User[];
    placeList: Place[];
    chart: any;
    days: number;
    startdate: Date;
    enddate: Date;
    commentList: Comment[];
    inPlanning: boolean;
}

export interface Comment {
    tripId: string;
    userId: string;
    userName?: string;
    message: string;
    time: Date;
    unread: boolean;
}

export interface Place {
    name: string;
    stamp: string;
    lat?: number;
    long?: number;
}

export interface Post {
    title: string;
    imageURI: string;
    duration: string;
    unread_comment: number;
}




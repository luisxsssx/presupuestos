export interface AuthResponse {
    body: {
        username: Username;
        accessToken: string;
        refreshToken: string;
    };
}
export interface AuthResponseError {
    body: {
        error: string;
    }
}

export interface Username {
    _id: string;
    username: string;
    lastname: string;
    firstname: string;
    country: string;
}
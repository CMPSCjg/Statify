export interface IConfiguration {
    spotifyAuthenticationUrl: string
    applicationId: string
    authenticationSuccessfulRedirectUrl: string
    applicationScopes: string[]
}

export const configuration: IConfiguration = {
    spotifyAuthenticationUrl: 'https://accounts.spotify.com/authorize',
    applicationId: '063fa9df8178478d8492b5f9329484ef',
    authenticationSuccessfulRedirectUrl: '/results',
    applicationScopes: [
        "user-read-recently-played",
        "playlist-read-collaborative",
        "user-top-read",
        "user-follow-read",
        "user-read-currently-playing",
        "user-library-read"
    ]
}
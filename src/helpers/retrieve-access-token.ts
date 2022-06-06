
export function retrieveAccessToken(): string {

    // Upon return from Spotify's authorization page, it will set the access_token on window.location.hash
    // For example, 
    //      #access_token=BQBQ8mmtSZx4rDx3R4kjDJwxOjnoBpuzVOJUt2FIfLzJHmzSqtjGAU39DL5By58RW4pnWvU7c1dVgB7VTfP4SB9N8uH1dH6COUPy
    //      PFxOxWcuPwddlGp6HN7_AyWoQpIybuWCRdiyCwdrf-KeZXVBKEKCKq5lwqdlEBFXplnbg15AjL0&token_type=Bearer&expires_in=3600
    let accessTokenHash = window.location.hash
        .substring(1)
        .split("&")[0]

    //      access_token=BQBQ8mmtSZx4rDx3R4kjDJwxOjnoBpuzVOJUt2FIfLzJHmzSqtjGAU39DL5By58RW4pnWvU7c1dVgB7VTfP4SB9N8uH1dH6COUPy
    //      PFxOxWcuPwddlGp6HN7_AyWoQpIybuWCRdiyCwdrf-KeZXVBKEKCKq5lwqdlEBFXplnbg15AjL0
    accessTokenHash = decodeURIComponent(accessTokenHash.split("=")[1])

    //      BQBQ8mmtSZx4rDx3R4kjDJwxOjnoBpuzVOJUt2FIfLzJHmzSqtjGAU39DL5By58RW4pnWvU7c1dVgB7VTfP4SB9N8uH1dH6COUPyPFxOxWcuPwddlGp6HN7_AyWoQpIybuWCRdiyCwdrf-KeZXVBKEKCKq5lwqdlEBFXplnbg15AjL0
    return accessTokenHash

}
import axios from 'axios';
import logger from "jet-logger";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const tokenUrl = process.env.SPOTIFY_TOKEN_URL;

let accessToken: string;
let tokenExpirationTime: number;
function getEncodedCredentials(clientId: string, clientSecret: string): string {
    if (!clientId || !clientSecret) {
        throw new Error('Client ID or Client Secret is not set.');
    }
    return Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
}

async function requestNewAccessToken(): Promise<string> {
    if (!client_id || !client_secret || !tokenUrl) {
        throw new Error('Client ID or Client Secret is undefined.');
    }

    const encodedCredentials = getEncodedCredentials(client_id, client_secret);

    try {
        const response = await axios.post(tokenUrl, 'grant_type=client_credentials', {
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const {access_token, expires_in} = response.data;
        accessToken = access_token;
        tokenExpirationTime = new Date().getTime() + expires_in * 1000;
        return accessToken;
    }
    catch (error) {
        logger.err((`Error obteniendo el token de acceso de Spotify: ${error}`));
        throw new Error('Error al obtener el token de acceso de Spotify');
    }
}

export async function getAccessToken(): Promise<string> {
    if (!accessToken || new Date().getTime() >= tokenExpirationTime) {
        return await requestNewAccessToken();
    }
    else {
        return accessToken;
    }
}

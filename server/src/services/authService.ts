import axios from 'axios';
import logger from "jet-logger";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const tokenUrl = process.env.SPOTIFY_TOKEN_URL;

function getEncodedCredentials(clientId: string, clientSecret: string): string {
    if (!clientId || !clientSecret) {
        throw new Error('Client ID or Client Secret is not set.');
    }
    return Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
}

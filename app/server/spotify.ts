"use server";

import axios from "axios";
import { getToken } from "./data";

export const getPlaybackState = async (userID: string) => {
    const token = await getToken(userID);

    const res = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
};

export const getPlaybackHistory = async (userID: string, limit: number) => {
    const token = await getToken(userID);

    const res = await axios.get(
        `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};

export const getAvailableDevices = async (userID: string) => {
    const token = await getToken(userID);

    const res = await axios.get(
        "https://api.spotify.com/v1/me/player/devices",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data.devices;
};

export const getQueue = async (userID: string) => {
    const token = await getToken(userID);

    const res = await axios.get("https://api.spotify.com/v1/me/player/queue", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
};

export const setPlaybackVolume = async (userID: string, volume: number) => {
    const token = await getToken(userID);

    await axios.put("https://api.spotify.com/v1/me/player/volume", null, {
        params: {
            volume_percent: volume,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return;
};

export const addQueue = async (userID: string, trackUri: string) => {
    const token = await getToken(userID);

    await axios.post("https://api.spotify.com/v1/me/player/queue", null, {
        params: {
            uri: trackUri,
        },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return;
};

export const getSearchTrack = async (userID: string, input: string) => {
    const token = await getToken(userID);

    const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${input}&type=track&limit=3`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data.tracks.items;
};

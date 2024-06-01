import axios, { AxiosResponse } from "axios";

type ServerMetadata = {
    id: number;
    name: string;
    url: string;
};

type ServerFoundStatus = "waiting_for_player" | "on_match" | "cleaning_battle";
type ServerErrorStatus = "error_server" | "error_client" | "not_found";
type ServerStatus = ServerErrorStatus | ServerFoundStatus;

type CheckServerResponse = {
    status: ServerStatus;
    time: number;
    message: string;
};

/**
 * Get list server stored from local storage.
 * @returns status of corrupted list server data and data list server.
 */
function getListServer(): { isCorrupted: boolean; list: ServerMetadata[] } {
    const rawServerList = localStorage.getItem("serverList");
    if (!rawServerList) {
        return { isCorrupted: false, list: [] };
    }
    try {
        const serverList: ServerMetadata[] = JSON.parse(rawServerList);
        return { isCorrupted: false, list: serverList };
    } catch {
        alert(
            "The server list has been corrupted. Must remove all with button Delete List."
        );
        return { isCorrupted: true, list: [] };
    }
}

/**
 * Adding server to list server local storage.
 * @param data Metadata of server
 */
function addServerToList(data: ServerMetadata) {
    const { list } = getListServer();

    list.push(data);

    localStorage.setItem("serverList", JSON.stringify(list));
}

/**
 * Checking specific server status depend on url.
 * @param url url of server
 * @returns Get status, message, time elapsed of match server.
 */
async function checkServerStatus(url: string): Promise<CheckServerResponse> {
    let attempt = 0;
    let req: AxiosResponse<CheckServerResponse, any>;
    do {
        attempt++;
        req = await axios.get<CheckServerResponse>(`${url}/ping`);
    } while (attempt > 3 || req.status === 200);
    switch (req.status) {
        case 404:
            return {
                status: "not_found",
                message:
                    "Your server is not found. Please activated with guide on eternal-conflict-svr",
                time: 0,
            };
            break;
        case 200:
            return req.data;
            break;
        default:
            return {
                status: "error_server",
                message: req.data.message,
                time: 0,
            };
            break;
    }
}

/**
 * Get last connected server if user disconnected from match.
 * @returns the last of connected server or null
 */
function getLastConnectedServer() {
    return localStorage.getItem("connectedServer");
}

export {
    getListServer,
    addServerToList,
    checkServerStatus,
    getLastConnectedServer,
};

type REACT_APP_ENVIRONMENT = "local" | "development" | "production";

export type Env = {
    isProductionBuild: boolean;
    publicUrl: string;

    name: REACT_APP_ENVIRONMENT;
    buildNumber: string;
    apiBaseUrl?: string;
    host: string;
    subdirectory?: string;
    appRoot: string;
}

const subdirectory = process.env.REACT_APP_SUBDIRECTORY;
const host = `${window.location.protocol}//${window.location.host}`;
const appRoot = `${host}${subdirectory}`;

export const EnvVars: Env = {
    isProductionBuild: process.env.NODE_ENV === "production",
    publicUrl: process.env.PUBLIC_URL,

    name: process.env.REACT_APP_ENVIRONMENT as REACT_APP_ENVIRONMENT,
    buildNumber: process.env.REACT_APP_ENVIRONMENT || "local",
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL,

    host,
    subdirectory,
    appRoot,

    
} 
require('dotenv').config();

export const GetConfigFileName = (): string => {
    let rtn = "local";
    if (process.env) {
        let environment: number = parseInt(process.env.environment ?? "0");
        switch (environment) {
            case 1: {
                rtn = "local";
            } break;
            case 2: {
                rtn = "local-prod";
            } break;
            case 3: {
                rtn = "dev";
            } break;
            case 4: {
                rtn = "tst";
            } break;
            case 5: {
                rtn = "prod";
            } break;
            case 6: {
                rtn = "local-tst";
            } break;
        }
    }
    return rtn;
}

export const EnvConfigValues: EnvConfig = require('./environments/' + GetConfigFileName() + '.json');

export const GetEnvConfigByKey = (configKey: EnvConfigKey): string => {
    let rtn: string = "";
    switch (configKey) {
        case EnvConfigKey.DbUrl: {
            let db_server = EnvConfigValues.DbConfig.Server;
            let db_name = EnvConfigValues.DbConfig.Name;
            let db_usr_nm = EnvConfigValues.DbConfig.UserName;
            let db_usr_pwd = EnvConfigValues.DbConfig.Pwd;

            rtn = db_server.replace('<db_name>', db_name).replace('<username>', db_usr_nm).replace('<password>', db_usr_pwd);
        } break;
        case EnvConfigKey.Version: {
            rtn = process.env.version ?? '';
        } break;
    }
    return rtn;
}

export enum EnvConfigKey {
    None = 0,
    DbUrl = 1,
    Version = 2
}

export interface EnvConfig {
    CurrentEnvConfig: CurrentEnvConfig;
    AllowedCrossDomains: string[];
    DbConfig: DbConfig;
}

export interface CurrentEnvConfig {
    Port: number;
    EnvironmentName: string;
}

export interface DbConfig {
    Server: string;
    UserName: string;
    Pwd: string;
    Name: string;
}

import * as jsonconfig from "../config.json";

export const config = {
  port: jsonconfig.port ?? 8080
}

export const mangodb = {
  host: jsonconfig.mangodb.host ?? "127.0.0.1",
  port: jsonconfig.mangodb.port ?? 27017
}
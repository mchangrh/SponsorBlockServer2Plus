import * as net from "net";
import { mangodb } from "./config"

var client = new net.Socket();
client.connect(mangodb.port, mangodb.host, () => {
  console.log("connected to MangoDB at: " + mangodb.host + ":" + mangodb.port)
})

client.on("error", (error) => {
  // TODO: handle errors
  console.log("not connected to MangoDB")
})

export async function write(query: any): Promise<void> {
  client.write(query)
}

export async function read(query: any): Promise<undefined> {
  return undefined
}
import * as net from "net";
import { mangodb } from "../config.json"

const PORT = mangodb.port || 27017
const HOST = mangodb.host ?? "127.0.0.1"

var client = new net.Socket();
client.connect(PORT, HOST, () => {
  console.log("connected to MangoDB at: " + HOST + ":" + PORT)
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
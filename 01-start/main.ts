import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "chaika",
  version: "0.0.1",
});

server.tool(
  "fetch-weather",
  "Tool to fetch the weather of a city",
  {
    city: z.string().describe("City name"),
  },
  async ({ city }) => {
    return {
      content: [
        {
          type: "text",
          text: `El clima de ${city} es soleado`,
        },
      ],
    };
  }
);

// me quede en el minuto 57:57
const transport = new StdioServerTransport()
await server.connect(transport)
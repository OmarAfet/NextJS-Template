import fs from "fs";

export default function getCode(path: string) {
	return fs.readFileSync(`src/code/${path}`, "utf-8");
}

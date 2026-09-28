import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const names = ["tiam-levi", "loick", "geraldin", "jires", "augustin"];
const output = resolve("public/images/team/optimized");
await mkdir(output, { recursive: true });
let before = 0;
let after = 0;
for (const name of names) {
  const source = resolve("public/images/team", name + ".png");
  const target = resolve(output, name + ".webp");
  // Lossless re-encoding only: no crop, resize, retouch or logo modification.
  await sharp(source).webp({ lossless: true, effort: 6 }).toFile(target);
  const oldSize = (await stat(source)).size;
  const newSize = (await stat(target)).size;
  before += oldSize;
  after += newSize;
  console.log(name + ": " + oldSize + " → " + newSize + " bytes");
}
console.log("Total: " + before + " → " + after + " bytes; " + Math.round(100 * (1 - after / before)) + "% smaller. Originals preserved.");

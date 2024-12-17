import * as fs from "fs";
async function globalTeardown() {
  const storageStatePath = "storageState.json";
  if (fs.existsSync(storageStatePath)) {
    fs.unlinkSync(storageStatePath);
    console.log(`Deleted ${storageStatePath}`);
  }
}

export default globalTeardown;

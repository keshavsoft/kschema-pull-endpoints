import fs from "node:fs";
import path from "node:path";

const fileNameToCompare = "end-points.js";

function scoutTheRealmForTargetJsons(realmPath) {
    const allDiscoveries = fs.readdirSync(realmPath, { recursive: true });

    const targetGems = allDiscoveries.filter(discovery => {
        const itemName = path.basename(discovery);
        const parentFolderName = path.basename(path.dirname(discovery)).toLowerCase();
        return itemName === fileNameToCompare;
    });

    return targetGems.map(gem => path.join(realmPath, gem));
}

export { scoutTheRealmForTargetJsons };

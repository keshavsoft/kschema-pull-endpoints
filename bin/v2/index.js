import { scoutTheRealmForTargetJsons } from "./adventure/scout.js";
import { transmuteGemsWithWisdom } from "./adventure/blacksmith.js";

const startFunc = ({ toPath, sacredWisdom, inAction = "Crud" }) => {
    switch (inAction) {
        case "Crud":
            const hiddenGems = scoutTheRealmForTargetJsons(toPath);

            console.log("aaaaaaaa : ", hiddenGems);

            // transmuteGemsWithWisdom({ gems: hiddenGems, wisdom: sacredWisdom?.columnsConfig });

            break;
        default:
            break;
    }
    return true;
};

export default startFunc;
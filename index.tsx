import { Link } from "@components/Link";
import { Logger } from "@utils/Logger";
import definePlugin from "@utils/types";
import { Forms } from "@webpack/common";
const appIds = [
    "911790844204437504",
    "886578863147192350",
    "1020414178047041627",
    "1032800329332445255",
    "1066220978406953012",  // AMWin-RP
    "773825528921849856",   // apple-music-discord-rpc (Music)
    "979297966739300416",   // apple-music-discord-rpc (iTunes)
    "463151177836658699",   // PreMiD (YouTube Music)
    "802958833214423081"    // PreMiD (SoundCloud)
];
const logger = new Logger("RicherListening");
export default definePlugin({
    name: "RicherListening",
    description: "A simple plugin to allow other music clients to use popular Discord types such as \"Listening to\" type prefix to the user's rich presence when an applicable ID is found.",
    authors: [{
        id: 191621342473224192n,
        name: "cryptofyre",
    },
    {
        id: 546426958465073163n,
        name: "Core",
    },
    {
        id: 540970385802526731n,
        name: "Elc3r",
    }],
    start() {
        logger.debug("Plugin started");
    },
    patches: [
        {
            find: '="LocalActivityStore",',
            replacement: {
                match: /LOCAL_ACTIVITY_UPDATE:function\((\i)\)\{/,
                replace: "$&$self.patchActivity($1.activity);",
            }
        },
        {
            find: "}renderTimeBar(",
            replacement: {
                match: /renderTimeBar\((.{1,3})\){.{0,50}?let/,
                replace: "renderTimeBar($1){let"
            }
        }
    ],
    patchActivity(activity: { application_id: string; type: number; }) {
        if (appIds.includes(activity?.application_id)) {
            logger.debug("Found a matching application ID, correcting activity type");
            activity.type = 2; /* LISTENING type */
        }
    },
});

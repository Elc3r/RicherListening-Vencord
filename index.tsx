/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 OpenAsar
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Link } from "@components/Link";
import definePlugin from "@utils/types";
import { Forms } from "@webpack/common";
const appIds = [
    "911790844204437504",
    "886578863147192350",
    "1020414178047041627",
    "1032800329332445255",
    "1066220978406953012", // AMWin-RP
    "773825528921849856", // apple-music-discord-rpc (Music)
    "979297966739300416" // apple-music-discord-rpc (iTunes)
];
export default definePlugin({
    name: "RicherListening",
    description: "A simple plugin to allow other music clients to use popular Discord types such as \"Listening to\" type prefix to the user's rich presence when an applicable ID is found.",
    authors: [{
        id: 191621342473224192n,
        name: "cryptofyre",
    },{
        id: 540970385802526731n,
        name: "Elc3r",
    }],
    patches: [
        {
            find: '.displayName="LocalActivityStore"',
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
    patchActivity(activity: any) {
        if (appIds.includes(activity.application_id)) {
            activity.type = 2; /* LISTENING type */
        }
    },
});

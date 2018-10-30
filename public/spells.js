var Spells ={
    Arcane:[
         {
            name: "Acid Splash",
            type: "Spell",
            level: "Cantrip",
            traits: ["Acid", "Cantrip", "Evocation"],
            action:"Action",
            casting: ["Somatic", "Verbal"],
            range: "Range: 30 feet",
            target:"Target: One Creature or Object",
            description: "You splash a glob of acid. Make a ranged touch attack. If you hit, deal 1d4 acid damage plus 1 splash damage. On a critical success, the target also takes 1 persistant acid damage. The damage increases based on what spell level you can cast.",
            heightened:["3rd-Increase damage to 1d4+Mod and persistant damage increases to 2","5th-Increase damage to 2d4+Mod and persistant damage increases to 3","7th- Increase damage to 3d4+Mod and persistant damage increases to 4", "9th-Increase damage to 4d4+Mod and persistant damage increases to 5"]
        },
         {
            name: "Air Bubble",
            type:"Spell",
            level: "1",
            traits: ["Conjuration"],
            action:"Reaction",
            trigger:"Trigger: Creature in range enters an enviroment where it can't breath.",
            casting: ["Verbal"],
            range: "Range: 60 feet",
            area:"",
            target:"The triggering creature",
            duration:"Duration: 1 minute or until dismissed",
            description: "A bubble of pure air appears around the target's head, allowing it to breathe normally. The spell is dismissed as soon as the target returns to an enviroment where it can breath normally.",
            heightened:[""]
        }
    ],
    Divine:{
        spell:{
            name: "test1",
            traits: ["trait1", "trait2"],
            description: "description1"
        }
    },
    Occult:{
        spell:{
            name: "test1",
            traits: ["trait1", "trait2"],
            description: "description1"
        }
    },
    Primal:{
        spell:{
            name: "test1",
            traits: ["trait1", "trait2"],
            description: "description1"
        }
    }
}

module.exports = Spells
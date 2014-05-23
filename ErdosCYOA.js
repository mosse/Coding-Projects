var user = prompt("Paul Erdos knocks on your door. He carries with him two suitcases, both half empty. He requires food and lodging for the night, but reassures you that his brain is \"open\" for collaboration. Your mission is to gain the ultimate mathematical ego massage and procure an Erdos score of 1. Do you LODGE, BRIBE or STEAL FROM Paul Erdos?").toUpperCase();

switch(user) {
    case 'LODGE':
        var bed = prompt("Do you have a spare bed? YES/NO").toUpperCase;
        var cocoa = prompt("Do you have some hot cocoa? YES/NO").toUpperCase;
        if (house === 'YES' && cocoa === 'YES'){
            console.log("Nicely done. Paul is a man of generosity and wisdom. He graciously enters your abode. You spend the evening in a whirl of mathematical ecstacy and six months later are rewarded with a fine co-authorship. ERDOS 1 BABY!!!");
        }
        else{
            console.log("A brain like that needs its beauty sleep: a comfy bed and a nice cup of hot cocoa would do the trick. Better luck next time.");
        }
        break;
    case 'BRIBE':
        var talent = prompt("Is money the only talent you can offer? YES/NO").toUpperCase;
        var currency = prompt("Do you have any Venezualan shekels (now obsolete)? YES/NO").toUpperCase;
        if (talent === 'NO' || currency === 'YES'){
            console.log("Ok. Just this once, Paul will succumb.");
        }
        else{
            console.log("Paul has no time for such mundane concepts as money. Shame on you. He turns his back and leaves.");
        }
        break;
    case 'STEAL FROM':
        console.log("You snatch away a suitcase and scurry back inside your hovel, only to discover on opening that it is filled with Erdosian laundry.");
        break;
    default:
        console.log("Dammit man! If you can't follow simple instructions then your Erdos number must, by default, approach infinity!");
}
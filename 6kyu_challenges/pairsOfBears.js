// Codewars - Pairs of Bears
// You must check within string (s) to fid all of the mating pairs, and return a string containing only them. Line them up for inspection. Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs). 
// Return an array containing a string of only the mating pairs available. 
// e.g: 'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs) and true if the number is more than or equal to x, false if not: (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; 
// x will always be a positive integer, and s will never be empty

function bears(x, s) {
    let bears;
    if (s !== null) bears = (s.match(/8B|B8/gi) || ['']).join('')
    return bears.length >= x ? [bears, true] : [bears, false];
}

module.exports = bears;
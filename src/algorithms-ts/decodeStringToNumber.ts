const decodeStringToNumber = (s: string):number => {
  let map = new Map([
    ["@", 1],
    ["#", 5],
    ["$", 10],
    ["%", 50],
    ["&", 100],
    ["+", 500],
    ["~", 1000],
  ]);

  let res = 0;

  [...s].forEach((sym) => {});

  return res;
};

export { decodeStringToNumber };


/*

Decode String to Number
Numbers are represented by seven symbols: @, #, $, %, &, + and ~
Symbol
Value
@
10
50
100
500
1000
For example, 15 is written as $#, which is simply $ + #. The number 217 is
written as &&#@@, which is && + #+ @@
Numbers are usually written largest to smallest from left to right. However, the
number for four is not @@@@. It will be written as @#. Because the one is
before the five we subtract it making four. The same principle applies to the
number nine, which is written as @$.
Following are the scenarios where subtraction is used:
• @ can be placed before # (5) and $ (10) to make 4 and 9.
• $ can be placed before % (50) and & (100) to make 40 and 90.
• & can be placed before + (500) and ~ (1000) to make 400 and 900.
Given an encoded string, decode it to a Number.
Example 1:
Input: s="$@@©"
Output: 13
Explanation: $= 10, @ © =3.
Example 2:
Input: s="~&~$&"
Output: 1990
Explanation:~= 1000, &~= 900, $& = 90.
Constraints:
• 1 <= s.length <= 10
• s contains only the characters ('@', #", '$', %', '&', 't', '~').
• It is guaranteed that s is a valid roman numeral in the range [10. 39991

*/
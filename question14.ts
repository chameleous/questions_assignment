/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people 
you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let friendNames : string[] = [`Ali`,`Asmar`,`Dawer`,`Munad`,`Bilal`];
friendNames.forEach((value) => {
    console.log(`"Join me for a delightful dinner, ${value} ! Let's create unforgettable memories together."`);
});
let allGuest : string[] = [`Ali`,`Asmar`,`Dawer`,`Munad`,`Bilal`];
// console.log(allGuest);
export { allGuest,friendNames };
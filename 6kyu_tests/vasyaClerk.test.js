const tickets = require("../6kyu_challenges/vasyaClerk");

describe("tickets", () => {

    test("Returns YES if Vasya can sell a ticket to every person, or NO if not", () => {

        // expect(tickets([])).toBe("YES");
        // expect(tickets([100])).toBe("NO");
        // expect(tickets([25, 25, 50])).toBe("YES");
        // expect(tickets([50, 25])).toBe("NO");
        // expect(tickets([25, 50, 25, 50, 25, 50])).toBe("YES");
        // expect(tickets([25, 25, 25, 25, 25, 25, 25])).toBe("YES");
        // expect(tickets([25, 50, 50, 25, 25, 25, 25])).toBe("NO");
        // expect(tickets([25, 50, 25, 50, 25, 50, 50])).toBe("NO");
        // expect(tickets([25, 100])).toBe("NO");
        // expect(tickets([25, 25, 50, 50, 100])).toBe("NO");
        // expect(tickets([25, 25, 25, 100])).toBe("YES");
        // expect(tickets([25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100])).toBe("YES");
        expect(tickets([25,25,25,100,25,50,25,100,25,25,50,100,25,25,25,100,25,25,25,100,25,100,25])).toBe("NO");

    });

});
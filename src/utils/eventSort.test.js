import eventSort from './eventSort'

describe("eventSort", () => {
    it("Should prioritize breakout sessions", () => {
        const a = {
            frontmatter: {
                category: 'Breakout session'
            }
        }
        const b = {
            frontmatter: {
                category: 'Something else'
            }
        }
        expect(eventSort(a, b)).toEqual(1);
    });

    it("Should prioritize group", () => {
        const a = {
            frontmatter: {
                category: 'Breakout session',
                group: 'B',
                from: '10'
            }
        }
        const b = {
            frontmatter: {
                category: 'Breakout session',
                group: 'A',
                from: '10'
            }
        }
        eventSort(a, b)
        expect(eventSort(a, b)).toEqual(-1);
    })

    it("Should prioritize from", () => {
        const a = {
            frontmatter: {
                category: 'Breakout session',
                group: 'B',
                from: '2019-03-30T08:00'
            }
        }
        const b = {
            frontmatter: {
                category: 'Breakout session',
                group: 'B',
                from: '2019-03-30T18:00'
            }
        }
        eventSort(a, b)
        expect(eventSort(a, b)).toEqual(1);
    })
})
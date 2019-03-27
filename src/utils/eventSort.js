const eventSort = (a, b) => {
    let categoryRes = 0;
    if (a.frontmatter.category === 'Breakout session') {
        categoryRes = -1;
    }
    if (b.frontmatter.category === 'Breakout session') {
        categoryRes = 1;
    }
    let groupRes = 0;
    if (a.frontmatter.group && b.frontmatter.group) {
        groupRes = a.frontmatter.group.localeCompare(b.frontmatter.group)
    }

    let fromRes = 0;
    if (a.frontmatter.from && b.frontmatter.from) {
        fromRes = a.frontmatter.from.localeCompare(b.frontmatter.from)
    }

    if (categoryRes === 0) {
        return groupRes === 0 ? fromRes : groupRes;
    } else {
        return categoryRes;
    }
};

export default eventSort;
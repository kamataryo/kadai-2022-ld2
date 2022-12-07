const obj = {
    "string": '文字列',
    'number':1234,
    "bool": true,
    "array": ["aaaa", "bbbb", "cccc", 123],
    "object": {
        "aaa": `bbb`,
    },
    "null": null,
    "func": () => {},
    "undefined": undefined,
}

const me = {
    name: "小太郎",
    parent: {
        name: "太郎",
        children: []
    }
}
me.parent.children.push(me)
console.log(me.parent.children[0].parent.children[0].parent)
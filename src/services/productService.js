const posts = [
    {
        id: 1,
        name: 'СУМАТРАНСКИЕ НОСОРОГИ',
        img: 'https://s16.stc.yc.kpcdn.net/share/i/4/401629/wr-750.webp',
        description: 'Относятся к непарнокопытным животным семейства носороговых. Данный вид носорогов является наиболее мелким из всего семейства. Длина тела взрослой особи суматранского носорога может достигать 200 – 280 см, а высота в холке может колебаться от 100 до 150 см. такие носороги могут весить до 1000 кг.',
        time:'12.03.4030',
        author:'Abcc'
    },
    {
        id: 2,
        name: 'ВОМБАТ',
        img: 'https://s11.stc.yc.kpcdn.net/share/i/4/401631/wr-750.webp',
        description: 'Семейство вомбатов содержит 2 рода и 3 вида, делящихся следующим образом: Род Шерстоносые вомбаты (Lasiorhinus): вид Квинслендский вомбат (Lasiorhinus krefftii) и вид Длинношёрстный вомбат (Lasiorhinus latifrons). Род голоносые вомбаты (Vombatus): вид короткошёрстный вомбат (Vombatus ursinus). Также известны пять вымерших родов вомбатов. Вомбаты появились около 18 миллионов лет назад в миоцене.',
        time:'19.04.3004',
        author:'Tikik'
    },
    {
        id: 3,
        name: 'ВЫХУХОЛЬ',
        img: 'https://s12.stc.yc.kpcdn.net/share/i/4/401618/wr-750.webp',
        description: 'Животное достаточно известное, благодаря своему звучному названию. Русская выхухоль (лат. Desmana moschata) – это млекопитающее, которое относят к отряду насекомоядных. Данных животных причисляют к кротовым, только относят их к отдельному подсемейству Desmaninae.',
        time:'02.03.2901',
        author:'ALos'
    },
]

function getProductById (id) {
    console.log(id)
    const context = {
        post:posts[id-1],
    }
    return context
}
function getAllProducts (max) {
    const context = {
        posts:posts.slice(0, max)
    }
    return context
}

function createProduct(post) {;
    posts.push(post)
    return "Hello woda"
}

module.exports = {
    getProductById: getProductById, 
    getAllProducts: getAllProducts,
    createProduct: createProduct 
}
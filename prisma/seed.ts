import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// Создание поста 1
async function createProduct(){
    const post = await prisma.post.create({
        data: {
            name: 'СУМАТРАНСКИЕ НОСОРОГИ',
            description: 'Относятся к непарнокопытным животным семейства носороговых. Данный вид носорогов является наиболее мелким из всего семейства. Длина тела взрослой особи суматранского носорога может достигать 200 – 280 см, а высота в холке может колебаться от 100 до 150 см. такие носороги могут весить до 1000 кг.',
            time:'12.03.4030',
            author:'Serj'
        }
    })
    console.log(post)
}

// Создание множества постов 2
async function createProducts(){
    const posts = await prisma.post.createMany({
        data: [
            {
                name: 'СУМАТРАНСКИЕ НОСОРОГИ',
                img: 'https://s16.stc.yc.kpcdn.net/share/i/4/401629/wr-750.webp',
                description: 'Относятся к непарнокопытным животным семейства носороговых. Данный вид носорогов является наиболее мелким из всего семейства. Длина тела взрослой особи суматранского носорога может достигать 200 – 280 см, а высота в холке может колебаться от 100 до 150 см. такие носороги могут весить до 1000 кг.',
                time:'12.03.4030',
                author:'Serj'
            },
            {
                name: 'ВОМБАТ',
                img: 'https://s11.stc.yc.kpcdn.net/share/i/4/401631/wr-750.webp',
                description: 'Семейство вомбатов содержит 2 рода и 3 вида, делящихся следующим образом: Род Шерстоносые вомбаты (Lasiorhinus): вид Квинслендский вомбат (Lasiorhinus krefftii) и вид Длинношёрстный вомбат (Lasiorhinus latifrons). Род голоносые вомбаты (Vombatus): вид короткошёрстный вомбат (Vombatus ursinus). Также известны пять вымерших родов вомбатов. Вомбаты появились около 18 миллионов лет назад в миоцене.',
                time:'19.04.3004',
                author:'Tikik'
            },
            {
                name: 'ВЫХУХОЛЬ',
                img: 'https://s12.stc.yc.kpcdn.net/share/i/4/401618/wr-750.webp',
                description: 'Животное достаточно известное, благодаря своему звучному названию. Русская выхухоль (лат. Desmana moschata) – это млекопитающее, которое относят к отряду насекомоядных. Данных животных причисляют к кротовым, только относят их к отдельному подсемейству Desmaninae.',
                time:'02.03.2901',
                author:'ALos'
            }
        ]
    })
    console.log(posts)
}


// Обновления данных о постe 3
async function updateProduct() {
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: 'Updated Product'
        }
    })
    console.log(post)

}


// Получение одного поста 4
async function findProduct() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}

// Получение множества постов 5
async function findProducts() {
    const post = await prisma.post.findMany()
    console.log(post)
}


// Удаления поста по id 6
async function deleteProduct() {
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

// comments

// Создание комментария 1
async function createComment(){
    const comment = await prisma.comment.create({
        data: {
            header: 'user',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequuntur quaerat, nam non dolorum, iste repellendus repellat illo sint fuga ipsa? Aperiam consectetur non saepe amet culpa excepturi officiis esse?',
            postId: 1
        }
    })
    console.log(comment)
}

// Создание множества комментариев 2
async function createComments(){
    const comments = await prisma.comment.createMany({
        data: [
            {
                header: 'user1',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                postId: 1
            },
            {
                header: 'user2',
                body: 'Sequi, consequuntur quaerat, nam non dolorum, iste repellendus repellat illo sint fuga ipsa?',
                postId: 1
            },
            {
                header: 'user3',
                body: 'Aperiam consectetur non saepe amet culpa excepturi officiis esse?',
                postId: 1
            }
        ]
    })
    console.log(comments)
}

// Удаления комментария 3
async function deleteComment() {
    const comment = await prisma.comment.delete({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

// Поиск комментария по id 4
async function findComment() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

// Поиск комментария по id с выводом информации о посте 5
async function findCommentWithInfoPost() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        },
        include: {
            Post: true
        }
    })
    console.log(comment)
}

// Поиск поста по id с комментариями 6
async function findPostWithComments() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        },
        include: {
            comments: true
        }
    })
    console.log(post)
}

// Обновление комментария 7
async function updateComment() {
    const comment = await prisma.comment.update({
        where: {
            id: 1
        },
        data: {
            header: 'Updated Product'
        }
    })
    console.log(comment)

}




async function main() {
    await createProduct()
    await createProducts()
    await updateProduct()
    await findProduct()
    await findProducts()
    await deleteProduct()

    await createComment(),
    await createComments(),
    await deleteComment(),
    await findComment(),
    await findCommentWithInfoPost(),
    await findPostWithComments(),
    await updateComment()
}

// try - catch
main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})
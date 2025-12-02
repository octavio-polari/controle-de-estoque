import Database from "bun:sqlite"
import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const db = new Database("estoque.sqlite")

app.post("/adicionar", (req, res) => {
    const { nome, formato, in_estoque } = req.body

    let adicionar = db.prepare(`
        insert into item (nome, formato, in_estoque)
        values (?, ?, ?)`
    )
    
    adicionar.run(nome, formato, in_estoque)

    res.json({ ok: true, message: "Item adicionado com sucesso." })
})

app.get("/lista-itens", (req, res) => {
    const result = db.prepare(`
        select nome, formato
        from item
        order by nome    
    `).all()

    res.json(result)
})

app.post("/saida", (req, res) => {
    const { item, extrator, quantidade } = req.body

    if (!item || !extrator || !quantidade)
        return res.status(400).send("Dados incompletos para registrar saída.")

    const regSaida = db.prepare(`
        insert into saida (item, extrator, quantidade)
        values (?, ?, ?)
    `)
    regSaida.run(item, extrator, quantidade)

    res.send({ok: true, message: "Saída registrada com sucesso."})
})

app.get("/controle", (req, res) => {
    const result = db.prepare(`
        select
            saida. item,
            saida. extrator,
            saida. quantidade,
            saida. dt_saida,
        from saida
        where dt_saida >= date('now', '-30 days')
        order by dt_saida desc 
    `).all()
    res.json(result)
})

app.listen(3000, () => {
    console.log("Servidor: http://localhost:3000")
})
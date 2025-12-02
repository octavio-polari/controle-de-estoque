async function carregarLista() {
    const itens = await fetch("http://localhost:3000/lista-itens").then(r => r.json())

    const listaNome = document.getElementById("lista-produtos")

    itens.forEach(i => {
        const option1 = document.createElement("option")
        option1.value = i.nome
        listaNome.appendChild(option1)
    });
}
carregarLista()

document.getElementById("lancar-saida").onclick = async () => {
    const item = document.getElementById("item").value
    const extrator = document.getElementById("extrator").value
    const quantidade = document.getElementById("quantidade").value

    await fetch("http://localhost:3000/saida", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ item, extrator, quantidade })
    })

    alert("Saída registrada!")
}
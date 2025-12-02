document.querySelector("button[type=submit]").onclick = async () => {
    const nome = document.querySelector(".nome").value
    const formato = document.querySelector(".formato").value
    const in_estoque = document.querySelector(".in_estoque").value

    await fetch("http://localhost:3000/adicionar", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ nome, formato, in_estoque })
    })

    alert("Item adicionado!")
    location.href = "saida.html"
}
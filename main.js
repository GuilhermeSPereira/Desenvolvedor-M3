function listagemProdutos(produtos){
    var conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = '';
    for (var i = 0; i<produtos.length;i++) {
        var divProduto = document.createElement('div');
        divProduto.setAttribute('class', 'produto');

        var divImagem = document.createElement('div');
        divImagem.setAttribute('class','img-produto');

        var imgProduto = document.createElement('img');
        imgProduto.setAttribute('src', 'layout/imagens/' + produtos[i].imagem);
        imgProduto.setAttribute('alt', 'Camise Mescla');
        imgProduto.setAttribute('title', produtos[i].produto);

        var tituloProduto = document.createElement('div');
        tituloProduto.setAttribute('class', 'titulo-produto');
        tituloProduto.innerHTML = produtos[i].produto;
        

        var precoProduto = document.createElement('div');
        precoProduto.setAttribute('class', 'preco-produto');
        precoProduto.innerHTML = 'R$ ' + produtos[i].preco.replace('.' , ',');

        var parcelamento = document.createElement('div');
        var parcela = parseFloat(produtos[i].preco)/3
        parcelamento.setAttribute('class', 'parcelamento');
        parcelamento.innerHTML = `até 3x de ${parcela.toFixed(2).replace('.' , ',')}`;

        var botaoComprar = document.createElement('button');
        botaoComprar.innerHTML = 'Comprar';
       

        divImagem.appendChild(imgProduto);

        divProduto.appendChild(divImagem);
        divProduto.appendChild(tituloProduto);
        divProduto.appendChild(precoProduto);
        divProduto.appendChild(parcelamento);
        divProduto.appendChild(botaoComprar);

        conteudo.appendChild(divProduto);
    }
}

listagemProdutos(produtos);

function filtroCores() {
    var filtros = document.getElementById('filtroCores');
    for (var i = 0; i<coresProdutos.length;i++) {

        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('name', coresProdutos[i]);
        checkBox.setAttribute('value', coresProdutos[i]);
        checkBox.setAttribute('id', coresProdutos[i]);
        checkBox.setAttribute('onChange', 'filtragemCores("'+coresProdutos[i]+'")');

        var cores = document.createElement('label');
        cores.setAttribute('for', coresProdutos[i]);
        cores.innerText = coresProdutos[i];

        var quebraLinha = document.createElement('br')

        filtros.appendChild(checkBox);
        filtros.appendChild(cores);
        filtros.appendChild(quebraLinha);
    }
}

filtroCores();

function filtragemCores(cor) {

    if($("#"+cor)[0].checked) {
        var produtosFiltrados = produtos.filter(produto => produto.cor == cor);
        listagemProdutos(produtosFiltrados);
    }
    else{
        listagemProdutos(produtos);
    }

}

function adicionar(produto){

}
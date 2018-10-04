class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona() {
        
        event.preventDefault();
        
        console.log(typeof(this._inputData));

        let data = new Date(this._inputData.value.replace(/-/g, ","));
        console.log(data);
    }
}
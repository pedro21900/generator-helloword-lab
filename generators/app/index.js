var Generator = require("yeoman-generator");
class MyTeste extends Generator {
  //Instancia
  // helperMerthod() {
  //   console.log("limitar formas de execução de método");
  // }
}
module.exports = class extends MyTeste {
  constructor(args, opts) {
    super(args, opts);

    // Isso torna `appname` um argumento obrigatório.
    this.argument("appname", { type: String, required: true });

    // E você pode acessá-lo mais tarde.
    this.log(this.options.appname);

    //Argumentos
    this.option("auditoria");

    // And you can then access it later; e.g.
    this.scriptSuffix = this.options.auditoria ? ".auditoria" : ".js";
  }
  exec() {
    // this.helperMerthod();
  }
  //Interação com usário por pront de comando
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Nome do seu projeto",
        default: this.appname, // Padrão para o nome da pasta atual
       // store: true, //salva parametros para se usados posteriormente
      },
      {
        type: "confirm",
        name: "devExtreme",
        message: "Você gostaria de ultilizar o DevExtreme",
      },
    ]);

    this.log("Nome da aplicação:", answers.name);
    this.log("Recurso DevExtreme:", answers.devExtreme);
  }
};

module.exports = (sucesso = true, data = {}, mensagem = "Dados retornados com sucesso", codigo = 200) => {
  let resposta = {
    success: sucesso,
    codigo: codigo,
    data: data,
    mensagem: mensagem
  };


  return resposta;
}
function jogar() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let acertou = false;

  alert("🎯 Bem-vindo ao jogo! Tente adivinhar o número entre 1 e 100.");

  while (!acertou) {
    const entrada = prompt("Digite seu número:");
    const chute = Number(entrada);

    if (!entrada || isNaN(chute)) {
      alert("⚠️ Digite um número válido!");
      continue;
    }

    tentativas++;

    if (chute === numeroSecreto) {
      alert(`🎉 Você acertou! O número era ${numeroSecreto}. Tentativas: ${tentativas}`);
      acertou = true;
    } else if (chute < numeroSecreto) {
      alert("⬆️ Tente um número MAIOR.");
    } else {
      alert("⬇️ Tente um número MENOR.");
    }
  }

  if (confirm("Quer jogar novamente?")) {
    jogar();
  }
}

jogar();

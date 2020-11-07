const cipher = {
  encode: function () {
    let finalMessage = "";
    const offset1 = document.getElementById("valor1").value;
    const offsetC = Number(offset1);
    const message = document.getElementById("message").value.toUpperCase();

    for (let a = 0; a < message.length; a++) {
      const encrypts = message.charCodeAt(a);
      const encrypting = ((encrypts - 65 + offsetC) % 26) + 65;
      finalMessage += String.fromCharCode(encrypting);
    }
    document.getElementById(
      "valorCipher"
    ).innerHTML = `Sua mensagem cifrada é: ${finalMessage}`;

    return finalMessage;
  },

  decode: function () {
    let decipherText = "";

    const offset2 = document.getElementById("valor2").value;
    const offsetD = Number(offset2);
    const messageD = document.getElementById("messageD").value.toUpperCase();

    for (let a = 0; a < messageD.length; a++) {
      const decrypts = messageD.charCodeAt(a);
      const decrypting = ((decrypts - 65 - offsetD) % 26) + 65;
      decipherText += String.fromCharCode(decrypting);
    }

    document.getElementById("valorDecipher").innerHTML = `Sua mensagem decifrada é: ${decipherText}`;
      
    return decipherText;
  },
};

export default cipher;

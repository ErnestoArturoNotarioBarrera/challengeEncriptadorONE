const letrasEncriptadas = {
	"e": "enter",
	"i": "imes",
	"a": "ai",
	"o": "ober",
	"u": "ufat",
	"s": "sop",
	"d": "dio",
	"r": "rdo",
	"n": "nim"
};

const letrasDesencriptadas = {
	'enter': 'e',
	'imes': 'i',
	'ai': 'a',
	'ober': 'o',
	'ufat': 'u',
	'sop': 's',
	'dio': 'd',
	'rdo': 'r',
	'nim': 'n'
}

function validarEntrada(texto) {
	if (!texto || typeof texto !== 'string') {
		throw new Error('Entrada inválida');
	}
}

function ocultarImagen() {
	let texto = document.getElementById('resultado').value
	let imagen = document.getElementById('imagen-hack')
	if (texto.trim() !== "") {
		imagen.style.display = 'none'
	} else {
		imagen.style.display = "inline-block"
	}
}

function mostrarImagen() {
	let texto = document.getElementById('resultado').value
	let imagen = document.getElementById('imagen-hack')
	if (texto.trim() !== "") {
		imagen.style.display = 'inline-block'
	} else {
		imagen.style.display = "inline-block"
	}
}

function encriptar() {
	let texto = document.getElementById("texto").value.toLowerCase().replace(/[^a-z]/g, " ");

	if (texto.trim() === "") {
		alert("No ingresaste ningún texto");
		return "";
	}

	let resultado = texto.replace(/[aeiousdrn]/g, function ([aeiousdrn]) {
		return letrasEncriptadas[aeiousdrn];
	});

	return resultado;
}

function desencriptarTexto(texto) {
	let textoDesencriptado = texto.replace(/sop/g, "s")
		.replace(/dio/g, "d")
		.replace(/rdo/g, "r")
		.replace(/nim/g, "n")
		.replace(/enter/g, "e")
		.replace(/imes/g, "i")
		.replace(/ai/g, "a")
		.replace(/ober/g, "o")
		.replace(/ufat/g, "u")
;
	
	

	return textoDesencriptado;
}

function procesarEncriptar() {
	const entrada = document.getElementById("texto").value.trim();
	const salida = document.getElementById("resultado");

	try {
		validarEntrada(entrada);
		const resultado = encriptar(entrada);
		salida.value = resultado;
	} catch (error) {
		console.error(error);
		alert("Error al encriptar el texto");
	}
	ocultarImagen()
}


function procesarDesencriptar() {
	const entrada = document.getElementById("texto").value.trim();
	const salida = document.getElementById("resultado");

	try {
		validarEntrada(entrada);
		const resultado = desencriptarTexto(entrada);
		salida.value = resultado;
	} catch (error) {
		console.error(error);
		alert("Error al desencriptar el texto");
	}
	ocultarImagen()

}


function limpiar() {
	document.getElementById("texto").value = "";
	document.getElementById("resultado").value = "";
	document.getElementById("texto").focus()

	mostrarImagen()
}

function copiarTexto() {
	const textoResultado = document.getElementById("resultado").value.trim();

	if (textoResultado) {
		navigator.clipboard.writeText(textoResultado)
			.then(() => {
				return 0
			})
			.catch((error) => {
				console.error("Error al copiar el texto: ", error);
				alert("Error al copiar el texto");
			});
	}
	limpiar()
}

document.getElementById("encriptar").addEventListener("click", procesarEncriptar);
document.getElementById("desencriptar").addEventListener("click", procesarDesencriptar);
document.getElementById("limpiar").addEventListener("click", limpiar);
document.getElementById("copiar").addEventListener("click", copiarTexto);

document.getElementById("resultado").setAttribute("readonly", true);

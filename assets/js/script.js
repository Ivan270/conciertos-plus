import Usuario from './clases/Usuario.js';

class Vip extends Usuario {
	constructor(mail, contrasena, nombre) {
		super(mail, contrasena);
		this.nombre = nombre;
	}
	mostrarDatos() {
		modalTitle.innerHTML = `Bienvenido ${this.nombre}`;
		modalContent.innerHTML = `Usuario: ${this.nombre} Email: ${this.mail} Contraseña: ${this.contrasena}`;
	}
}

// Logica captura de datos de forms
// Instancia modal de bootstrap
const modal = new bootstrap.Modal(document.getElementById('userModal'), {
	keyboard: false,
});
// Form usuario normal
let formUser = document.getElementById('formUser');
formUser.addEventListener('submit', (event) => {
	event.preventDefault();
	let user = new Usuario(inputEmail.value, inputPass.value);
	user.mostrarDatos();
	modal.show();
	formUser.reset();
});
// Form usuario VIP
let formVip = document.getElementById('formVip');
formVip.addEventListener('submit', (event) => {
	event.preventDefault();
	let vipUser = new Vip(
		inputEmailVip.value,
		inputPassVip.value,
		inputNameVip.value
	);
	console.log(vipUser);
	vipUser.mostrarDatos();
	modal.show();
	formVip.reset();
});

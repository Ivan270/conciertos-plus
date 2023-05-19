import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export default class Usuario {
	constructor(mail, contrasena) {
		this.mail = mail;
		this.contrasena = contrasena;
		this.nombre = this.generarNombre();
	}
	generarNombre() {
		return `Usuario${uuidv4().slice(0, 6)}`;
	}
	mostrarDatos() {
		modalTitle.innerHTML = `Bienvenido ${this.nombre}`;
		modalContent.innerHTML = `Email: ${this.mail} Contraseña: ${this.contrasena}`;
	}
}

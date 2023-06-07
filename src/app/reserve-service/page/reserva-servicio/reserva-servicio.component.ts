import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reserva-servicio',
  templateUrl: './reserva-servicio.component.html',
  styleUrls: ['./reserva-servicio.component.css']
})
export class ReservaServicioComponent {

  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      mensaje: ['', Validators.required]
    });
  }

  enviarMensaje(): void {
    if (this.contactoForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.contactoForm.get('nombre')!.value);
      formData.append('correo', this.contactoForm.get('correo')!.value);
      formData.append('telefono', this.contactoForm.get('telefono')!.value);
      formData.append('mensaje', this.contactoForm.get('mensaje')!.value);

      this.http.post('https://ejemplo.com/enviar-mensaje', formData).subscribe(
        (response) => {
          console.log('Mensaje enviado con éxito.');
        },
        (error) => {
          console.error('Hubo un error al enviar el mensaje.');
        }
      );
    } else {
      console.error('Formulario inválido.');
    }
  }


}

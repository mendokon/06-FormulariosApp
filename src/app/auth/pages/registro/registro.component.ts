import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerMendokon } from 'src/app/shared/validator/validaciones';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(emailPattern) ]],
    username: ['', [Validators.required, noPuedeSerMendokon]]
  })
    
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.miFormulario.reset({
      nombre: 'Luis Mendoza',
      email: 'test@test.com',
      username: 'mk'   
    })
  }

  campoValido(campo:string){
    return  this.miFormulario.controls[campo].invalid &&
            this.miFormulario.controls[campo].touched
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

}

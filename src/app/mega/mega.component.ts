import { Component } from '@angular/core';

@Component({
  selector: 'app-mega',
  templateUrl: './mega.component.html',
  styleUrl: './mega.component.css'
})
export class MegaComponent {
  numerosSorteados: number[] = [];
  numerosUsuario: string = '';
  resultado: number | null = null;

  gerarNumerosSorteados() {
    while (this.numerosSorteados.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!this.numerosSorteados.includes(numeroAleatorio)) {
        this.numerosSorteados.push(numeroAleatorio);
      }
    }
  }

  verificarNumeros() {
    const numerosUsuarioArray = this.numerosUsuario.split(',').map(num => parseInt(num.trim()));

  if (numerosUsuarioArray.length < 6 || numerosUsuarioArray.length > 10) {
    alert('Por favor, informe entre 6 e 10 números válidos.');
    return;
  }
  this.resultado = numerosUsuarioArray.filter(num => this.numerosSorteados.includes(num)).length;
}
}

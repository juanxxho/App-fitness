import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  template: `
    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4 slide-in">
              Calculadoras Fitness
            </h1>
            <p class="lead mb-4">
              Utiliza nuestras calculadoras para medir tu progreso y establecer
              metas realistas para tu entrenamiento.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              src="https://i.pinimg.com/736x/e6/fb/9a/e6fb9a3b836b2e07226cf7a910c4e59b.jpg"
              alt="Calculadoras fitness"
              class="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Calculators Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card h-100">
              <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Calculadora de IMC</h3>
              </div>
              <div class="card-body">
                <p class="card-text mb-4">
                  El Índice de Masa Corporal (IMC) es una medida que relaciona
                  tu peso y altura para evaluar si tienes un peso saludable.
                </p>

                <div class="mb-3">
                  <label for="peso-imc" class="form-label">Peso (kg)</label>
                  <input
                    type="number"
                    class="form-control"
                    id="peso-imc"
                    [(ngModel)]="imcData.peso"
                    (ngModelChange)="calcularIMC()"
                    min="30"
                    max="300"
                  />
                </div>

                <div class="mb-4">
                  <label for="altura-imc" class="form-label">Altura (cm)</label>
                  <input
                    type="number"
                    class="form-control"
                    id="altura-imc"
                    [(ngModel)]="imcData.altura"
                    (ngModelChange)="calcularIMC()"
                    min="100"
                    max="250"
                  />
                </div>

                <div
                  *ngIf="imcResultado > 0"
                  class="result-box p-3 rounded mb-3"
                  [ngClass]="getIMCClass()"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h4 class="mb-0">Tu IMC: {{ imcResultado.toFixed(1) }}</h4>
                    <span class="badge" [ngClass]="getIMCBadgeClass()">{{
                      getIMCCategory()
                    }}</span>
                  </div>
                  <p class="mb-0 mt-2">{{ getIMCMessage() }}</p>
                </div>

                <div class="progress mb-3" style="height: 30px;">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 20%;"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Bajo peso
                  </div>
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 20%;"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Normal
                  </div>
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style="width: 20%;"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Sobrepeso
                  </div>
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style="width: 40%;"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Obesidad
                  </div>
                </div>

                <div class="text-center">
                  <button class="btn btn-primary" (click)="guardarDatosIMC()">
                    Guardar Resultados
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="card h-100">
              <div class="card-header bg-primary text-white">
                <h3 class="mb-0">Calculadora de TMB</h3>
              </div>
              <div class="card-body">
                <p class="card-text mb-4">
                  La Tasa Metabólica Basal (TMB) es la cantidad de energía que
                  tu cuerpo necesita para funcionar en reposo.
                </p>

                <div class="mb-3">
                  <label class="form-label">Género</label>
                  <div class="d-flex">
                    <div class="form-check me-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="genero"
                        id="genero-masculino"
                        value="masculino"
                        [(ngModel)]="tmbData.genero"
                        (ngModelChange)="calcularTMB()"
                      />
                      <label class="form-check-label" for="genero-masculino">
                        Masculino
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="genero"
                        id="genero-femenino"
                        value="femenino"
                        [(ngModel)]="tmbData.genero"
                        (ngModelChange)="calcularTMB()"
                      />
                      <label class="form-check-label" for="genero-femenino">
                        Femenino
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="edad-tmb" class="form-label">Edad</label>
                  <input
                    type="number"
                    class="form-control"
                    id="edad-tmb"
                    [(ngModel)]="tmbData.edad"
                    (ngModelChange)="calcularTMB()"
                    min="15"
                    max="100"
                  />
                </div>

                <div class="mb-3">
                  <label for="peso-tmb" class="form-label">Peso (kg)</label>
                  <input
                    type="number"
                    class="form-control"
                    id="peso-tmb"
                    [(ngModel)]="tmbData.peso"
                    (ngModelChange)="calcularTMB()"
                    min="30"
                    max="300"
                  />
                </div>

                <div class="mb-3">
                  <label for="altura-tmb" class="form-label">Altura (cm)</label>
                  <input
                    type="number"
                    class="form-control"
                    id="altura-tmb"
                    [(ngModel)]="tmbData.altura"
                    (ngModelChange)="calcularTMB()"
                    min="100"
                    max="250"
                  />
                </div>

                <div class="mb-4">
                  <label class="form-label">Nivel de Actividad</label>
                  <select
                    class="form-select"
                    [(ngModel)]="tmbData.actividad"
                    (ngModelChange)="calcularTMB()"
                  >
                    <option value="1.2">
                      Sedentario (poco o ningún ejercicio)
                    </option>
                    <option value="1.375">
                      Ligero (ejercicio 1-3 días/semana)
                    </option>
                    <option value="1.55">
                      Moderado (ejercicio 3-5 días/semana)
                    </option>
                    <option value="1.725">
                      Activo (ejercicio 6-7 días/semana)
                    </option>
                    <option value="1.9">
                      Muy activo (ejercicio intenso diario)
                    </option>
                  </select>
                </div>

                <div
                  *ngIf="tmbResultado > 0"
                  class="result-box p-3 bg-light rounded mb-3"
                >
                  <h4 class="mb-2">Resultados:</h4>
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <div class="d-flex justify-content-between">
                        <span>TMB:</span>
                        <strong
                          >{{ tmbResultado.toFixed(0) }} calorías/día</strong
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Mantenimiento:</span>
                        <strong
                          >{{
                            tmbMantenimiento.toFixed(0)
                          }}
                          calorías/día</strong
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Déficit (pérdida):</span>
                        <strong
                          >{{
                            (tmbMantenimiento * 0.8).toFixed(0)
                          }}
                          calorías/día</strong
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div class="d-flex justify-content-between">
                        <span>Superávit (ganancia):</span>
                        <strong
                          >{{
                            (tmbMantenimiento * 1.1).toFixed(0)
                          }}
                          calorías/día</strong
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center">
                  <button class="btn btn-primary" (click)="guardarDatosTMB()">
                    Guardar Resultados
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="display-5 fw-bold">Consejos para tu Fitness</h2>
            <p class="lead">
              Aprovecha al máximo tus métricas con estos consejos
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center mb-3">
                  <i class="fas fa-weight fa-3x text-primary"></i>
                </div>
                <h4 class="card-title text-center">Interpreta tu IMC</h4>
                <p class="card-text">
                  El IMC es una guía general, pero no tiene en cuenta la
                  composición corporal. Un atleta musculoso puede tener un IMC
                  alto sin tener exceso de grasa.
                </p>
                <p class="card-text">
                  Combina tu IMC con otras medidas como el porcentaje de grasa
                  corporal para una evaluación más completa.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center mb-3">
                  <i class="fas fa-fire-alt fa-3x text-primary"></i>
                </div>
                <h4 class="card-title text-center">Optimiza tu TMB</h4>
                <p class="card-text">
                  Aumentar tu masa muscular puede incrementar tu TMB, ya que el
                  músculo quema más calorías en reposo que la grasa.
                </p>
                <p class="card-text">
                  Evita dietas muy restrictivas que pueden reducir tu TMB. Es
                  mejor mantener un déficit calórico moderado para perder peso
                  de forma saludable.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <div class="text-center mb-3">
                  <i class="fas fa-chart-line fa-3x text-primary"></i>
                </div>
                <h4 class="card-title text-center">Seguimiento Regular</h4>
                <p class="card-text">
                  Realiza un seguimiento de tus métricas cada 2-4 semanas para
                  evaluar tu progreso. Recuerda que los cambios saludables
                  llevan tiempo.
                </p>
                <p class="card-text">
                  Ajusta tus objetivos según tus resultados. Si no estás viendo
                  cambios, considera modificar tu plan de alimentación o
                  entrenamiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent {
  // IMC Data
  imcData = {
    peso: 70,
    altura: 170,
  };
  imcResultado = 0;

  // TMB Data
  tmbData = {
    genero: 'masculino',
    edad: 30,
    peso: 70,
    altura: 170,
    actividad: '1.55',
  };
  tmbResultado = 0;
  tmbMantenimiento = 0;

  constructor(private userService: UserService) {
    // Cargar datos del usuario si existen
    if (this.userService.currentUser) {
      if (this.userService.currentUser.peso) {
        this.imcData.peso = this.userService.currentUser.peso;
        this.tmbData.peso = this.userService.currentUser.peso;
      }

      if (this.userService.currentUser.altura) {
        this.imcData.altura = this.userService.currentUser.altura;
        this.tmbData.altura = this.userService.currentUser.altura;
      }

      if (this.userService.currentUser.edad) {
        this.tmbData.edad = this.userService.currentUser.edad;
      }
    }

    // Calcular valores iniciales
    this.calcularIMC();
    this.calcularTMB();
  }

  calcularIMC() {
    if (this.imcData.peso > 0 && this.imcData.altura > 0) {
      const alturaMetros = this.imcData.altura / 100;
      this.imcResultado = this.imcData.peso / (alturaMetros * alturaMetros);
    }
  }

  calcularTMB() {
    if (
      this.tmbData.peso > 0 &&
      this.tmbData.altura > 0 &&
      this.tmbData.edad > 0
    ) {
      // Fórmula de Mifflin-St Jeor
      if (this.tmbData.genero === 'masculino') {
        this.tmbResultado =
          10 * this.tmbData.peso +
          6.25 * this.tmbData.altura -
          5 * this.tmbData.edad +
          5;
      } else {
        this.tmbResultado =
          10 * this.tmbData.peso +
          6.25 * this.tmbData.altura -
          5 * this.tmbData.edad -
          161;
      }

      // Calcular mantenimiento según nivel de actividad
      this.tmbMantenimiento =
        this.tmbResultado * Number.parseFloat(this.tmbData.actividad);
    }
  }

  getIMCCategory(): string {
    if (this.imcResultado < 18.5) return 'Bajo peso';
    if (this.imcResultado < 25) return 'Peso normal';
    if (this.imcResultado < 30) return 'Sobrepeso';
    if (this.imcResultado < 35) return 'Obesidad I';
    if (this.imcResultado < 40) return 'Obesidad II';
    return 'Obesidad III';
  }

  getIMCClass(): string {
    if (this.imcResultado < 18.5) return 'bg-info text-white';
    if (this.imcResultado < 25) return 'bg-success text-white';
    if (this.imcResultado < 30) return 'bg-warning';
    return 'bg-danger text-white';
  }

  getIMCBadgeClass(): string {
    if (this.imcResultado < 18.5) return 'bg-info';
    if (this.imcResultado < 25) return 'bg-success';
    if (this.imcResultado < 30) return 'bg-warning';
    return 'bg-danger';
  }

  getIMCMessage(): string {
    if (this.imcResultado < 18.5) {
      return 'Estás por debajo del peso recomendado. Considera aumentar tu ingesta calórica y consultar con un profesional.';
    }
    if (this.imcResultado < 25) {
      return '¡Felicidades! Tu peso está dentro del rango saludable recomendado.';
    }
    if (this.imcResultado < 30) {
      return 'Estás ligeramente por encima del peso recomendado. Considera ajustar tu dieta y aumentar tu actividad física.';
    }
    return 'Tu IMC indica obesidad. Te recomendamos consultar con un profesional de la salud para un plan personalizado.';
  }

  guardarDatosIMC() {
    if (this.userService.currentUser) {
      this.userService.updateUser({
        peso: this.imcData.peso,
        altura: this.imcData.altura,
      });
      alert('Datos guardados correctamente en tu perfil.');
    } else {
      alert('Debes crear un perfil para guardar tus datos.');
    }
  }

  guardarDatosTMB() {
    if (this.userService.currentUser) {
      this.userService.updateUser({
        peso: this.tmbData.peso,
        altura: this.tmbData.altura,
        edad: this.tmbData.edad,
      });
      alert('Datos guardados correctamente en tu perfil.');
    } else {
      alert('Debes crear un perfil para guardar tus datos.');
    }
  }
}

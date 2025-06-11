import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent],
  template: `
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow">
              <div class="card-header">
                <h2 class="mb-0">
                  {{ userService.currentUser ? 'Tu Perfil' : 'Crear Perfil' }}
                </h2>
              </div>
              <div class="card-body">
                <form (ngSubmit)="guardarPerfil()">
                  <!-- Información Básica -->
                  <div class="mb-4">
                    <h4 class="mb-3">Información Básica</h4>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label for="nombre" class="form-label">Nombre *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nombre"
                          [(ngModel)]="usuario.nombre"
                          name="nombre"
                          required
                          placeholder="Tu nombre completo"
                        />
                        <small class="form-text text-muted">
                          💡 Usa "Admin" para acceso de administrador
                        </small>
                      </div>
                      <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          [(ngModel)]="usuario.email"
                          name="email"
                          placeholder="tu@email.com"
                        />
                        <small class="form-text text-muted">
                          💡 Usa "admin&#64;fitnesspro.com" para admin
                        </small>
                      </div>
                      <div class="col-md-6">
                        <label for="edad" class="form-label">Edad</label>
                        <input
                          type="number"
                          class="form-control"
                          id="edad"
                          [(ngModel)]="usuario.edad"
                          name="edad"
                          min="15"
                          max="100"
                          placeholder="25"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Objetivos y Nivel -->
                  <div class="mb-4">
                    <h4 class="mb-3">Objetivos y Nivel</h4>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label for="objetivo" class="form-label"
                          >Objetivo Principal *</label
                        >
                        <select
                          class="form-select"
                          id="objetivo"
                          [(ngModel)]="usuario.objetivo"
                          name="objetivo"
                          required
                        >
                          <option value="">Selecciona un objetivo</option>
                          <option value="perdida-peso">Pérdida de peso</option>
                          <option value="ganancia-muscular">
                            Ganancia muscular
                          </option>
                          <option value="resistencia">
                            Mejorar resistencia
                          </option>
                          <option value="flexibilidad">
                            Aumentar flexibilidad
                          </option>
                          <option value="salud-general">Salud general</option>
                        </select>
                      </div>
                      <div class="col-md-6">
                        <label for="nivel" class="form-label"
                          >Nivel de Experiencia *</label
                        >
                        <select
                          class="form-select"
                          id="nivel"
                          [(ngModel)]="usuario.nivel"
                          name="nivel"
                          required
                        >
                          <option value="">Selecciona tu nivel</option>
                          <option value="principiante">Principiante</option>
                          <option value="intermedio">Intermedio</option>
                          <option value="avanzado">Avanzado</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Medidas Corporales -->
                  <div class="mb-4">
                    <h4 class="mb-3">Medidas Corporales</h4>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label for="peso" class="form-label">Peso (kg)</label>
                        <input
                          type="number"
                          class="form-control"
                          id="peso"
                          [(ngModel)]="usuario.peso"
                          name="peso"
                          min="30"
                          max="300"
                          placeholder="70"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="altura" class="form-label"
                          >Altura (cm)</label
                        >
                        <input
                          type="number"
                          class="form-control"
                          id="altura"
                          [(ngModel)]="usuario.altura"
                          name="altura"
                          min="100"
                          max="250"
                          placeholder="170"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Preferencias -->
                  <div class="mb-4">
                    <h4 class="mb-3">Preferencias</h4>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="notificaciones"
                            [(ngModel)]="preferencias.notificaciones"
                            name="notificaciones"
                          />
                          <label class="form-check-label" for="notificaciones">
                            Recibir notificaciones
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="recordatorios"
                            [(ngModel)]="preferencias.recordatorios"
                            name="recordatorios"
                          />
                          <label class="form-check-label" for="recordatorios">
                            Recordatorios de entrenamiento
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary">
                      <i class="fas fa-save me-2"></i>
                      {{
                        userService.currentUser
                          ? 'Actualizar Perfil'
                          : 'Crear Perfil'
                      }}
                    </button>

                    <div *ngIf="userService.currentUser" class="d-flex gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        (click)="iniciarSesion()"
                      >
                        <i class="fas fa-play me-2"></i>Iniciar Sesión
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        (click)="eliminarPerfil()"
                      >
                        <i class="fas fa-trash me-2"></i>Eliminar Perfil
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!-- Rutinas Recomendadas -->
            <div
              *ngIf="userService.currentUser && rutinasRecomendadas.length > 0"
              class="mt-5"
            >
              <h3 class="mb-4">Rutinas Recomendadas para Ti</h3>
              <div class="row g-4">
                <div
                  *ngFor="let rutina of rutinasRecomendadas"
                  class="col-md-6"
                >
                  <div class="card h-100">
                    <div class="card-body">
                      <h5 class="card-title">{{ rutina.nombre }}</h5>
                      <p class="card-text">{{ rutina.descripcion }}</p>
                      <div
                        class="d-flex justify-content-between align-items-center mb-3"
                      >
                        <span class="badge bg-primary">{{ rutina.nivel }}</span>
                        <span
                          ><i class="fas fa-clock me-1"></i>
                          {{ rutina.duracion }} min</span
                        >
                      </div>
                      <button
                        class="btn btn-outline-primary btn-sm"
                        (click)="verRutina(rutina)"
                      >
                        <i class="fas fa-eye me-1"></i>Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Estadísticas -->
            <div
              *ngIf="
                userService.currentUser && userService.currentUser.sesiones
              "
              class="mt-5"
            >
              <h3 class="mb-4">Tus Estadísticas</h3>
              <div class="row g-4">
                <div class="col-md-4">
                  <div class="card text-center h-100">
                    <div class="card-body">
                      <div class="display-4 fw-bold text-primary mb-2">
                        {{ userService.currentUser.sesiones }}
                      </div>
                      <h5 class="card-title">Sesiones Completadas</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card text-center h-100">
                    <div class="card-body">
                      <div class="display-4 fw-bold text-primary mb-2">
                        {{ userService.getDaysActive() }}
                      </div>
                      <h5 class="card-title">Días Activo</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card text-center h-100">
                    <div class="card-body">
                      <div class="display-4 fw-bold text-primary mb-2">
                        {{ calcularIMC() }}
                      </div>
                      <h5 class="card-title">IMC Actual</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  usuario = {
    nombre: '',
    email: '',
    objetivo: '',
    nivel: '',
    edad: 0,
    peso: 0,
    altura: 0,
  };

  preferencias = {
    notificaciones: true,
    recordatorios: true,
  };

  rutinasRecomendadas: any[] = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    if (this.userService.currentUser) {
      this.usuario = {
        nombre: this.userService.currentUser.nombre || '',
        email: this.userService.currentUser.email || '',
        objetivo: this.userService.currentUser.objetivo || '',
        nivel: this.userService.currentUser.nivel || '',
        edad: this.userService.currentUser.edad || 0,
        peso: this.userService.currentUser.peso || 0,
        altura: this.userService.currentUser.altura || 0,
      };
      this.cargarRutinasRecomendadas();
    }
  }

  guardarPerfil() {
    if (!this.usuario.nombre || !this.usuario.objetivo || !this.usuario.nivel) {
      alert('Por favor completa todos los campos obligatorios (*).');
      return;
    }

    this.userService.saveUser(this.usuario);
    this.cargarRutinasRecomendadas();

    const isAdmin = this.userService.isAdmin();
    let message = 'Perfil guardado correctamente.';
    if (isAdmin) {
      message += '\n🔑 ¡Acceso de administrador activado!';
    }
    alert(message);
  }

  eliminarPerfil() {
    if (
      confirm(
        '¿Estás seguro de que quieres eliminar tu perfil? Esta acción no se puede deshacer.'
      )
    ) {
      this.userService.clearAllData();
      this.usuario = {
        nombre: '',
        email: '',
        objetivo: '',
        nivel: '',
        edad: 0,
        peso: 0,
        altura: 0,
      };
      alert('Perfil eliminado correctamente.');
    }
  }

  iniciarSesion() {
    if (this.userService.currentUser) {
      this.userService.incrementSessions();
      alert(
        `¡Sesión iniciada! Total de sesiones: ${this.userService.currentUser.sesiones}`
      );
    }
  }

  verRutina(rutina: any) {
    alert(
      `Rutina: ${rutina.nombre}\n\nDescripción: ${rutina.descripcion}\nDuración: ${rutina.duracion} minutos\nNivel: ${rutina.nivel}`
    );
  }

  cargarRutinasRecomendadas() {
    // Simular rutinas recomendadas basadas en el perfil del usuario
    if (this.usuario.objetivo && this.usuario.nivel) {
      this.rutinasRecomendadas = [
        {
          nombre: 'Rutina Personalizada',
          descripcion: `Rutina diseñada para ${this.usuario.objetivo} nivel ${this.usuario.nivel}`,
          nivel: this.usuario.nivel,
          duracion: 45,
        },
        {
          nombre: 'Rutina Complementaria',
          descripcion:
            'Rutina adicional para complementar tu entrenamiento principal',
          nivel: this.usuario.nivel,
          duracion: 30,
        },
      ];
    }
  }

  calcularIMC(): string {
    if (this.usuario.peso && this.usuario.altura) {
      const alturaMetros = this.usuario.altura / 100;
      const imc = this.usuario.peso / (alturaMetros * alturaMetros);
      return imc.toFixed(1);
    }
    return 'N/A';
  }
}

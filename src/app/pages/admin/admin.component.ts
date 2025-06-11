import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RutinaService, Rutina } from '../../services/rutina.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent],
  template: `
    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="display-4 fw-bold mb-4">Panel de Administración</h1>
            <p class="lead">
              Gestiona las rutinas disponibles para los usuarios
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Admin Panel -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- Form Section -->
          <div class="col-lg-4 mb-4">
            <div class="card">
              <div class="card-header">
                <h3 class="mb-0">
                  {{ editandoRutina ? 'Editar Rutina' : 'Nueva Rutina' }}
                </h3>
              </div>
              <div class="card-body">
                <form (ngSubmit)="guardarRutina()">
                  <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      [(ngModel)]="rutinaForm.nombre"
                      name="nombre"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="descripcion" class="form-label"
                      >Descripción</label
                    >
                    <textarea
                      class="form-control"
                      id="descripcion"
                      rows="3"
                      [(ngModel)]="rutinaForm.descripcion"
                      name="descripcion"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="objetivo" class="form-label">Objetivo</label>
                    <select
                      class="form-select"
                      id="objetivo"
                      [(ngModel)]="rutinaForm.objetivo"
                      name="objetivo"
                      required
                    >
                      <option value="">Seleccionar objetivo</option>
                      <option value="perdida-peso">Pérdida de peso</option>
                      <option value="ganancia-muscular">
                        Ganancia muscular
                      </option>
                      <option value="resistencia">Resistencia</option>
                      <option value="flexibilidad">Flexibilidad</option>
                      <option value="salud-general">Salud general</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="nivel" class="form-label">Nivel</label>
                    <select
                      class="form-select"
                      id="nivel"
                      [(ngModel)]="rutinaForm.nivel"
                      name="nivel"
                      required
                    >
                      <option value="">Seleccionar nivel</option>
                      <option value="principiante">Principiante</option>
                      <option value="intermedio">Intermedio</option>
                      <option value="avanzado">Avanzado</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="duracion" class="form-label"
                      >Duración (minutos)</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="duracion"
                      [(ngModel)]="rutinaForm.duracion"
                      name="duracion"
                      min="15"
                      max="120"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="ejercicios" class="form-label"
                      >Ejercicios (separados por coma)</label
                    >
                    <textarea
                      class="form-control"
                      id="ejercicios"
                      rows="3"
                      [(ngModel)]="ejerciciosTexto"
                      name="ejercicios"
                      placeholder="Sentadillas, Flexiones, Plancha..."
                    ></textarea>
                  </div>

                  <div class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary">
                      {{ editandoRutina ? 'Actualizar' : 'Crear' }} Rutina
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary"
                      *ngIf="editandoRutina"
                      (click)="cancelarEdicion()"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Routines List -->
          <div class="col-lg-8">
            <div class="card">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h3 class="mb-0">Rutinas Existentes</h3>
                <span class="badge bg-primary"
                  >{{ rutinas.length }} rutinas</span
                >
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Objetivo</th>
                        <th>Nivel</th>
                        <th>Duración</th>
                        <th>Ejercicios</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let rutina of rutinas">
                        <td>{{ rutina.nombre }}</td>
                        <td>
                          <span class="badge bg-info">{{
                            rutina.objetivo
                          }}</span>
                        </td>
                        <td>
                          <span class="badge bg-success">{{
                            rutina.nivel
                          }}</span>
                        </td>
                        <td>{{ rutina.duracion }} min</td>
                        <td>
                          <small
                            >{{ rutina.ejercicios.length }} ejercicios</small
                          >
                        </td>
                        <td>
                          <div class="btn-group btn-group-sm">
                            <button
                              class="btn btn-outline-primary"
                              (click)="editarRutina(rutina)"
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                            <button
                              class="btn btn-outline-danger"
                              (click)="eliminarRutina(rutina.id)"
                            >
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-4">
            <h3>Estadísticas</h3>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <div class="display-4 fw-bold text-primary">
                  {{ rutinas.length }}
                </div>
                <h5>Total Rutinas</h5>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <div class="display-4 fw-bold text-success">
                  {{ contarPorNivel('principiante') }}
                </div>
                <h5>Principiante</h5>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <div class="display-4 fw-bold text-warning">
                  {{ contarPorNivel('intermedio') }}
                </div>
                <h5>Intermedio</h5>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <div class="card text-center">
              <div class="card-body">
                <div class="display-4 fw-bold text-danger">
                  {{ contarPorNivel('avanzado') }}
                </div>
                <h5>Avanzado</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  rutinas: Rutina[] = [];
  editandoRutina = false;
  rutinaEditandoId = '';

  rutinaForm: Omit<Rutina, 'id'> = {
    nombre: '',
    descripcion: '',
    objetivo: '',
    nivel: '',
    duracion: 30,
    ejercicios: [],
  };

  ejerciciosTexto = '';

  constructor(private rutinaService: RutinaService) {}

  ngOnInit() {
    this.cargarRutinas();
  }

  cargarRutinas() {
    this.rutinas = this.rutinaService.getRutinas();
  }

  guardarRutina() {
    if (
      !this.rutinaForm.nombre ||
      !this.rutinaForm.objetivo ||
      !this.rutinaForm.nivel
    ) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    // Convertir texto de ejercicios a array
    this.rutinaForm.ejercicios = this.ejerciciosTexto
      .split(',')
      .map((e) => e.trim())
      .filter((e) => e.length > 0);

    if (this.editandoRutina) {
      this.rutinaService.updateRutina(this.rutinaEditandoId, this.rutinaForm);
      alert('Rutina actualizada correctamente.');
    } else {
      this.rutinaService.addRutina(this.rutinaForm as Rutina);
      alert('Rutina creada correctamente.');
    }

    this.resetForm();
    this.cargarRutinas();
  }

  editarRutina(rutina: Rutina) {
    this.editandoRutina = true;
    this.rutinaEditandoId = rutina.id;
    this.rutinaForm = { ...rutina };
    this.ejerciciosTexto = rutina.ejercicios.join(', ');
  }

  cancelarEdicion() {
    this.resetForm();
  }

  eliminarRutina(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar esta rutina?')) {
      this.rutinaService.deleteRutina(id);
      this.cargarRutinas();
      alert('Rutina eliminada correctamente.');
    }
  }

  resetForm() {
    this.editandoRutina = false;
    this.rutinaEditandoId = '';
    this.rutinaForm = {
      nombre: '',
      descripcion: '',
      objetivo: '',
      nivel: '',
      duracion: 30,
      ejercicios: [],
    };
    this.ejerciciosTexto = '';
  }

  contarPorNivel(nivel: string): number {
    return this.rutinas.filter((r) => r.nivel === nivel).length;
  }
}
